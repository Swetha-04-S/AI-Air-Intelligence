import { useMemo } from "react";
import useDashboard from "../../hooks/useDashboard";

export default function HeatMapInsights() {
  const { dashboard, loading, error } = useDashboard();

  const insights = useMemo(() => {
    if (!dashboard) return null;

    const stations = [...dashboard.stations];

    const topStations = [...stations]
      .sort((a, b) => b.aqi - a.aqi)
      .slice(0, 5);

    const averageAQI = Math.round(
      stations.reduce((sum, station) => sum + station.aqi, 0) /
        stations.length
    );

    const highest = topStations[0];

    const sourceCount = {};

    stations.forEach((station) => {
      if (!station.source_attribution) return;

      const dominant = station.source_attribution.reduce((a, b) =>
        a.percentage > b.percentage ? a : b
      );

      sourceCount[dominant.source] =
        (sourceCount[dominant.source] || 0) + 1;
    });

    const dominantSource =
      Object.entries(sourceCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
      "Unknown";

    return {
      topStations,
      averageAQI,
      highest,
      dominantSource,
      totalStations: stations.length,
    };
  }, [dashboard]);

  if (loading)
    return (
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-white">
        Loading Heatmap Intelligence...
      </div>
    );

  if (error)
    return (
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-red-500">
        {error}
      </div>
    );

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">

      <h2 className="text-3xl font-bold text-white mb-8">
        📊 Heatmap Intelligence
      </h2>

      {/* Legend + Summary */}

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="rounded-xl bg-slate-800 p-6">

          <h3 className="text-2xl font-semibold text-white mb-5">
            🌈 AQI Heatmap Legend
          </h3>

          <div className="space-y-3">

            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded bg-green-500"></div>
              Good (0 - 50)
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded bg-yellow-400"></div>
              Moderate (51 - 100)
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded bg-orange-400"></div>
              Poor (101 - 200)
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded bg-red-500"></div>
              Very Poor (201 - 300)
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded bg-purple-600"></div>
              Severe (301 - 400)
            </div>

            <div className="flex items-center gap-4 text-white">
              <div className="w-6 h-6 rounded bg-black border border-white"></div>
              Hazardous (401+)
            </div>

          </div>

        </div>

        <div className="rounded-xl bg-slate-800 p-6">

          <h3 className="text-2xl font-semibold text-white mb-5">
            📈 Live Summary
          </h3>

          <div className="space-y-4 text-lg">

            <div className="flex justify-between text-white">
              <span>Total Monitoring Stations</span>
              <span>{insights.totalStations}</span>
            </div>

            <div className="flex justify-between text-white">
              <span>Average AQI</span>
              <span>{insights.averageAQI}</span>
            </div>

            <div className="flex justify-between text-white">
              <span>Highest AQI</span>
              <span>{insights.highest.aqi}</span>
            </div>

            <div className="flex justify-between text-white">
              <span>Dominant Pollution Source</span>
              <span>{insights.dominantSource}</span>
            </div>

          </div>

        </div>

      </div>

      {/* Top Hotspots */}

      <div className="mt-10">

        <h3 className="text-2xl font-semibold text-white mb-5">
          📍 Top 5 Pollution Hotspots
        </h3>

        <div className="space-y-4">

          {insights.topStations.map((station, index) => (

            <div
              key={station.station}
              className="rounded-xl bg-slate-800 p-5 flex justify-between items-center"
            >

              <div>

                <h4 className="text-xl text-white font-semibold">
                  #{index + 1} {station.station}
                </h4>

                <p className="text-slate-400 mt-1">
                  Dominant Source :{" "}
                  {station.source_attribution?.[0]?.source}
                </p>

              </div>

              <div className="text-right">

                <h3 className="text-3xl font-bold text-red-400">
                  {station.aqi}
                </h3>

                <p className="text-slate-400">
                  AQI
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* AI Interpretation */}

      <div className="mt-12">

        <h3 className="text-3xl font-bold text-white mb-6">
          🤖 AI Interpretation
        </h3>

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="rounded-xl bg-slate-800 p-6">

            <h4 className="text-xl font-bold text-red-400 mb-3">
              🔥 Critical Pollution Zone
            </h4>

            <p className="text-slate-300 leading-7">
              <span className="font-semibold text-white">
                {insights.highest.station}
              </span>{" "}
              currently records the highest AQI of{" "}
              <span className="text-red-400 font-semibold">
                {insights.highest.aqi}
              </span>.
              This location appears as the strongest hotspot on the heatmap,
              indicating consistently elevated pollution levels that require
              immediate monitoring and targeted mitigation strategies.
            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-6">

            <h4 className="text-xl font-bold text-orange-400 mb-3">
              🚗 Dominant Pollution Source
            </h4>

            <p className="text-slate-300 leading-7">
              AI analysis indicates that{" "}
              <span className="text-white font-semibold">
                {insights.dominantSource}
              </span>{" "}
              is the dominant contributor across Delhi's monitoring stations.
              This suggests emissions are influenced by widespread urban
              activities rather than isolated pollution events.
            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-6">

            <h4 className="text-xl font-bold text-cyan-400 mb-3">
              🌍 City-wide Air Quality
            </h4>

            <p className="text-slate-300 leading-7">
              The average AQI across all monitoring stations is{" "}
              <span className="text-white font-semibold">
                {insights.averageAQI}
              </span>.
              Multiple high-intensity regions visible on the heatmap indicate
              that pollution is distributed across several areas of Delhi,
              rather than being confined to a single hotspot.
            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-6">

            <h4 className="text-xl font-bold text-green-400 mb-3">
              🎯 AI Recommendation
            </h4>

            <p className="text-slate-300 leading-7">
              Based on the observed pollution distribution, AI recommends
              prioritizing emission control measures around the highest AQI
              stations, improving traffic flow in congested corridors,
              strengthening industrial emission inspections, and maintaining
              continuous monitoring to reduce city-wide pollution exposure.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}