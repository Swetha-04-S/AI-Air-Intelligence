import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

export default function TrafficHotspots() {
  const { dashboard, loading, error } = useDashboard();

  const hotspots = useMemo(() => {
    if (!dashboard) return [];

    return dashboard.stations
      .filter((station) => station.traffic)
      .sort(
        (a, b) =>
          b.traffic.congestion - a.traffic.congestion
      )
      .slice(0, 8);
  }, [dashboard]);

  if (loading)
    return (
      <div className="text-white">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-red-500">
        {error}
      </div>
    );

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        🚦 Live Congestion Ranking
      </h2>

      <div className="space-y-6">

        {hotspots.map((station, index) => (

          <div key={station.station}>

            <div className="flex justify-between mb-2">

              <span className="text-white font-semibold">
                #{index + 1} {station.station.split(",")[0]}
              </span>

              <span className="text-cyan-400 font-bold">
                {station.traffic.congestion}%
              </span>

            </div>

            <div className="h-4 rounded-full bg-slate-700 overflow-hidden">

              <div
                className="h-full rounded-full bg-red-500"
                style={{
                  width: `${station.traffic.congestion}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}