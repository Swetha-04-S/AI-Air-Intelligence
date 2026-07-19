import {
    FaMapMarkerAlt,
    FaClock,
    FaWind,
    FaSmog,
  } from "react-icons/fa";
  
  export default function StationCard({ station }) {
    return (
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 transition-all">
  
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <FaMapMarkerAlt className="text-cyan-400" />
          {station.station}
        </h3>
  
        <div className="space-y-2 mb-5">
  
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
  
              <span className="font-bold">
                {value}
              </span>
  
            </div>
  
          ))}
  
        </div>
  
        <div className="text-sm text-slate-400 flex items-center gap-2 mb-2">
          <FaClock />
          {station.last_update}
        </div>
  
        <div className="text-sm text-slate-500">
          {station.latitude}, {station.longitude}
        </div>
  
      </div>
    );
  }