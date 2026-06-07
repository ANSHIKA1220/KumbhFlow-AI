import { BrainCircuit } from "lucide-react";

export function AIReasoningPanel({
  crowdDensity,
  parkingPressure,
  trainArrivals,
  predictedRisk,
  action,
  impact
}: {
  crowdDensity: number;
  parkingPressure: number;
  trainArrivals: string;
  predictedRisk: string;
  action: string;
  impact: string;
}) {
  const rows = [
    ["Crowd density at Sangam", `${crowdDensity}%`],
    ["Parking pressure", `${parkingPressure}%`],
    ["Train arrivals", trainArrivals],
    ["Predicted risk in 30 min", predictedRisk],
    ["Recommended action", action],
    ["Expected impact", impact]
  ];
  return (
    <section className="rounded-2xl border border-signal-cyan/25 bg-black/20 p-5">
      <div className="mb-4 flex items-center gap-2">
        <BrainCircuit size={18} className="text-signal-cyan" />
        <h2 className="text-lg font-black text-white">Explainable AI Reasoning</h2>
      </div>
      <div className="grid gap-2">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 rounded-xl bg-white/5 p-3">
            <span className="text-sm text-slate-400">{label}</span>
            <strong className="text-right text-sm text-white">{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
