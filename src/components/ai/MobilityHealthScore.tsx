export function MobilityHealthScore({ score, crisisMode }: { score: number; crisisMode: boolean }) {
  const tone = crisisMode || score < 50 ? "text-signal-red border-signal-red/40 bg-signal-red/10" : score < 75 ? "text-signal-amber border-signal-amber/40 bg-signal-amber/10" : "text-signal-green border-signal-green/40 bg-signal-green/10";
  return (
    <section className={`rounded-2xl border p-6 text-center shadow-glow ${tone}`}>
      <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-300">Mobility Health Score</p>
      <div className="mt-3 text-6xl font-black">{score}<span className="text-2xl text-slate-400"> / 100</span></div>
      <p className="mt-3 text-sm font-bold text-slate-300">{crisisMode ? "ALERT LEVEL 4 - Stampede Risk Detected" : score < 75 ? "Watch mode - preventive actions recommended" : "Network movement is stable"}</p>
    </section>
  );
}
