import { useState } from "react";
import { WhatIfCard } from "../../../components/ai/WhatIfCard";
import { simulateScenarioImpact, type WhatIfType } from "../../../services/whatIfService";

const options: Array<{ label: string; value: WhatIfType }> = [
  { label: "Add train surge", value: "train-surge" },
  { label: "Close route", value: "close-route" },
  { label: "Open extra parking", value: "extra-parking" },
  { label: "Add extra shuttles", value: "extra-shuttles" },
  { label: "Trigger rain disruption", value: "rain" },
  { label: "Trigger emergency corridor", value: "emergency-corridor" }
];

export function WhatIfPanel() {
  const [selected, setSelected] = useState<WhatIfType>("extra-shuttles");
  const result = simulateScenarioImpact(selected);
  return (
    <div className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {options.map((option) => (
          <button key={option.value} onClick={() => setSelected(option.value)} className={`rounded-xl border p-3 text-left text-sm font-black transition ${selected === option.value ? "border-signal-cyan bg-signal-cyan/15 text-white" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"}`}>
            {option.label}
          </button>
        ))}
      </div>
      <WhatIfCard result={result} />
    </div>
  );
}
