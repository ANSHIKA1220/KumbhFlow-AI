export function ImpactMetric({ label, before, after, improvement }: { label: string; before: string; after: string; improvement?: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-signal-cyan/40 hover:bg-white/10">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-2 flex items-end gap-2 text-lg font-black text-white">
        <span className="text-slate-500 line-through">{before}</span>
        <span className="text-signal-cyan">{after}</span>
      </div>
      {improvement ? <p className="mt-1 text-xs font-bold text-signal-green">{improvement}</p> : null}
    </div>
  );
}
