import { Siren } from "lucide-react";
import type { generateEmergencyCorridor } from "../logic/emergencyCorridor";

type Plan = ReturnType<typeof generateEmergencyCorridor>;

export function EmergencyRouteResult({ plan }: { plan: Plan }) {
  return (
    <article className="rounded-xl border border-signal-red/30 bg-gradient-to-br from-signal-red/15 to-white/[0.03] p-5">
      <div className="flex items-center gap-3"><Siren className="text-signal-red" /><div><p className="text-sm font-bold text-signal-red">Fastest safe corridor</p><h2 className="text-2xl font-black text-white">{plan.corridorName}</h2></div></div>
      <p className="mt-4 text-slate-300">Estimated response time: <strong>{plan.estimatedResponseMin} minutes</strong> | AI confidence: <strong>{plan.aiConfidence}%</strong></p>
      <p className="mt-2 text-sm text-slate-400">Route: {plan.route.join(" -> ")}</p>
    </article>
  );
}
