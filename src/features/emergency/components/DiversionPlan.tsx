import type { generateEmergencyCorridor } from "../logic/emergencyCorridor";

type Plan = ReturnType<typeof generateEmergencyCorridor>;

export function DiversionPlan({ plan }: { plan: Plan }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div><h3 className="mb-3 font-black text-white">Roads to clear</h3>{plan.roadsToClear.map((item) => <p key={item} className="mb-2 rounded-lg bg-white/5 p-3 text-sm">{item}</p>)}</div>
      <div><h3 className="mb-3 font-black text-white">Roads to block</h3>{plan.roadsToBlock.map((item) => <p key={item} className="mb-2 rounded-lg bg-signal-red/10 p-3 text-sm">{item}</p>)}</div>
      <div><h3 className="mb-3 font-black text-white">Crowd diversion</h3>{plan.diversionSuggestions.map((item) => <p key={item} className="mb-2 rounded-lg bg-white/5 p-3 text-sm">{item}</p>)}</div>
      <div><h3 className="mb-3 font-black text-white">Police deployment</h3>{plan.policeDeploymentPoints.map((item) => <p key={item} className="mb-2 rounded-lg bg-white/5 p-3 text-sm">{item}</p>)}</div>
      <div><h3 className="mb-3 font-black text-white">Ambulance staging</h3><p className="rounded-lg bg-signal-green/10 p-3 text-sm">{plan.ambulanceStagingPoint}</p></div>
      <div><h3 className="mb-3 font-black text-white">Risk zones to avoid</h3>{plan.avoidZones.length ? plan.avoidZones.map((item) => <p key={item} className="mb-2 rounded-lg bg-white/5 p-3 text-sm">{item}</p>) : <p className="text-sm text-slate-400">No critical zone on selected corridor.</p>}</div>
    </div>
  );
}
