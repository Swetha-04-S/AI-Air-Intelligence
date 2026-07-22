import useForecast from "../../hooks/useForecast";
import ForecastGrid from "./ForecastGrid";

export default function ForecastSection() {

  const {
    forecast,
    loading,
    error,
  } = useForecast();

  if (loading) {
    return (
      <div className="text-center py-8">
        Loading AI Forecast...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 py-8">
        {error}
      </div>
    );
  }

  return (
    <ForecastGrid
      forecast={forecast}
    />
  );

}