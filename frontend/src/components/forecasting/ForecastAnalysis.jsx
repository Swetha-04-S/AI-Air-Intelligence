export default function ForecastAnalysis({ forecast }) {

  if (!forecast || forecast.length === 0) {
    return null;
  }

  const station = forecast[0];

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        🤖 AI Forecast Analysis
      </h2>

      <div className="space-y-6 text-slate-300 text-lg">

        <p>

          <strong>Trend:</strong>{" "}
          {station.trend}

        </p>

        <p>

          <strong>Confidence:</strong>{" "}
          {station.confidence}%

        </p>

        <p>

          <strong>Dominant Factor:</strong>{" "}
          {station.dominant_factor}

        </p>

        <p>

          <strong>Recommendation:</strong>{" "}
          {station.recommendation}

        </p>

      </div>

    </div>

  );

}