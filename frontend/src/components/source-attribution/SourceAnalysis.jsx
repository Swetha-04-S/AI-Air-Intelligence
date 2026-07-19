export default function SourceAnalysis() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          🤖 AI Attribution Analysis
        </h2>
  
        <div className="space-y-5 text-lg text-slate-300">
  
          <p>
            🚗 Road traffic contributes approximately <strong>42%</strong> of the
            current pollution, making it the dominant emission source.
          </p>
  
          <p>
            🏗 Construction dust is responsible for nearly <strong>27%</strong>,
            particularly around rapidly developing zones.
          </p>
  
          <p>
            🏭 Industrial emissions remain moderate but continue to affect
            surrounding monitoring stations.
          </p>
  
          <p>
            🌬 Current meteorological conditions are reducing pollutant
            dispersion, allowing emissions to accumulate.
          </p>
  
        </div>
  
        <div className="mt-8 inline-flex rounded-xl bg-red-500/20 px-6 py-4 text-xl font-semibold text-red-400">
          Dominant Source : Traffic Emissions
        </div>
  
      </div>
    );
  }