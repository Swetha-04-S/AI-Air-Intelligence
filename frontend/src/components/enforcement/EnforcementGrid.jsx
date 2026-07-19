import EnforcementCard from "./EnforcementCard";

const zones = [
  {
    zone: "Anand Vihar",
    risk: "Very High",
    status: "Immediate Action",
    icon: "🔴",
    borderColor: "border-red-500",
  },
  {
    zone: "ITO",
    risk: "High",
    status: "Priority",
    icon: "🟠",
    borderColor: "border-orange-500",
  },
  {
    zone: "R K Puram",
    risk: "Moderate",
    status: "Monitor",
    icon: "🟡",
    borderColor: "border-yellow-500",
  },
  {
    zone: "Siri Fort",
    risk: "Low",
    status: "Stable",
    icon: "🟢",
    borderColor: "border-green-500",
  },
];

export default function EnforcementGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {zones.map((zone) => (
        <EnforcementCard
          key={zone.zone}
          {...zone}
        />
      ))}
    </div>
  );
}