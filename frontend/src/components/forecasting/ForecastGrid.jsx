import ForecastCard from "./ForecastCard";

export default function ForecastGrid() {
  const forecasts = [
    {
      period: "Today",
      aqi: 164,
      category: "Moderate",
      trend: "🟢",
      color: "border-green-500",
    },
    {
      period: "Tomorrow",
      aqi: 181,
      category: "Poor",
      trend: "🟡",
      color: "border-yellow-500",
    },
    {
      period: "48 Hours",
      aqi: 198,
      category: "Poor",
      trend: "🟠",
      color: "border-orange-500",
    },
    {
      period: "72 Hours",
      aqi: 214,
      category: "Very Poor",
      trend: "🔴",
      color: "border-red-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {forecasts.map((forecast) => (
        <ForecastCard
          key={forecast.period}
          {...forecast}
        />
      ))}
    </div>
  );
}