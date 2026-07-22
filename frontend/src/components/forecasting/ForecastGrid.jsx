import ForecastCard from "./ForecastCard";

export default function ForecastGrid({ forecast = [] }) {

  if (!forecast.length) {
    return (
      <div className="text-center text-gray-400 py-10">
        No forecast data available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {forecast.slice(0, 4).map((station) => (
        <ForecastCard
          key={station.station}
          station={station}
        />
      ))}

    </div>
  );
}