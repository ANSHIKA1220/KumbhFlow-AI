import type { RankedRoute } from "../../../types/route.types";

export function RouteVisualComparison({ routes }: { routes: RankedRoute[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {routes.slice(0, 3).map((route, index) => {
        const safety = Math.max(1, 100 - Math.round(route.score / 3));
        return (
          <article key={route.id} className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${index === 0 ? "border-signal-cyan bg-signal-cyan/15 shadow-glow" : "border-white/10 bg-white/5"}`}>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-black text-slate-400">Route {String.fromCharCode(65 + index)}</span>
              {index === 0 ? <span className="rounded-full bg-signal-cyan px-3 py-1 text-xs font-black text-command-950">AI Pick</span> : <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-300">AI Confidence {index === 1 ? 78 : 68}%</span>}
            </div>
            <h3 className="min-h-12 text-lg font-black text-white">{route.name}</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-black/20 p-3"><p className="text-xs text-slate-500">Safety</p><strong className="text-2xl text-signal-green">{safety}</strong></div>
              <div className="rounded-xl bg-black/20 p-3"><p className="text-xs text-slate-500">ETA</p><strong className="text-2xl text-white">{route.estimatedMinutes} min</strong></div>
            </div>
            <p className="mt-3 text-sm text-slate-400">{route.reason}</p>
            {index > 0 ? <p className="mt-3 rounded-lg bg-black/20 p-3 text-xs font-bold text-signal-amber">Why not Route {String.fromCharCode(65 + index)}? {index === 1 ? "+22% crowd density near interchange." : "Bridge congestion forecast reduces safety score."}</p> : <p className="mt-3 text-xs font-black text-signal-green">AI Confidence 91%</p>}
          </article>
        );
      })}
    </div>
  );
}
