export default function WeatherAnalysis() {
    return (
      <div
        className="
          bg-slate-900
          border border-slate-800
          rounded-2xl
          p-8
          mt-8
        "
      >
        <h2 className="text-2xl font-bold mb-6">
          🤖 AI Weather Analysis
        </h2>
  
        <div className="space-y-4 text-slate-300 leading-8">
  
          <p>
            💨 Wind speed is currently low, reducing
            pollutant dispersion across the city.
          </p>
  
          <p>
            💧 Humidity is moderate, allowing fine
            particulate matter (PM2.5) to remain
            suspended for longer periods.
          </p>
  
          <p>
            🌡 Warm temperatures may slightly increase
            ozone formation during the afternoon.
          </p>
  
          <div
            className="
              mt-6
              inline-flex
              bg-orange-500/20
              text-orange-400
              px-5
              py-3
              rounded-xl
              font-semibold
            "
          >
            Overall Weather Risk : Moderate
          </div>
  
        </div>
      </div>
    );
  }