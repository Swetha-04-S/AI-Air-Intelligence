export default function TrafficAnalysis() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          🤖 AI Traffic Analysis
        </h2>
  
        <div className="space-y-5 text-lg text-slate-300">
  
          <p>
            🚦 Traffic congestion is currently high around Central Delhi.
          </p>
  
          <p>
            🚗 Vehicle emissions are likely contributing to elevated NO₂
            concentrations.
          </p>
  
          <p>
            🌬 Low wind conditions may reduce pollutant dispersion,
            increasing localized pollution.
          </p>
  
        </div>
  
        <div className="mt-10 inline-block rounded-xl bg-red-500/20 px-6 py-4 text-xl font-semibold text-red-400">
  
          Overall Traffic Impact : High
  
        </div>
  
      </div>
    );
  }