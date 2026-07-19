import {
    FaBroadcastTower,
    FaMapMarkerAlt,
    FaSyncAlt,
  } from "react-icons/fa";
  
  export default function LiveHeader({
    city,
    totalStations,
  }) {
    return (
      <div className="mb-8">
  
        <div className="flex justify-between items-center flex-wrap gap-6">
  
          <div>
  
            <h1 className="text-4xl font-bold text-white">
              🌍 Live Air Quality Monitoring
            </h1>
  
            <p className="text-slate-400 mt-2">
              Real-time monitoring of CPCB stations across Delhi
            </p>
  
          </div>
  
          <button
            className="
              flex items-center gap-2
              bg-cyan-600
              hover:bg-cyan-700
              transition
              px-5 py-3
              rounded-xl
              font-semibold
            "
          >
            <FaSyncAlt />
  
            Refresh
          </button>
  
        </div>
  
        <div className="flex flex-wrap gap-3 mt-6">
  
          <div className="bg-slate-800 px-4 py-2 rounded-xl flex items-center gap-2">
  
            <FaMapMarkerAlt className="text-cyan-400"/>
  
            {city}
  
          </div>
  
          <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl flex items-center gap-2">
  
            <FaBroadcastTower />
  
            Live Data
  
          </div>
  
          <div className="bg-slate-800 px-4 py-2 rounded-xl">
  
            {totalStations} Monitoring Stations
  
          </div>
  
        </div>
  
      </div>
    );
  }