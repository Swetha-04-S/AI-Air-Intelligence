export default function SourceMap() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          🗺 Pollution Source Hotspots
        </h2>
  
        <div className="flex h-[420px] items-center justify-center rounded-xl border border-dashed border-slate-700">
  
          <div className="text-center">
  
            <h3 className="text-4xl mb-4">
              📍
            </h3>
  
            <p className="text-2xl text-white">
              GIS Pollution Source Layer
            </p>
  
            <p className="mt-2 text-slate-400">
              (Heatmap & source overlays coming later)
            </p>
  
          </div>
  
        </div>
  
      </div>
    );
  }