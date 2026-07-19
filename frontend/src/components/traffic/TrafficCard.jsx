export default function TrafficCard({
    icon,
    title,
    value,
    status,
  }) {
    return (
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 shadow-lg hover:border-cyan-500 transition-all duration-300">
  
        <div className="text-5xl mb-6">
          {icon}
        </div>
  
        <p className="text-slate-400 text-lg">
          {title}
        </p>
  
        <h2 className="text-5xl font-bold text-white mt-3">
          {value}
        </h2>
  
        <p className="text-cyan-400 mt-4 text-lg font-medium">
          {status}
        </p>
  
      </div>
    );
  }