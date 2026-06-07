import type { ParkingRecommendation } from "../../../types/parking.types";

export function ShuttleStatusPanel({ lots }: { lots: ParkingRecommendation[] }) {
  return <div className="grid gap-2">{lots.map((lot) => <div key={lot.id} className="flex items-center justify-between rounded-lg bg-white/5 p-3 text-sm"><span>{lot.name}</span><strong>{lot.shuttleAvailable ? `${lot.shuttleFrequencyMin} min` : "No shuttle"}</strong></div>)}</div>;
}
