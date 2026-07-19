export default function DownloadPanel() {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
        <h2 className="text-3xl font-bold text-white mb-8">
          ⬇ Export Reports
        </h2>
  
        <div className="flex flex-wrap gap-4">
  
          <button className="rounded-xl bg-cyan-500 px-6 py-3 text-white font-semibold hover:bg-cyan-600 transition">
            Download PDF
          </button>
  
          <button className="rounded-xl bg-green-500 px-6 py-3 text-white font-semibold hover:bg-green-600 transition">
            Export CSV
          </button>
  
          <button className="rounded-xl bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition">
            Email Report
          </button>
  
        </div>
  
      </div>
    );
  }