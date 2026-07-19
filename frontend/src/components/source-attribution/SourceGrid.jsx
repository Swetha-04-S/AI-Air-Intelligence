import SourceCard from "./SourceCard";

const sources = [
  {
    title: "Traffic",
    percentage: 42,
    status: "Dominant",
    icon: "🚗",
    borderColor: "border-red-500",
  },
  {
    title: "Construction",
    percentage: 27,
    status: "High",
    icon: "🏗",
    borderColor: "border-orange-500",
  },
  {
    title: "Industry",
    percentage: 18,
    status: "Moderate",
    icon: "🏭",
    borderColor: "border-yellow-500",
  },
  {
    title: "Biomass Burning",
    percentage: 9,
    status: "Low",
    icon: "🔥",
    borderColor: "border-green-500",
  },
  {
    title: "Weather",
    percentage: 4,
    status: "Minor",
    icon: "🌬",
    borderColor: "border-cyan-500",
  },
];

export default function SourceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {sources.map((source) => (
        <SourceCard
          key={source.title}
          {...source}
        />
      ))}
    </div>
  );
}