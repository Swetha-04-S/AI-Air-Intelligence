import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
} from "recharts";

export default function EnforcementMap() {
  const { dashboard, loading, error } = useDashboard();

  const data = useMemo(() => {
    if (!dashboard) return [];

    return [...dashboard.stations]
      .sort((a, b) => b.aqi - a.aqi)
      .slice(0, 10)
      .map((station) => ({
        station: station.station.split(",")[0],
        AQI: station.aqi,
        pollutant: station.dominant_pollutant,
        action:
          station.aqi >= 400
            ? "Immediate Action"
            : station.aqi >= 300
            ? "Priority Inspection"
            : station.aqi >= 200
            ? "Close Monitoring"
            : "Routine Monitoring",
      }));
  }, [dashboard]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl text-white">
          Loading Enforcement Data...
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

      <h2 className="text-3xl font-bold text-white mb-3">
        🚨 Top Enforcement Priority Stations
      </h2>

      <p className="text-slate-400 mb-8">
        Highest AQI monitoring stations requiring immediate enforcement
        attention.
      </p>

      <div style={{ width: "100%", height: 500 }}>

        <ResponsiveContainer>

          <BarChart data={data}>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="station"
              angle={-25}
              textAnchor="end"
              height={90}
              stroke="#94a3b8"
            />

            <YAxis stroke="#94a3b8" />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
              }}
              labelStyle={{
                color: "white",
              }}
            />

            <Bar
              dataKey="AQI"
              radius={[8, 8, 0, 0]}
            >

              <LabelList
                dataKey="AQI"
                position="top"
                fill="#ffffff"
              />

              {data.map((station, index) => (
                <Cell
                  key={index}
                  fill={
                    station.AQI >= 400
                      ? "#dc2626"
                      : station.AQI >= 300
                      ? "#ea580c"
                      : station.AQI >= 200
                      ? "#facc15"
                      : "#22c55e"
                  }
                />
              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-8 grid md:grid-cols-4 gap-4">

        <div className="rounded-xl bg-red-500/10 border border-red-500 p-4">
          <h3 className="text-red-400 font-semibold">
            🔴 AQI ≥ 400
          </h3>
          <p className="text-slate-300 mt-2">
            Immediate enforcement required.
          </p>
        </div>

        <div className="rounded-xl bg-orange-500/10 border border-orange-500 p-4">
          <h3 className="text-orange-400 font-semibold">
            🟠 AQI 300–399
          </h3>
          <p className="text-slate-300 mt-2">
            Priority inspection recommended.
          </p>
        </div>

        <div className="rounded-xl bg-yellow-500/10 border border-yellow-500 p-4">
          <h3 className="text-yellow-300 font-semibold">
            🟡 AQI 200–299
          </h3>
          <p className="text-slate-300 mt-2">
            Close monitoring advised.
          </p>
        </div>

        <div className="rounded-xl bg-green-500/10 border border-green-500 p-4">
          <h3 className="text-green-400 font-semibold">
            🟢 AQI &lt; 200
          </h3>
          <p className="text-slate-300 mt-2">
            Routine surveillance.
          </p>
        </div>

      </div>

    </div>
  );
}