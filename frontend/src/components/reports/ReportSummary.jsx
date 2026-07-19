export default function ReportSummary() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          🤖 AI Executive Summary
        </h2>
  
        <div className="space-y-5 text-lg text-slate-300">
  
          <p>
            🌫 Air quality remained in the Poor category across most monitoring
            stations today.
          </p>
  
          <p>
            🚗 Traffic emissions and stagnant weather conditions were the
            dominant contributors.
          </p>
  
          <p>
            📈 AQI is expected to increase over the next 48–72 hours.
          </p>
  
          <p>
            🚨 Immediate mitigation measures are recommended in identified
            hotspots.
          </p>
  
        </div>
  
      </div>
    );
  }