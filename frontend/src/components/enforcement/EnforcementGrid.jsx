import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

import EnforcementCard from "./EnforcementCard";

export default function EnforcementGrid() {
  const { dashboard, loading, error } = useDashboard();

  const zones = useMemo(() => {
    if (!dashboard) return [];

    // Sort stations by AQI
    const stations = [...dashboard.stations].sort(
      (a, b) => b.aqi - a.aqi
    );

    // Top 4 highest AQI stations
    return stations.slice(0, 4).map((station) => {
      let risk = "";
      let status = "";
      let icon = "";
      let borderColor = "";

      if (station.aqi >= 400) {
        risk = "Critical";
        status = "Immediate Action";
        icon = "🔴";
        borderColor = "border-red-500";
      } else if (station.aqi >= 300) {
        risk = "Very High";
        status = "Priority";
        icon = "🟠";
        borderColor = "border-orange-500";
      } else if (station.aqi >= 200) {
        risk = "High";
        status = "Monitor Closely";
        icon = "🟡";
        borderColor = "border-yellow-500";
      } else {
        risk = "Moderate";
        status = "Stable";
        icon = "🟢";
        borderColor = "border-green-500";
      }

      return {
        zone: station.station.split(",")[0],
        aqi: station.aqi,
        risk,
        status,
        icon,
        borderColor,
      };
    });
  }, [dashboard]);

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Enforcement Intelligence...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-xl">
        {error}
      </div>
    );
  }

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