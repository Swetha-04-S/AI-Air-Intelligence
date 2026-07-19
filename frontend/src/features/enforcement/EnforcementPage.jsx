import EnforcementGrid from "../../components/enforcement/EnforcementGrid";
import EnforcementMap from "../../components/enforcement/EnforcementMap";
import EnforcementActions from "../../components/enforcement/EnforcementActions";
import EnforcementAnalysis from "../../components/enforcement/EnforcementAnalysis";

export default function EnforcementPage() {
  return (
    <div className="p-10 space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          🚨 Enforcement Intelligence
        </h1>

        <p className="mt-2 text-slate-400">
          AI-generated recommendations for pollution control and city-wide interventions.
        </p>
      </div>

      <EnforcementGrid />

      <EnforcementMap />

      <EnforcementActions />

      <EnforcementAnalysis />

    </div>
  );
}