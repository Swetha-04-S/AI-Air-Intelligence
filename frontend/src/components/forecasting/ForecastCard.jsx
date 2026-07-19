export default function ForecastCard({
    period,
    aqi,
    category,
    trend,
    color,
  }) {
    return (
      <div
        className={`rounded-2xl border ${color} bg-slate-900 p-7 shadow-lg transition-all duration-300 hover:scale-[1.02]`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            {period}
          </h3>
  
          <span className="text-2xl">
            {trend}
          </span>
        </div>
  
        <h1 className="mt-6 text-6xl font-bold text-white">
          {aqi}
        </h1>
  
        <p className="mt-2 text-lg text-slate-400">
          AQI
        </p>
  
        <div className="mt-6">
          <span className="rounded-full bg-white/5 px-4 py-2 text-cyan-400 font-medium">
            {category}
          </span>
        </div>
      </div>
    );
  }