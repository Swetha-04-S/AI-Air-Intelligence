import WorkflowCard from "./WorkflowCard";

const workflow = [
  {
    icon: "📡",
    title: "Collect",
    description:
      "Live AQI, Weather, Traffic and Monitoring Station data are continuously collected.",
  },
  {
    icon: "🧹",
    title: "Process",
    description:
      "Data cleaning, normalization and feature engineering prepare the information.",
  },
  {
    icon: "🧠",
    title: "AI Analysis",
    description:
      "Machine learning models estimate pollution sources and future AQI trends.",
  },
  {
    icon: "📊",
    title: "Decision Support",
    description:
      "Authorities receive recommendations and environmental intelligence.",
  },
];

export default function WorkflowGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {workflow.map((item) => (
        <WorkflowCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}