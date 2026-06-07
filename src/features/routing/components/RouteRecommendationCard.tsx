import { RiskBadge } from "../../../components/ui/RiskBadge";
import type { RankedRoute } from "../../../types/route.types";

export function RouteRecommendationCard({ route }: { route?: RankedRoute }) {
  if (!route) return null;
  return (
    <article className="rounded-xl border border-signal-cyan/30 bg-signal-cyan/10 p-5">
      <div className="flex items-center justify-between gap-4">
        <div><p className="text-sm font-bold text-signal-cyan">Recommended safest route</p><h2 className="mt-1 text-2xl font-black text-white">{route.name}</h2></div>
        <RiskBadge level={route.riskLevel} />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3"><span>{route.estimatedMinutes} min ETA</span><span>{route.distanceKm} km</span><span>Score {route.score}</span></div>
      <p className="mt-4 text-sm leading-6 text-slate-300">{route.reason}</p>
    </article>
  );
}
