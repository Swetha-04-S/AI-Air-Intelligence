export default function ReportCard({
    icon,
    title,
    description,
    color,
  }) {
    return (
      <div
        className={`rounded-2xl border ${color} bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
      >
        <div className="text-5xl mb-6">
          {icon}
        </div>
  
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>
  
        <p className="mt-4 text-slate-400">
          {description}
        </p>
  
        <button className="mt-8 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white hover:bg-cyan-600 transition">
          Generate Report
        </button>
      </div>
    );
  }