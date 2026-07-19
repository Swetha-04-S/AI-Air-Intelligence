import {
    FaSmog,
    FaCloud,
    FaWind,
    FaFire,
    FaLeaf,
  } from "react-icons/fa";
  
  const pollutantConfig = {
    "PM2.5": {
      icon: <FaSmog size={28} />,
      color: "border-orange-500",
    },
    PM10: {
      icon: <FaCloud size={28} />,
      color: "border-yellow-500",
    },
    NO2: {
      icon: <FaWind size={28} />,
      color: "border-red-500",
    },
    SO2: {
      icon: <FaFire size={28} />,
      color: "border-purple-500",
    },
    CO: {
      icon: <FaCloud size={28} />,
      color: "border-blue-500",
    },
    OZONE: {
      icon: <FaLeaf size={28} />,
      color: "border-green-500",
    },
  };
  
  function getStatus(value) {
    if (value <= 50) return "Good";
    if (value <= 100) return "Satisfactory";
    if (value <= 200) return "Moderate";
    if (value <= 300) return "Poor";
    if (value <= 400) return "Very Poor";
    return "Severe";
  }
  
  export default function PollutantCard({ pollutant, value }) {
    const config = pollutantConfig[pollutant];
  
    return (
      <div
        className={`
          bg-bg-card
          rounded-2xl
          p-6
          border-l-4
          ${config.color}
          shadow-card
          hover:scale-105
          transition-all
          duration-300
        `}
      >
        <div className="flex items-center justify-between">
          {config.icon}
  
          <span className="text-xs text-gray-400">
            Live
          </span>
        </div>
  
        <h3 className="mt-4 text-lg font-semibold">
          {pollutant}
        </h3>
  
        <p className="text-4xl font-bold mt-2">
          {value}
        </p>
  
        <p className="text-sm text-gray-400 mt-2">
          {getStatus(value)}
        </p>
      </div>
    );
  }