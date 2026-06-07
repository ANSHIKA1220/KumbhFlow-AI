export function ResourceAllocationAI({ crisisMode }: { crisisMode: boolean }) {
  const deploy = crisisMode
    ? { ambulances: 5, police: 9, buses: 7, reason: "Predicted crowd surge near Sangam plus rain and parking overflow." }
    : { ambulances: 3, police: 5, buses: 4, reason: "Predicted crowd surge near Sangam." };
  return (
    <section className="rounded-2xl border border-signal-green/25 bg-signal-green/10 p-5">
      <h2 className="text-lg font-black text-white">Resource Allocation AI</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-black/20 p-3"><p className="text-xs text-slate-400">Available</p><strong className="text-white">12 ambulances</strong></div>
        <div className="rounded-xl bg-black/20 p-3"><p className="text-xs text-slate-400">Available</p><strong className="text-white">24 police units</strong></div>
        <div className="rounded-xl bg-black/20 p-3"><p className="text-xs text-slate-400">Available</p><strong className="text-white">18 shuttle buses</strong></div>
      </div>
      <div className="mt-4 rounded-xl bg-command-950/60 p-4">
        <p className="text-sm font-black text-signal-green">AI suggests deploy: {deploy.ambulances} ambulances, {deploy.police} police units, {deploy.buses} buses</p>
        <p className="mt-2 text-sm text-slate-300">Why: {deploy.reason}</p>
      </div>
    </section>
  );
}
