import useDashboard from "../../hooks/useDashboard";

import LiveHeader from "../../components/live-aqi/LiveHeader";
import LiveToolbar from "../../components/live-aqi/LiveToolbar";
import LiveTable from "../../components/live-aqi/LiveTable";

export default function LiveAqiPage() {
  const { dashboard, loading, error } = useDashboard();

  if (loading) {
    return (
      <div className="p-8">
        Loading Live Air Quality...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <LiveHeader
        city={dashboard.city}
        totalStations={dashboard.total_stations}
      />

      <LiveToolbar />

      <LiveTable
        stations={dashboard.stations}
      />

    </div>
  );
}