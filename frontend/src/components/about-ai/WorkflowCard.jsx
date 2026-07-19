export default function WorkflowCard({
    icon,
    title,
    description,
  }) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500">
  
        <div className="text-5xl mb-6">
          {icon}
        </div>
  
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>
  
        <p className="mt-4 text-slate-400 leading-7">
          {description}
        </p>
  
      </div>
    );
  }