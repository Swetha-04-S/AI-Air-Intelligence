import useForecast from "../../hooks/useForecast";

import ForecastGrid from "../../components/forecasting/ForecastGrid";
import ForecastChart from "../../components/forecasting/ForecastChart";
import ForecastTimeline from "../../components/forecasting/ForecastTimeline";
import ForecastAnalysis from "../../components/forecasting/ForecastAnalysis";

export default function ForecastingPage() {

  const {
    forecast,
    loading,
    error,
  } = useForecast();

  if (loading) {
    return (
      <div className="p-10">
        <h2 className="text-2xl font-bold">
          Loading AI Forecast...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10">
        <h2 className="text-2xl text-red-500">
          {error}
        </h2>
      </div>
    );
  }

  return (

    <div className="p-10 space-y-10">

      <ForecastGrid
        forecast={forecast}
      />

      <ForecastChart
        forecast={forecast}
      />

      <ForecastTimeline
        forecast={forecast}
      />

      <ForecastAnalysis
        forecast={forecast}
      />

    </div>

  );

}