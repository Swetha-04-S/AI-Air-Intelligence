const weekly = [
    { day: "Mon", aqi: 152 },
    { day: "Tue", aqi: 161 },
    { day: "Wed", aqi: 170 },
    { day: "Thu", aqi: 164 },
    { day: "Fri", aqi: 181 },
    { day: "Sat", aqi: 175 },
    { day: "Sun", aqi: 168 },
  ];
  
  export default function AnalyticsTrend() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          📅 Weekly AQI Trend
        </h2>
  
        <div className="space-y-4">
  
          {weekly.map((item) => (
            <div
              key={item.day}
              className="flex items-center justify-between border-b border-slate-800 pb-3"
            >
              <span className="text-lg text-slate-300">
                {item.day}
              </span>
  
              <span className="text-xl font-bold text-cyan-400">
                AQI {item.aqi}
              </span>
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }