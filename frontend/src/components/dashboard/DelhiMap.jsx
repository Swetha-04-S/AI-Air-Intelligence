import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { getAQIStatus } from "../../utils/aqiUtils";

export default function DelhiMap({ stations }) {
  return (
    <div className="mt-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-3xl font-bold text-white">
            🌍 Live Delhi AQI Map
          </h2>

          <p className="text-gray-400 mt-1">
            Interactive monitoring stations across Delhi
          </p>
        </div>

        <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
          ● {stations.length} Live Stations
        </span>
      </div>

      {/* Map */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
        <MapContainer
          center={[28.6139, 77.209]}
          zoom={11}
          scrollWheelZoom={true}
          className="h-[500px] w-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {stations.map((station) => {
            const status = getAQIStatus(station.aqi);

            const size =
              station.aqi > 300
                ? 28
                : station.aqi > 200
                ? 24
                : station.aqi > 100
                ? 20
                : 16;

            const icon = L.divIcon({
              className: "",
              html: `
                <div
                  style="
                    width:${size}px;
                    height:${size}px;
                    border-radius:50%;
                    background:${status.color};
                    border:3px solid white;
                    box-shadow:0 0 15px ${status.color};
                  ">
                </div>
              `,
              iconSize: [size, size],
              iconAnchor: [size / 2, size / 2],
              popupAnchor: [0, -size / 2],
            });

            return (
              <Marker
                key={station.station}
                position={[
                  station.latitude,
                  station.longitude,
                ]}
                icon={icon}
              >
                <Popup>
                  <div className="space-y-4 min-w-[240px]">

                    <h3 className="text-lg font-bold">
                      📍 {station.station}
                    </h3>

                    <div className="text-sm text-gray-600">
                      <strong>Last Updated</strong>
                      <br />
                      {station.last_update}
                    </div>

                    <hr />

                    {/* AQI Summary */}
                    <div
                      className="rounded-xl p-3 text-center"
                      style={{
                        backgroundColor: `${status.color}20`,
                        color: status.color,
                      }}
                    >
                      <div className="text-3xl font-bold">
                        AQI {station.aqi}
                      </div>

                      <div className="font-semibold">
                        {station.category}
                      </div>

                      <div className="text-sm mt-2">
                        Dominant Pollutant
                      </div>

                      <div className="font-bold">
                        {station.dominant_pollutant}
                      </div>
                    </div>

                    <hr />

                    <div>
                      <h4 className="font-semibold mb-2">
                        Pollutant Levels
                      </h4>

                      {Object.entries(station.pollutants).map(
                        ([pollutant, value]) => (
                          <div
                            key={pollutant}
                            className="flex justify-between py-1 text-sm"
                          >
                            <span>{pollutant}</span>
                            <strong>{value}</strong>
                          </div>
                        )
                      )}
                    </div>

                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* AQI Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-white">

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-green-500"></span>
          Good
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-lime-500"></span>
          Satisfactory
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-yellow-500"></span>
          Moderate
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-red-500"></span>
          Poor
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-purple-500"></span>
          Very Poor
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded-full bg-violet-700"></span>
          Severe
        </div>

      </div>

    </div>
  );
}