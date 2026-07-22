import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function AnalyticsChart() {

  const { dashboard, loading, error } = useDashboard();

  const data = useMemo(() => {

    if (!dashboard) return [];

    return dashboard.stations
      .slice(0, 10)
      .map((station) => ({
        station: station.station.split(",")[0],
        AQI: station.aqi,
      }));

  }, [dashboard]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
        <h2 className="text-2xl text-white">Loading Analytics...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
        <h2 className="text-red-500">{error}</h2>
      </div>
    );
  }

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">

      <h2 className="text-3xl font-bold text-white mb-8">
        📈 AQI Trend Analysis
      </h2>

      <div style={{ width: "100%", height: 400 }}>

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
              dataKey="AQI"
              stroke="#06b6d4"
              strokeWidth={4}
              dot={{ r: 5 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}