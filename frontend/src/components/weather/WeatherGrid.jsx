import WeatherCard from "./WeatherCard";

export default function WeatherGrid() {

  const weather = [
    {
      icon: "🌡️",
      title: "Temperature",
      value: "36°C",
      status: "Warm",
    },
    {
      icon: "💧",
      title: "Humidity",
      value: "72%",
      status: "Moderate",
    },
    {
      icon: "💨",
      title: "Wind Speed",
      value: "12 km/h",
      status: "Low",
    },
    {
      icon: "🧭",
      title: "Wind Direction",
      value: "NW",
      status: "Stable",
    },
    {
      icon: "🌤",
      title: "Pressure",
      value: "1012 hPa",
      status: "Normal",
    },
    {
      icon: "🌧",
      title: "Rainfall",
      value: "0 mm",
      status: "None",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {weather.map((item) => (
        <WeatherCard
          key={item.title}
          {...item}
        />
      ))}

    </div>
  );
}