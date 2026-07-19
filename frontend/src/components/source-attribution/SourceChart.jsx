export default function SourceChart() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          📊 Pollution Source Distribution
        </h2>
  
        <div className="flex h-[380px] items-center justify-center rounded-xl border border-dashed border-slate-700">
  
          <div className="text-center">
  
            <h3 className="text-4xl mb-4">
              🥧
            </h3>
  
            <p className="text-2xl text-white">
              Interactive Pie Chart
            </p>
  
            <p className="mt-2 text-slate-400">
              (Recharts integration in next phase)
            </p>
  
          </div>
  
        </div>
  
      </div>
    );
  }