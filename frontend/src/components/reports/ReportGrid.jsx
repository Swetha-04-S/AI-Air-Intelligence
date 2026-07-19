import ReportCard from "./ReportCard";

const reports = [
  {
    icon: "📅",
    title: "Daily Report",
    description: "Summary of today's air quality and pollution trends.",
    color: "border-cyan-500",
  },
  {
    icon: "📆",
    title: "Weekly Report",
    description: "Weekly AQI trends and pollution analysis.",
    color: "border-green-500",
  },
  {
    icon: "📊",
    title: "Monthly Report",
    description: "Monthly environmental intelligence report.",
    color: "border-yellow-500",
  },
  {
    icon: "⚠",
    title: "Incident Report",
    description: "Generate reports for pollution spikes and alerts.",
    color: "border-red-500",
  },
];

export default function ReportGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {reports.map((report) => (
        <ReportCard
          key={report.title}
          {...report}
        />
      ))}
    </div>
  );
}