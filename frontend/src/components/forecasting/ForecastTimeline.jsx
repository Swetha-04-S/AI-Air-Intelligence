export default function ForecastTimeline({ forecast }) {

  if (!forecast || forecast.length === 0) {
    return null;
  }

  const station = forecast[0];

  const timeline = [
    {
      time: "Current",
      aqi: station.current_aqi,
    },
    {
      time: "24 Hours",
      aqi: station.forecast_24h,
    },
    {
      time: "48 Hours",
      aqi: station.forecast_48h,
    },
    {
      time: "72 Hours",
      aqi: station.forecast_72h,
    },
  ];

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        🕒 Prediction Timeline
      </h2>

      <div className="space-y-6">

        {timeline.map((item) => (

          <div
            key={item.time}
            className="flex items-center justify-between border-b border-slate-800 pb-4"
          >

            <span className="text-lg text-slate-300">
              {item.time}
            </span>

            <span className="text-2xl font-bold text-cyan-400">
              AQI {item.aqi}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}