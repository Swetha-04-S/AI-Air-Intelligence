import ForecastGrid from "../../components/forecasting/ForecastGrid";
import ForecastChart from "../../components/forecasting/ForecastChart";
import ForecastTimeline from "../../components/forecasting/ForecastTimeline";
import ForecastAnalysis from "../../components/forecasting/ForecastAnalysis";

export default function ForecastingPage() {
  return (
    <div className="p-10">
      <ForecastGrid />
      <ForecastChart />
      <ForecastTimeline />
      <ForecastAnalysis />
    </div>
  );
}