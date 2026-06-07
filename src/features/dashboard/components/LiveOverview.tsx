import { StatCard } from "../../../components/ui/StatCard";
import type { Alert } from "../../../types/alert.types";
import type { MobilitySnapshot } from "../../../types/mobility.types";
import type { ParkingRecommendation } from "../../../types/parking.types";
import { formatNumber } from "../../../utils/formatters";

export function LiveOverview({ snapshots, alerts, parking }: { snapshots: MobilitySnapshot[]; alerts: Alert[]; parking: ParkingRecommendation[] }) {
  const crowd = snapshots.reduce((sum, item) => sum + item.crowdDensity * 180, 0);
  const avgRisk = Math.round(snapshots.reduce((sum, item) => sum + item.riskScore, 0) / Math.max(1, snapshots.length));
  const availableParking = parking.reduce((sum, item) => sum + item.capacity * (1 - item.occupancyPct / 100), 0);
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Total crowd" value={formatNumber(crowd)} helper="Synthetic CCTV + sensor estimate" />
      <StatCard label="Average congestion risk" value={`${avgRisk}/100`} helper="Weighted 4-factor score" />
      <StatCard label="Active alerts" value={alerts.length} helper="Generated + mock control room feed" />
      <StatCard label="Available parking" value={formatNumber(availableParking)} helper="Across mapped parking lots" />
    </div>
  );
}
