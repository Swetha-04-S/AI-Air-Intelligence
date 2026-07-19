export default function ForecastAnalysis() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="text-3xl font-bold text-white mb-8">
        🤖 AI Forecast Analysis
      </h2>

      <div className="space-y-6 text-slate-300 text-lg">

        <p>
          🌫 PM2.5 concentrations are expected to increase steadily over the
          next 72 hours due to low wind speed and persistent atmospheric
          stability.
        </p>

        <p>
          🚗 Increased weekday traffic is likely to contribute to elevated
          NO₂ and CO concentrations during morning and evening peak hours.
        </p>

        <p>
          🌡 Warm temperatures may accelerate ozone (O₃) formation during
          afternoon hours.
        </p>

        <p>
          🌬 Weak north-westerly winds are expected to reduce pollutant
          dispersion across central Delhi.
        </p>

      </div>

      <div className="mt-8 inline-flex rounded-xl bg-red-500/20 px-6 py-4 text-xl font-semibold text-red-400">
        Overall Forecast Risk : Poor Air Quality Expected
      </div>
    </div>
  );
}