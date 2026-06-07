export function RecommendationRankCard({ rank, title, impact, confidence }: { rank: number; title: string; impact: string; confidence: number }) {
  return (
    <article className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:border-signal-cyan/40 hover:bg-signal-cyan/10">
      <div className="flex items-start gap-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-signal-cyan font-black text-command-950">{rank}</span>
        <div>
          <h3 className="font-black text-white">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">Impact: {impact}</p>
          <p className="mt-2 text-xs font-black text-signal-green">Confidence: {confidence}%</p>
        </div>
      </div>
    </article>
  );
}
