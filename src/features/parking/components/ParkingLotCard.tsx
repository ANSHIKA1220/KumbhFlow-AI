import { ParkingCircle } from "lucide-react";
import type { ParkingRecommendation } from "../../../types/parking.types";

export function ParkingLotCard({ lot, best }: { lot: ParkingRecommendation; best?: boolean }) {
  const overflowProbability = Math.min(98, Math.round(lot.occupancyPct * 0.82 + lot.score * 0.18));
  const suggestedDiversion = lot.id === "p4" ? "Sector 7 Parking" : "Jhusi Reserve Parking";
  return (
    <article className={`rounded-xl border p-4 ${best ? "border-signal-cyan bg-signal-cyan/10" : "border-white/10 bg-white/5"}`}>
      <div className="flex items-center justify-between"><strong className="text-white"><ParkingCircle className="mr-2 inline" size={18} />{lot.name}</strong><span className="font-black">{lot.occupancyPct}%</span></div>
      <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-signal-blue" style={{ width: `${lot.occupancyPct}%` }} /></div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs font-bold text-slate-300">
        <span>Now {lot.occupancyPct}%</span>
        <span>+30m {Math.min(100, lot.occupancyPct + 8)}%</span>
        <span>+60m {Math.min(100, lot.occupancyPct + 17)}%</span>
      </div>
      <div className="mt-3 rounded-xl bg-black/20 p-3">
        <div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-400">Overflow probability</span><strong className={overflowProbability > 80 ? "text-signal-red" : "text-signal-amber"}>{overflowProbability}%</strong></div>
        <div className="mt-2 flex items-center justify-between"><span className="text-xs font-bold text-slate-400">Suggested diversion</span><strong className="text-signal-cyan">{suggestedDiversion}</strong></div>
      </div>
      <p className="mt-3 text-sm text-slate-400">Full in {lot.predictedFullInMin} min. Shuttle every {lot.shuttleFrequencyMin} min. Exit congestion risk: {lot.score > 115 ? "High" : lot.score > 85 ? "Moderate" : "Low"}.</p>
      <p className="mt-2 text-xs text-slate-500">{lot.reason}</p>
    </article>
  );
}
