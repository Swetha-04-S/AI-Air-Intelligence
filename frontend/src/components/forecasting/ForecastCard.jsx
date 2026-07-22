export default function ForecastCard({ station }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-lg">

      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        🤖 AI AQI Forecast
      </h2>

      <p className="font-semibold text-lg">
        {station.station}
      </p>

      <div className="grid grid-cols-2 gap-4 mt-5">

        <div>
          <p className="text-gray-400">Current AQI</p>
          <p className="text-3xl font-bold">{station.current_aqi}</p>
        </div>

        <div>
          <p className="text-gray-400">Confidence</p>
          <p className="text-3xl font-bold">{station.confidence}%</p>
        </div>

        <div>
          <p className="text-gray-400">24 Hours</p>
          <p className="text-xl">{station.forecast_24h}</p>
        </div>

        <div>
          <p className="text-gray-400">48 Hours</p>
          <p className="text-xl">{station.forecast_48h}</p>
        </div>

        <div>
          <p className="text-gray-400">72 Hours</p>
          <p className="text-xl">{station.forecast_72h}</p>
        </div>

        <div>
          <p className="text-gray-400">Trend</p>
          <p className="text-xl">{station.trend}</p>
        </div>

      </div>

      <div className="mt-6">

        <p className="font-semibold text-cyan-300">
          Dominant Factor
        </p>

        <p>{station.dominant_factor}</p>

      </div>

      <div className="mt-4">

        <p className="font-semibold text-cyan-300">
          Recommendation
        </p>

        <p className="text-gray-300">
          {station.recommendation}
        </p>

      </div>

    </div>
  );
}