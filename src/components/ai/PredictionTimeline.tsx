const options = [
  { label: "Now", value: 0 },
  { label: "+15 min", value: 15 },
  { label: "+30 min", value: 30 },
  { label: "+60 min", value: 60 },
  { label: "+120 min", value: 120 }
];

export function PredictionTimeline({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-black text-white">Digital Twin Timeline</span>
        <span className="text-xs font-bold text-signal-cyan">{value === 0 ? "Now" : `+${value} min forecast`}</span>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {options.map((option) => (
          <button key={option.value} onClick={() => onChange(option.value)} className={`rounded-lg px-2 py-2 text-xs font-black transition ${value === option.value ? "bg-signal-cyan text-command-950" : "bg-command-800 text-slate-300 hover:bg-white/10"}`}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
