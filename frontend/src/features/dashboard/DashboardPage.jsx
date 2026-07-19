import useDashboard from "../../hooks/useDashboard";
import SummaryGrid from "../../components/dashboard/SummaryGrid";
import StationGrid from "../../components/dashboard/StationGrid";
import DelhiMap from "../../components/dashboard/DelhiMap";
import DashboardHero from "../../components/dashboard/DashboardHero";


export default function DashboardPage() {
  const { dashboard, loading, error } = useDashboard();

  if (loading) {
    return <h2>Loading dashboard...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <DashboardHero
      city={dashboard.city}
      lastUpdated={dashboard.last_updated}
      totalStations={dashboard.total_stations}
      />

      <h2 className="text-2xl font-bold mt-8 mb-6">
        Pollutant Summary
      </h2>
      <SummaryGrid summary={dashboard.summary} />
      <DelhiMap stations={dashboard.stations} />
      <hr />
      <h2 className="text-3xl font-bold mt-10 mb-6">
        Monitoring Stations
      </h2>
      <StationGrid stations={dashboard.stations} />
      </div>
  );
}