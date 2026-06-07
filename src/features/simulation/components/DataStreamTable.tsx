import { RiskBadge } from "../../../components/ui/RiskBadge";
import { mockLocations } from "../../../data/mockLocations";
import type { MobilitySnapshot } from "../../../types/mobility.types";

export function DataStreamTable({ snapshots }: { snapshots: MobilitySnapshot[] }) {
  return (
    <div className="overflow-auto rounded-xl border border-white/10">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase text-slate-400">
          <tr><th className="p-3">Location</th><th className="p-3">Crowd</th><th className="p-3">Vehicle</th><th className="p-3">Parking</th><th className="p-3">Shuttles</th><th className="p-3">Risk</th></tr>
        </thead>
        <tbody>
          {snapshots.map((item) => (
            <tr key={item.locationId} className="border-t border-white/10">
              <td className="p-3 font-bold text-white">{mockLocations.find((location) => location.id === item.locationId)?.name}</td>
              <td className="p-3">{item.crowdDensity}%</td>
              <td className="p-3">{item.vehicleDensity}%</td>
              <td className="p-3">{item.parkingPressure}%</td>
              <td className="p-3">{item.shuttleCount}</td>
              <td className="p-3"><RiskBadge level={item.riskLevel} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
