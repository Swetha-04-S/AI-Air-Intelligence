export default function WeatherChart() {
    return (
      <div
        className="
          bg-slate-900
          border border-slate-800
          rounded-2xl
          p-8
          mt-8
        "
      >
        <h2 className="text-2xl font-bold mb-3">
          📈 7-Day Weather Trend
        </h2>
  
        <div
          className="
            h-72
            flex
            items-center
            justify-center
            text-slate-500
            text-lg
          "
        >
          Weather Trend Chart
          <br />
          (Coming in next step)
        </div>
      </div>
    );
  }