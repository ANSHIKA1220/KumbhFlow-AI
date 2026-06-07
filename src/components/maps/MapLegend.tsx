export function MapLegend() {
  return (
    <div className="absolute bottom-4 left-4 z-[500] rounded-xl bg-command-950/90 p-3 text-xs font-bold text-slate-200 shadow-glow">
      <div className="mb-1 flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal-green" /> Safe</div>
      <div className="mb-1 flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal-amber" /> Moderate</div>
      <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal-red" /> High risk</div>
    </div>
  );
}
