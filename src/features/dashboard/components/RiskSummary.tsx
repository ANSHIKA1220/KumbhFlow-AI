import { RiskBadge } from "../../../components/ui/RiskBadge";
import type { MobilitySnapshot } from "../../../types/mobility.types";
import { mockLocations } from "../../../data/mockLocations";

export function RiskSummary({ snapshots }: { snapshots: MobilitySnapshot[] }) {
  return (
    <div className="space-y-3">
      {snapshots.slice().sort((a, b) => b.riskScore - a.riskScore).slice(0, 5).map((item) => (
        <div key={item.locationId} className="flex items-center justify-between rounded-xl bg-white/5 p-3">
          <div>
            <strong className="text-white">{mockLocations.find((location) => location.id === item.locationId)?.name}</strong>
            <p className="text-xs text-slate-400">Crowd {item.crowdDensity}% | Vehicle {item.vehicleDensity}%</p>
          </div>
          <RiskBadge level={item.riskLevel} />
        </div>
      ))}
    </div>
  );
}
