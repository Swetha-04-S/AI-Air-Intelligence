import StationCard from "./StationCard";

export default function StationGrid({ stations }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {stations.map((station) => (
        <StationCard
          key={station.station}
          station={station}
        />
      ))}
    </div>
  );
}