const tech = [
    "React",
    "FastAPI",
    "Python",
    "Leaflet",
    "PostgreSQL",
    "GeoPandas",
    "Scikit-learn",
    "XGBoost",
  ];
  
  export default function TechStack() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          ⚙ Technology Stack
        </h2>
  
        <div className="flex flex-wrap gap-4">
  
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-full bg-cyan-500/20 px-5 py-3 text-cyan-400"
            >
              {item}
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }