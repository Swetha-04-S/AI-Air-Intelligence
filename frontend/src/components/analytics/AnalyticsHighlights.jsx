import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

export default function AnalyticsHighlights() {
  const { dashboard } = useDashboard();

  const stats = useMemo(() => {
    if (!dashboard) return null;

    const stations = [...dashboard.stations];

    const highest = [...stations].sort((a, b) => b.aqi - a.aqi)[0];

    const lowest = [...stations].sort((a, b) => a.aqi - b.aqi)[0];

    const avg = Math.round(
      stations.reduce((sum, s) => sum + s.aqi, 0) /
        stations.length
    );

    const severe = stations.filter(
      (s) => s.category === "Severe"
    ).length;

    return {
      highest,
      lowest,
      avg,
      severe,
    };
  }, [dashboard]);

  if (!stats) return null;

  return (
    <div>

      <h2 className="text-3xl font-bold text-white mb-6">
        📊 Today's Highlights
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="rounded-2xl bg-slate-900 border border-red-500 p-6">

          <p className="text-slate-400">
            Highest AQI
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {stats.highest.aqi}
          </h2>

          <p className="text-slate-400 mt-2">
            {stats.highest.station.split(",")[0]}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900 border border-green-500 p-6">

          <p className="text-slate-400">
            Lowest AQI
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {stats.lowest.aqi}
          </h2>

          <p className="text-slate-400 mt-2">
            {stats.lowest.station.split(",")[0]}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900 border border-cyan-500 p-6">

          <p className="text-slate-400">
            Average AQI
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {stats.avg}
          </h2>

        </div>

        <div className="rounded-2xl bg-slate-900 border border-yellow-500 p-6">

          <p className="text-slate-400">
            Severe Stations
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            {stats.severe}
          </h2>

        </div>

      </div>

    </div>
  );
}