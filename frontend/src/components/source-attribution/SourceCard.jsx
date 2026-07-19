export default function SourceCard({
    icon,
    title,
    percentage,
    status,
    borderColor,
  }) {
    return (
      <div
        className={`rounded-2xl border ${borderColor} bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-5xl">{icon}</span>
  
          <div className="h-8 w-8 rounded-full bg-white/10"></div>
        </div>
  
        <h3 className="text-3xl font-bold text-white">
          {percentage}%
        </h3>
  
        <p className="mt-2 text-lg text-slate-300">
          {title}
        </p>
  
        <div className="mt-6 inline-flex rounded-full bg-slate-800 px-4 py-2 text-cyan-400 font-medium">
          {status}
        </div>
      </div>
    );
  }