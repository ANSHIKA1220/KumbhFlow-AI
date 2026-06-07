import { RiskBadge } from "../../../components/ui/RiskBadge";
import type { RankedRoute } from "../../../types/route.types";

export function RouteComparisonTable({ routes }: { routes: RankedRoute[] }) {
  return (
    <div className="overflow-auto rounded-xl border border-white/10">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase text-slate-400"><tr><th className="p-3">Route</th><th className="p-3">ETA</th><th className="p-3">Distance</th><th className="p-3">Safety Score</th><th className="p-3">Crowd Risk</th><th className="p-3">Accessibility</th><th className="p-3">AI Reason</th></tr></thead>
        <tbody>{routes.map((route, index) => <tr key={route.id} className={`border-t border-white/10 ${index === 0 ? "bg-signal-cyan/10" : ""}`}><td className="p-3 font-bold text-white">{route.name}</td><td className="p-3">{route.estimatedMinutes} min</td><td className="p-3">{route.distanceKm} km</td><td className="p-3">{Math.max(1, 100 - Math.round(route.score / 3))}/100</td><td className="p-3"><RiskBadge level={route.riskLevel} /></td><td className="p-3">{route.accessibilityScore}/100</td><td className="p-3 text-slate-400">{route.reason}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
