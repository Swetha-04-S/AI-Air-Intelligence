import SourceGrid from "../../components/source-attribution/SourceGrid";
import DelhiHeatMap from "../../components/source-attribution/DelhiHeatMap";
import HeatMapInsights from "../../components/source-attribution/HeatMapInsights";
import SourceAnalysis from "../../components/source-attribution/SourceAnalysis";

export default function SourceAttributionPage() {
  return (
    <div className="p-10 space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          🧪 Source Attribution
        </h1>

        <p className="mt-2 text-slate-400">
          AI-powered estimation of pollution sources contributing to Delhi's air quality.
        </p>
      </div>

      <SourceGrid />

      <DelhiHeatMap />

      <HeatMapInsights />

      <SourceAnalysis />

    </div>
  );
}