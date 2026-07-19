const pollutants = [
    { name: "PM2.5", value: 101 },
    { name: "PM10", value: 92 },
    { name: "NO₂", value: 49 },
    { name: "SO₂", value: 31 },
    { name: "CO", value: 70 },
    { name: "O₃", value: 55 },
  ];
  
  export default function AnalyticsComparison() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          📊 Pollutant Comparison
        </h2>
  
        <div className="space-y-5">
  
          {pollutants.map((pollutant) => (
            <div
              key={pollutant.name}
              className="flex items-center justify-between rounded-xl bg-slate-800 px-6 py-4"
            >
              <span className="text-lg text-slate-300">
                {pollutant.name}
              </span>
  
              <span className="text-2xl font-bold text-cyan-400">
                {pollutant.value}
              </span>
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }