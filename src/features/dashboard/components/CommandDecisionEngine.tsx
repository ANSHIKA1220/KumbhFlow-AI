import { BrainCircuit } from "lucide-react";
import { AIConfidenceBadge } from "../../../components/ai/AIConfidenceBadge";

export function CommandDecisionEngine({ riskLevel, confidence, crisisMode }: { riskLevel: string; confidence: number; crisisMode: boolean }) {
  const recommendations = crisisMode
    ? ["Generate medical green corridor to Sangam", "Block Parade Ground merge for 12 minutes", "Push all parking inflow to Jhusi Reserve"]
    : ["Deploy 3 shuttle buses to Jhusi", "Redirect parking inflow to Sector 7", "Open diversion corridor at Parade Ground"];
  const results = crisisMode
    ? ["-18% crowd density", "-11 min response time", "+24% emergency access"]
    : ["-11% crowd density", "-8 min wait time", "+18% mobility efficiency"];
  return (
    <section className={`rounded-2xl border p-6 shadow-glow ${crisisMode ? "border-signal-red/50 bg-gradient-to-br from-red-950 via-command-900 to-command-900" : "border-signal-cyan/30 bg-gradient-to-br from-signal-cyan/15 via-command-900 to-command-900"}`}>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-black text-signal-cyan"><BrainCircuit size={14} /> AI COMMAND DECISION ENGINE</span>
            <AIConfidenceBadge score={confidence} />
          </div>
          <h2 className="text-3xl font-black text-white">Current Risk Level: <span className={crisisMode ? "text-signal-red" : "text-signal-amber"}>{riskLevel}</span></h2>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">AI Recommendation</p>
            <ol className="space-y-2 text-sm text-slate-200">
              {recommendations.map((item, index) => <li key={item}><span className="mr-2 text-signal-cyan">{index + 1}.</span>{item}</li>)}
            </ol>
          </div>
        </div>
        <div className="grid min-w-[260px] gap-3">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Expected Result</p>
          {results.map((item) => <div key={item} className="rounded-xl bg-white/10 p-3 text-lg font-black text-white">{item}</div>)}
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-300">Reasoning: the model is comparing projected crowd density, parking overflow, shuttle wait time, and emergency access. It chooses actions that reduce network risk before congestion happens.</p>
    </section>
  );
}
