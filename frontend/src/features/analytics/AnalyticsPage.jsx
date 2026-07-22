import AnalyticsChart from "../../components/analytics/AnalyticsChart";

import AnalyticsSummary from "../../components/analytics/AnalyticsSummary";

export default function AnalyticsPage() {
  return (
    <div className="p-10 space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          📊 Analytics Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          AI-powered analysis of Delhi's air quality trends and pollutant behavior.
        </p>
      </div>

      <AnalyticsChart />


      <AnalyticsSummary />

    </div>
  );
}