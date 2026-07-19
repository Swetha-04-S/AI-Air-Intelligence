export default function WeatherCard({
    icon,
    title,
    value,
    status,
  }) {
    return (
      <div
        className="
          bg-slate-900
          border border-slate-800
          rounded-2xl
          p-6
          hover:border-cyan-500
          transition
        "
      >
        <div className="text-4xl mb-4">
          {icon}
        </div>
  
        <h3 className="text-slate-400 text-sm">
          {title}
        </h3>
  
        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
  
        <p className="text-cyan-400 mt-3">
          {status}
        </p>
      </div>
    );
  }