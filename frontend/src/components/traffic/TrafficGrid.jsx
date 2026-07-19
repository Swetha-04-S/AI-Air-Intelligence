import TrafficCard from "./TrafficCard";

export default function TrafficGrid() {

  const cards = [
    {
      icon: "🚗",
      title: "Average Speed",
      value: "26 km/h",
      status: "Heavy Traffic",
    },
    {
      icon: "🚦",
      title: "Congestion",
      value: "82%",
      status: "Very High",
    },
    {
      icon: "🛣",
      title: "Active Roads",
      value: "187",
      status: "Monitoring",
    },
    {
      icon: "🚘",
      title: "Vehicle Density",
      value: "High",
      status: "Peak Hour",
    },
    {
      icon: "⏱",
      title: "Travel Time",
      value: "48 min",
      status: "Delayed",
    },
    {
      icon: "🚧",
      title: "Incidents",
      value: "12",
      status: "Reported",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <TrafficCard
          key={card.title}
          {...card}
        />
      ))}
    </div>
  );
}