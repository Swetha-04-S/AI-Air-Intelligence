export default function EnforcementActions() {
    const actions = [
      "🚫 Restrict heavy diesel vehicles near Anand Vihar",
      "🏗 Temporarily pause construction in identified hotspots",
      "🚔 Increase emission inspections around industrial corridors",
      "🚿 Deploy anti-smog guns and water sprinklers",
      "🚦 Optimize traffic signal timings to reduce congestion",
    ];
  
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          📋 Recommended Actions
        </h2>
  
        <div className="space-y-5">
  
          {actions.map((action) => (
            <div
              key={action}
              className="rounded-xl bg-slate-800 p-5 text-lg text-slate-300"
            >
              {action}
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }