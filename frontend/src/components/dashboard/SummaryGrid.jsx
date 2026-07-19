import PollutantCard from "./PollutantCard";

export default function SummaryGrid({ summary }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
      {Object.entries(summary).map(([pollutant, value]) => (
        <PollutantCard
          key={pollutant}
          pollutant={pollutant}
          value={value}
        />
      ))}
    </div>
  );
}