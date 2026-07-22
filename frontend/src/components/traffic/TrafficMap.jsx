import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function TrafficMap() {

  const { dashboard, loading, error } = useDashboard();

  const data = useMemo(() => {

    if (!dashboard) return [];

    return dashboard.stations
      .slice(0, 10)
      .map((station) => ({
        station: station.station.split(",")[0],
        Congestion: station.traffic?.congestion ?? 0,
      }));

  }, [dashboard]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl text-white">
          Loading Traffic...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-red-500">
          {error}
        </h2>
      </div>
    );
  }

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        🚗 Traffic Congestion Across Delhi
      </h2>

      <div style={{ width: "100%", height: 400 }}>

        <ResponsiveContainer>

          <BarChart data={data}>

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

            <Bar
              dataKey="Congestion"
              fill="#06b6d4"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}