import type { ParkingRecommendation } from "../../../types/parking.types";

export function ParkingRecommendationPanel({ lot }: { lot?: ParkingRecommendation }) {
  if (!lot) return null;
  return <div className="rounded-xl border border-signal-green/30 bg-signal-green/10 p-4"><p className="text-sm font-bold text-signal-green">Recommended parking</p><h2 className="mt-1 text-2xl font-black text-white">{lot.name}</h2><p className="mt-2 text-sm text-slate-300">{lot.reason}</p></div>;
}
