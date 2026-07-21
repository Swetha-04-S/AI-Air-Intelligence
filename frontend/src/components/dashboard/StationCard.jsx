import {
    FaMapMarkerAlt,
    FaClock,
    FaWind,
    FaSmog,
    FaCar,
    FaTachometerAlt,
    FaTrafficLight,
  } from "react-icons/fa";
  
  import { getAQIStatus } from "../../utils/aqiUtils";
  
  export default function StationCard({ station }) {
    const status = getAQIStatus(station.aqi);
  
    return (
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 transition-all">
  
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
  
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaMapMarkerAlt className="text-cyan-400" />
              {station.station}
            </h3>
  
            <div className="text-sm text-slate-400 mt-1">
              {station.last_update}
            </div>
          </div>
  
          <div
            className="px-4 py-2 rounded-xl font-bold"
            style={{
              backgroundColor: `${status.color}20`,
              color: status.color,
            }}
          >
            AQI {station.aqi}
          </div>
  
        </div>
  
        {/* AQI */}
        <div
          className="rounded-xl p-4 mb-5"
          style={{
            border: `1px solid ${status.color}`,
          }}
        >
          <div
            className="font-bold text-lg"
            style={{
              color: status.color,
            }}
          >
            {station.category}
          </div>
  
          <div className="text-sm text-slate-400 mt-2">
            Dominant Pollutant
          </div>
  
          <div className="font-semibold">
            {station.dominant_pollutant}
          </div>
        </div>
  
        {/* Traffic */}
        {station.traffic && (
          <div className="rounded-xl bg-slate-800 p-4 mb-5">
  
            <h4 className="font-semibold flex items-center gap-2 mb-3">
              <FaCar className="text-cyan-400" />
              Live Traffic
            </h4>
  
            <div className="flex justify-between py-1">
              <span className="flex items-center gap-2">
                <FaTrafficLight />
                Level
              </span>
  
              <strong>
                {station.traffic.traffic_level}
              </strong>
            </div>
  
            <div className="flex justify-between py-1">
              <span>Congestion</span>
  
              <strong>
                {station.traffic.congestion}%
              </strong>
            </div>
  
            <div className="flex justify-between py-1">
              <span className="flex items-center gap-2">
                <FaTachometerAlt />
                Speed
              </span>
  
              <strong>
                {station.traffic.speed} km/h
              </strong>
            </div>
  
          </div>
        )}
  
        {/* Pollutants */}
        <div className="space-y-2">
  
          <h4 className="font-semibold mb-2">
            Pollutant Levels
          </h4>
  
          {Object.entries(station.pollutants).map(([name, value]) => (
  
            <div
              key={name}
              className="flex justify-between bg-slate-800 rounded-lg px-3 py-2"
            >
  
              <span className="flex items-center gap-2">
  
                {name.includes("PM") ? (
                  <FaSmog />
                ) : (
                  <FaWind />
                )}
  
                {name}
  
              </span>
  
              <strong>{value}</strong>
  
            </div>
  
          ))}
  
        </div>
  
        <div className="mt-5 text-xs text-slate-500">
          {station.latitude}, {station.longitude}
        </div>
  
      </div>
    );
  }