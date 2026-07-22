import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ForecastChart({ forecast }) {

  if (!forecast || forecast.length === 0) {
    return null;
  }

  const station = forecast[0];

  const data = [
    {
      time: "Current",
      AQI: station.current_aqi,
    },
    {
      time: "24h",
      AQI: station.forecast_24h,
    },
    {
      time: "48h",
      AQI: station.forecast_48h,
    },
    {
      time: "72h",
      AQI: station.forecast_72h,
    },
  ];

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        📈 AQI Prediction Trend
      </h2>

      <div style={{ width: "100%", height: 420 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="AQI"
              stroke="#06b6d4"
              strokeWidth={4}
              dot={{ r: 6 }}
              activeDot={{ r: 8 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}