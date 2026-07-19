import WeatherGrid from "../../components/weather/WeatherGrid";
import WeatherChart from "../../components/weather/WeatherChart";
import WeatherAnalysis from "../../components/weather/WeatherAnalysis";

export default function HealthPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          🌦 Weather Intelligence
        </h1>

        <p className="text-slate-400 mt-2">
          Live meteorological conditions affecting Delhi's air quality
        </p>
      </div>

      <WeatherGrid />

      <WeatherChart />

      <WeatherAnalysis />

    </div>
  );
}