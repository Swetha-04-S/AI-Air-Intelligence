import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

export default function SourceAnalysis() {
  const { dashboard, loading, error } = useDashboard();

  const recommendations = useMemo(() => {
    if (!dashboard) return [];

    const stations = [...dashboard.stations];

    const highest = [...stations].sort((a, b) => b.aqi - a.aqi)[0];

    const dominantSource =
      highest?.source_attribution?.[0]?.source || "Mixed Urban Pollution";

    const actions = [];

    // Traffic
    if (
      dominantSource.includes("Traffic") ||
      dominantSource.includes("Urban")
    ) {
      actions.push({
        icon: "🚦",
        title: "Traffic Management",
        priority: "HIGH",
        color: "bg-red-500",
        description:
          `Deploy traffic diversion around ${highest.station}. Increase signal optimization and restrict heavy vehicles during peak hours.`,
      });
    }

    // Construction
    actions.push({
      icon: "🏗️",
      title: "Construction Dust Control",
      priority: "HIGH",
      color: "bg-orange-500",
      description:
        "Increase water sprinkling, cover construction materials, and inspect active construction sites near pollution hotspots.",
    });

    // Industry
    actions.push({
      icon: "🏭",
      title: "Industrial Inspection",
      priority: "MEDIUM",
      color: "bg-yellow-500",
      description:
        "Conduct emission audits on nearby industrial facilities and ensure compliance with CPCB emission standards.",
    });

    // Public
    actions.push({
      icon: "🌳",
      title: "Public Health Advisory",
      priority: "HIGH",
      color: "bg-green-500",
      description:
        "Issue AQI alerts, encourage mask usage, reduce outdoor activities, and advise vulnerable populations to stay indoors.",
    });

    return {
      highest,
      dominantSource,
      actions,
    };
  }, [dashboard]);

  if (loading)
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-white">
        Loading AI Recommendations...
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

      <h2 className="text-3xl font-bold text-white mb-3">
        🚨 AI Recommended Actions
      </h2>

      <p className="text-slate-400 mb-8">
        Based on live AQI, source attribution, weather conditions and hotspot
        analysis, the AI recommends the following priority interventions.
      </p>

      <div className="grid lg:grid-cols-2 gap-6">

        {recommendations.actions.map((action) => (

          <div
            key={action.title}
            className="rounded-xl bg-slate-800 p-6 border border-slate-700 hover:border-cyan-500 transition-all"
          >

            <div className="flex justify-between items-center mb-4">

              <h3 className="text-xl font-bold text-white">
                {action.icon} {action.title}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-xs font-bold text-white ${action.color}`}
              >
                {action.priority}
              </span>

            </div>

            <p className="text-slate-300 leading-7">
              {action.description}
            </p>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-xl bg-cyan-950 border border-cyan-700 p-6">

        <h3 className="text-2xl font-bold text-cyan-300 mb-4">
          🎯 AI Executive Summary
        </h3>

        <p className="text-slate-200 leading-8">

          The AI has identified

          <span className="font-bold text-white">
            {" "}{recommendations.highest.station}
          </span>

          {" "}as the most critical pollution hotspot with an AQI of

          <span className="font-bold text-red-400">
            {" "}{recommendations.highest.aqi}
          </span>.

          The dominant emission pattern corresponds to

          <span className="font-bold text-yellow-300">
            {" "}{recommendations.dominantSource}
          </span>.

          Immediate enforcement, traffic optimization, industrial inspection,
          and continuous monitoring are expected to provide the greatest
          reduction in pollution levels across Delhi.

        </p>

      </div>

    </div>
  );
}