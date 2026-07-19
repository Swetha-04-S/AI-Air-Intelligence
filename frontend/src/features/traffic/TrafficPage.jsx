import TrafficGrid from "../../components/traffic/TrafficGrid";
import TrafficMap from "../../components/traffic/TrafficMap";
import TrafficAnalysis from "../../components/traffic/TrafficAnalysis";

export default function TrafficPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          🚦 Traffic Intelligence
        </h1>

        <p className="text-slate-400 mt-2">
          Live traffic conditions affecting Delhi's air quality.
        </p>
      </div>

      <TrafficGrid />

      <TrafficMap />

      <TrafficAnalysis />

    </div>
  );
}