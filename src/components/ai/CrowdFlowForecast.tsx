const flows = [
  ["Prayagraj Junction", "Sector 4"],
  ["Sector 4", "Parade Ground"],
  ["Parade Ground", "Sangam"],
  ["Jhusi", "Arail Ghat"],
  ["Arail Ghat", "Sangam"]
];

export function CrowdFlowForecast({ offset }: { offset: number }) {
  const intensity = offset >= 60 ? "bg-signal-red" : offset >= 30 ? "bg-signal-amber" : "bg-signal-cyan";
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-black text-white">Crowd Flow Forecast</h2>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-300">{offset === 0 ? "Now" : `+${offset}m`}</span>
      </div>
      <div className="space-y-3">
        {flows.map(([from, to], index) => (
          <div key={`${from}-${to}`} className="grid grid-cols-[1fr_64px_1fr] items-center gap-3 text-sm">
            <span className="rounded-lg bg-command-800 p-2 text-right text-slate-200">{from}</span>
            <span className={`relative h-1 rounded-full ${intensity}`}>
              <span className={`absolute -right-1 -top-1.5 h-4 w-4 rotate-45 border-r-4 border-t-4 ${offset >= 60 ? "border-signal-red" : offset >= 30 ? "border-signal-amber" : "border-signal-cyan"}`} />
              <span className="absolute inset-0 animate-pulse rounded-full bg-white/40" style={{ animationDelay: `${index * 120}ms` }} />
            </span>
            <span className="rounded-lg bg-command-800 p-2 text-slate-200">{to}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
