import { ImpactMetric } from "./ImpactMetric";
import type { WhatIfResult } from "../../services/whatIfService";

export function WhatIfCard({ result }: { result: WhatIfResult }) {
  return (
    <article className="rounded-xl border border-signal-cyan/20 bg-gradient-to-br from-signal-cyan/10 to-white/[0.03] p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-signal-cyan">What-if impact</p>
          <h3 className="mt-1 text-xl font-black text-white">{result.title}</h3>
        </div>
        <span className="rounded-full bg-signal-green/15 px-3 py-1 text-xs font-black text-signal-green">{result.improvementScore}% better</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {result.metrics.map((metric) => <ImpactMetric key={metric.label} {...metric} />)}
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-signal-red/20 bg-signal-red/10 p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-400">Before</p>
          <p className="mt-2 text-2xl font-black text-white">Crowd Density: 84%</p>
          <p className="mt-1 text-sm text-slate-400">Wait Time: 21 min</p>
        </div>
        <div className="grid place-items-center text-3xl font-black text-signal-cyan animate-pulse">--&gt;</div>
        <div className="rounded-xl border border-signal-green/20 bg-signal-green/10 p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-400">After</p>
          <p className="mt-2 text-2xl font-black text-white">Crowd Density: 72%</p>
          <p className="mt-1 text-sm text-signal-green">Difference: down 12% | Wait Time: 12 min</p>
        </div>
      </div>
    </article>
  );
}
