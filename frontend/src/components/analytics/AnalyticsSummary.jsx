export default function AnalyticsSummary() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          🤖 AI Analytics Summary
        </h2>
  
        <div className="space-y-5 text-lg text-slate-300">
  
          <p>
            📈 AQI has shown an increasing trend over the last few days,
            indicating deteriorating air quality.
          </p>
  
          <p>
            🌫 PM2.5 continues to be the dominant pollutant across most
            monitoring stations.
          </p>
  
          <p>
            🚗 Traffic-related emissions remain the primary contributor during
            peak hours.
          </p>
  
          <p>
            🌬 Weather conditions are limiting pollutant dispersion,
            increasing pollution accumulation.
          </p>
  
        </div>
  
        <div className="mt-8 inline-flex rounded-xl bg-orange-500/20 px-6 py-4 text-xl font-semibold text-orange-400">
          Overall Air Quality Trend : Worsening
        </div>
  
      </div>
    );
  }