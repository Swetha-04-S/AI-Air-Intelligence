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
          ● Live
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
            // Get the first pollutant value
            const firstValue = Number(
              Object.values(station.pollutants)[0]
            );

            // AQI Status
            const status = getAQIStatus(firstValue);

            // Custom glowing icon
            const icon = L.divIcon({
              className: "",
              html: `
                <div
                  style="
                    width:20px;
                    height:20px;
                    border-radius:50%;
                    background:${status.color};
                    border:3px solid white;
                    box-shadow:0 0 15px ${status.color};
                  ">
                </div>
              `,
              iconSize: [20, 20],
              iconAnchor: [10, 10],
              popupAnchor: [0, -10],
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
                  <div className="space-y-3 min-w-[220px]">
                    <h3 className="text-lg font-bold">
                      {station.station}
                    </h3>

                    <div className="text-sm text-gray-600">
                      <strong>Last Updated</strong>
                      <br />
                      {station.last_update}
                    </div>

                    <hr />

                    <div>
                      <h4 className="font-semibold mb-2">
                        Pollutants
                      </h4>

                      {Object.entries(station.pollutants).map(
                        ([pollutant, value]) => (
                          <div
                            key={pollutant}
                            className="flex justify-between py-1"
                          >
                            <span>{pollutant}</span>

                            <strong>{value}</strong>
                          </div>
                        )
                      )}
                    </div>

                    <hr />

                    <div
                      className="text-center font-bold text-lg"
                      style={{
                        color: status.color,
                      }}
                    >
                      {status.label}
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}