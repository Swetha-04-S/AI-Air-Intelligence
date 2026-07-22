import TrafficGrid from "../../components/traffic/TrafficGrid";
import TrafficStats from "../../components/traffic/TrafficStats";
import TrafficHotspots from "../../components/traffic/TrafficHotspots";

import TrafficAnalysis from "../../components/traffic/TrafficAnalysis";

export default function TrafficPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          🚦 Traffic Intelligence
        </h1>

        <p className="mt-2 text-slate-400">
          Real-time traffic monitoring and congestion intelligence across
          Delhi, integrated with air quality analysis.
        </p>
      </div>

      {/* Live Traffic Overview */}
      <TrafficStats />

      {/* Existing Traffic Cards */}
      <TrafficGrid />

      {/* Live Congestion Ranking */}
      <TrafficHotspots />


      {/* AI Insights */}
      <TrafficAnalysis />

    </div>
  );
}