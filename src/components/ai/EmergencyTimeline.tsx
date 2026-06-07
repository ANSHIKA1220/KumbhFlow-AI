const steps = [
  ["0 min", "Ambulance dispatched"],
  ["3 min", "Sector 4 cleared"],
  ["7 min", "Diversion activated"],
  ["11 min", "Police deployment complete"],
  ["16 min", "Arrival"]
];

export function EmergencyTimeline() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="mb-4 text-lg font-black text-white">Predicted Response Timeline</h2>
      <div className="space-y-3">
        {steps.map(([time, label]) => (
          <div key={time} className="grid grid-cols-[72px_1fr] items-center gap-3">
            <span className="rounded-lg bg-signal-red/15 px-3 py-2 text-center text-sm font-black text-signal-red">{time}</span>
            <span className="rounded-lg bg-command-800 p-3 text-sm text-slate-200">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
