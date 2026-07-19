import {
    FaMapMarkerAlt,
    FaBroadcastTower,
    FaClock,
    FaBuilding,
  } from "react-icons/fa";
  
  export default function DashboardHero({
    city,
    lastUpdated,
    totalStations,
  }) {
    return (
      <div className="mb-10">
  
        <div className="flex items-start justify-between flex-wrap gap-6">
  
          {/* Left */}
          <div>
  
            <h1 className="text-4xl font-bold text-white">
              🌍 AI Air Intelligence Dashboard
            </h1>
  
            <p className="text-slate-400 mt-3 text-lg">
              Real-time Environmental Intelligence for Smart City Monitoring
            </p>
  
            <div className="flex flex-wrap gap-3 mt-6">
  
              <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-4 py-2">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>{city}</span>
              </div>
  
              <div className="flex items-center gap-2 bg-green-500/20 text-green-400 rounded-xl px-4 py-2">
                <FaBroadcastTower />
                <span>Live Data</span>
              </div>
  
              <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-4 py-2">
                <FaBuilding className="text-orange-400" />
                <span>{totalStations} Stations</span>
              </div>
  
              <div className="flex items-center gap-2 bg-slate-800 rounded-xl px-4 py-2">
                <FaClock className="text-purple-400" />
                <span>{lastUpdated}</span>
              </div>
  
            </div>
  
          </div>
  
          {/* Right */}
  
          <div className="bg-gradient-to-r
                          from-cyan-500/20
                          to-blue-500/20
                          border border-cyan-500/20
                          rounded-2xl
                          px-8
                          py-6
                          text-center">
  
            <div className="text-slate-400 text-sm">
              Current Status
            </div>
  
            <div className="text-3xl font-bold text-green-400 mt-2">
              LIVE
            </div>
  
            <div className="text-sm text-slate-400 mt-2">
              Data Connected
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }