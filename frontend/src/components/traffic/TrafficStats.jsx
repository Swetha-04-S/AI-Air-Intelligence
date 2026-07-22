import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

export default function TrafficStats() {
  const { dashboard, loading, error } = useDashboard();

  const stats = useMemo(() => {
    if (!dashboard) return null;

    const trafficStations = dashboard.stations.filter(
      (s) => s.traffic
    );

    const avgSpeed =
      trafficStations.reduce(
        (sum, s) => sum + s.traffic.speed,
        0
      ) / trafficStations.length;

    const avgCongestion =
      trafficStations.reduce(
        (sum, s) => sum + s.traffic.congestion,
        0
      ) / trafficStations.length;

    const maxDelay = trafficStations.reduce(
      (a, b) =>
        a.traffic.travel_time > b.traffic.travel_time
          ? a
          : b
    );

    return {
      stations: trafficStations.length,
      avgSpeed: avgSpeed.toFixed(1),
      congestion: avgCongestion.toFixed(0),
      hotspot: maxDelay.station.split(",")[0],
    };
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
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      <div className="bg-slate-900 rounded-2xl border border-cyan-500 p-6">
        <p className="text-slate-400">🚦 Average Speed</p>
        <h2 className="text-4xl font-bold text-white mt-2">
          {stats.avgSpeed} km/h
        </h2>
      </div>

      <div className="bg-slate-900 rounded-2xl border border-red-500 p-6">
        <p className="text-slate-400">🚗 Congestion</p>
        <h2 className="text-4xl font-bold text-white mt-2">
          {stats.congestion}%
        </h2>
      </div>

      <div className="bg-slate-900 rounded-2xl border border-green-500 p-6">
        <p className="text-slate-400">📍 Live Stations</p>
        <h2 className="text-4xl font-bold text-white mt-2">
          {stats.stations}
        </h2>
      </div>

      <div className="bg-slate-900 rounded-2xl border border-yellow-500 p-6">
        <p className="text-slate-400">🚨 Worst Traffic</p>
        <h2 className="text-xl font-bold text-white mt-2">
          {stats.hotspot}
        </h2>
      </div>

    </div>
  );
}