const history = [
    "Delhi AQI Daily Report - 19 Jul 2026",
    "Weekly Pollution Summary",
    "Construction Emission Report",
    "Traffic Impact Assessment",
  ];
  
  export default function RecentReports() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          📂 Recent Reports
        </h2>
  
        <div className="space-y-4">
  
          {history.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-slate-800 p-5 text-slate-300"
            >
              {item}
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }