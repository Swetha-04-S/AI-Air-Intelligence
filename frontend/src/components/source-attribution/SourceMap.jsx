import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#ef4444",
  "#f59e0b",
  "#3b82f6",
  "#22c55e",
  "#8b5cf6",
];

export default function SourceMap() {

  const { dashboard, loading, error } = useDashboard();

  const data = useMemo(() => {

    if (!dashboard) return [];

    const totals = {};

    dashboard.stations.forEach((station) => {

      if (!station.source_attribution) return;

      station.source_attribution.forEach((item) => {

        totals[item.source] =
          (totals[item.source] || 0) + item.percentage;

      });

    });

    return Object.entries(totals).map(([name, value]) => ({
      name,
      value: Number((value / dashboard.stations.length).toFixed(1)),
    }));

  }, [dashboard]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl text-white">
          Loading Source Attribution...
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

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">

      <h2 className="text-3xl font-bold text-white mb-8">
        🧪 Pollution Source Distribution
      </h2>

      <div style={{ width: "100%", height: 420 }}>

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={140}
              label
            >

              {data.map((entry, index) => (

                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}