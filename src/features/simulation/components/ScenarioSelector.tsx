import { mockScenarios } from "../../../data/mockScenarios";
import type { ScenarioType } from "../../../types/mobility.types";

export function ScenarioSelector({ value, onChange }: { value: ScenarioType; onChange: (value: ScenarioType) => void }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
      {mockScenarios.map((scenario) => (
        <button key={scenario.id} onClick={() => onChange(scenario.id)} className={`rounded-xl border p-4 text-left ${value === scenario.id ? "border-signal-cyan bg-signal-cyan/15" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
          <strong className="block text-white">{scenario.name}</strong>
          <span className="mt-2 block text-xs leading-5 text-slate-400">{scenario.description}</span>
        </button>
      ))}
    </div>
  );
}
