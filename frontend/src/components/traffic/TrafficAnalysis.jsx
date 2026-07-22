import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

export default function TrafficAnalysis() {
  const { dashboard, loading, error } = useDashboard();

  const analysis = useMemo(() => {
    if (!dashboard) return null;

    const trafficStations = dashboard.stations.filter(
      (station) => station.traffic
    );

    if (!trafficStations.length) return null;

    const highestCongestion = [...trafficStations].sort(
      (a, b) => b.traffic.congestion - a.traffic.congestion
    )[0];

    const avgSpeed =
      trafficStations.reduce(
        (sum, station) => sum + station.traffic.speed,
        0
      ) / trafficStations.length;

    const avgCongestion =
      trafficStations.reduce(
        (sum, station) => sum + station.traffic.congestion,
        0
      ) / trafficStations.length;

    let impact = "Low";

    if (avgCongestion >= 70) impact = "High";
    else if (avgCongestion >= 40) impact = "Moderate";

    return {
      highestCongestion,
      avgSpeed: avgSpeed.toFixed(1),
      avgCongestion: avgCongestion.toFixed(0),
      impact,
    };
  }, [dashboard]);

  if (loading)
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-white">
        Loading Traffic Intelligence...
      </div>
    );

  if (error)
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-red-500">
        {error}
      </div>
    );

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        🤖 AI Traffic Intelligence
      </h2>

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="rounded-xl bg-slate-800 p-6">

          <h3 className="text-xl font-bold text-red-400 mb-3">
            🚨 Severe Congestion Alert
          </h3>

          <p className="text-slate-300 leading-7">
            <span className="font-semibold text-white">
              {analysis.highestCongestion.station}
            </span>{" "}
            currently records the highest congestion level of{" "}
            <span className="text-red-400 font-bold">
              {analysis.highestCongestion.traffic.congestion}%
            </span>
            . AI recommends immediate traffic diversion and signal optimization
            to reduce delays and emissions in this corridor.
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-6">

          <h3 className="text-xl font-bold text-orange-400 mb-3">
            🌫 Pollution Impact
          </h3>

          <p className="text-slate-300 leading-7">
            Heavy congestion combined with reduced traffic speeds
            (<span className="text-white font-semibold">{analysis.avgSpeed} km/h</span>)
            increases vehicle idling, leading to higher PM₂.₅ and NO₂ emissions
            around busy road networks.
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-6">

          <h3 className="text-xl font-bold text-cyan-400 mb-3">
            📊 Traffic Overview
          </h3>

          <p className="text-slate-300 leading-7">
            The city-wide average congestion level is
            <span className="text-white font-semibold">
              {" "}{analysis.avgCongestion}%
            </span>.
            Continuous monitoring indicates recurring congestion across major
            urban corridors during peak traffic periods.
          </p>

        </div>

        <div className="rounded-xl bg-slate-800 p-6">

          <h3 className="text-xl font-bold text-green-400 mb-3">
            🚦 Recommended Actions
          </h3>

          <ul className="space-y-2 text-slate-300 list-disc list-inside">
            <li>Optimize traffic signal timings.</li>
            <li>Divert heavy vehicles from congested routes.</li>
            <li>Increase public transport frequency.</li>
            <li>Continuously monitor traffic hotspots.</li>
          </ul>

        </div>

      </div>

      <div className="mt-8 rounded-xl bg-red-950 border border-red-700 p-6">

        <h3 className="text-2xl font-bold text-red-300 mb-3">
          🚨 Overall Traffic Impact
        </h3>

        <p className="text-slate-200 leading-7">
          Based on live congestion data, the overall traffic impact across
          Delhi is currently classified as
          <span className="font-bold text-white">
            {" "}{analysis.impact}
          </span>.
          AI recommends prioritizing congestion mitigation in the highest-risk
          corridors to reduce both travel delays and traffic-related emissions.
        </p>

      </div>

    </div>
  );
}