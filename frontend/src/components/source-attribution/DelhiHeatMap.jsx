import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";

import useDashboard from "../../hooks/useDashboard";

function HeatLayer({ stations }) {
  const map = useMap();

  useEffect(() => {
    if (!stations || stations.length === 0) return;

    const heatPoints = stations.map((station) => [
      Number(station.latitude),
      Number(station.longitude),
      Math.min(Number(station.aqi) / 300, 1),
    ]);

    console.log("Heat Points:", heatPoints);
    const heat = L.heatLayer(heatPoints, {
        radius: 30,
        blur: 22,
        maxZoom: 17,
        minOpacity: 0.45,
        gradient: {
            0.2: "#22c55e",
            0.4: "#facc15",
            0.6: "#fb923c",
            0.8: "#ef4444",
            1.0: "#7f1d1d",
        },
    });


    heat.addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [stations, map]);

  return null;
}

export default function DelhiHeatMap() {
  const { dashboard, loading, error } = useDashboard();

  if (loading) {
    return (
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-white">
        Loading Heatmap...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        🔥 Live Delhi AQI Heatmap
      </h2>

      <div
        style={{
          height: "600px",
          borderRadius: "18px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={[28.6139, 77.209]}
          zoom={11}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <HeatLayer stations={dashboard?.stations || []} />
        </MapContainer>
      </div>
    </div>
  );
}