export default function PipelineDiagram() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-10">
  
        <h2 className="text-3xl font-bold text-white mb-10">
          🛰 AI Pipeline
        </h2>
  
        <div className="flex flex-wrap items-center justify-center gap-4 text-xl">
  
          <div className="rounded-xl bg-slate-800 px-6 py-4">
            AQI
          </div>
  
          ➜
  
          <div className="rounded-xl bg-slate-800 px-6 py-4">
            Weather
          </div>
  
          ➜
  
          <div className="rounded-xl bg-slate-800 px-6 py-4">
            Traffic
          </div>
  
          ➜
  
          <div className="rounded-xl bg-cyan-600 px-6 py-4">
            AI Engine
          </div>
  
          ➜
  
          <div className="rounded-xl bg-green-600 px-6 py-4">
            Smart Decisions
          </div>
  
        </div>
  
      </div>
    );
  }