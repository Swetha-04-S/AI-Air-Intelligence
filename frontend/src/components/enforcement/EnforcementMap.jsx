export default function EnforcementMap() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          🗺 Enforcement Priority Map
        </h2>
  
        <div className="flex h-[420px] items-center justify-center rounded-xl border border-dashed border-slate-700">
  
          <div className="text-center">
  
            <h3 className="text-5xl mb-4">
              📍
            </h3>
  
            <p className="text-2xl text-white">
              High Priority Enforcement Zones
            </p>
  
            <p className="mt-2 text-slate-400">
              (Interactive GIS layer coming later)
            </p>
  
          </div>
  
        </div>
  
      </div>
    );
  }