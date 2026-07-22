import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function WeatherChart() {

  const { dashboard, loading, error } = useDashboard();

  const data = useMemo(() => {

    if (!dashboard) return [];

    return dashboard.stations
      .slice(0, 7)
      .map((station) => ({
        station: station.station.split(",")[0],
        Temperature: station.weather?.temperature ?? 0,
      }));

  }, [dashboard]);

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-2xl text-white">
          Loading Weather...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
        <h2 className="text-red-500">
          {error}
        </h2>
      </div>
    );
  }

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        🌡 Temperature Across Monitoring Stations
      </h2>

      <div style={{ width: "100%", height: 350 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="station"
              angle={-20}
              textAnchor="end"
              height={80}
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="Temperature"
              stroke="#f97316"
              strokeWidth={4}
              dot={{ r: 5 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}