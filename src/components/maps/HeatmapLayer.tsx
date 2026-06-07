import { Circle } from "react-leaflet";
import { mockLocations } from "../../data/mockLocations";
import type { MobilitySnapshot } from "../../types/mobility.types";
import { RISK_COLORS } from "../../utils/constants";

export function HeatmapLayer({ snapshots }: { snapshots: MobilitySnapshot[] }) {
  return (
    <>
      {snapshots.map((snapshot) => {
        const location = mockLocations.find((item) => item.id === snapshot.locationId);
        if (!location) return null;
        return (
          <Circle
            key={snapshot.locationId}
            center={[location.lat, location.lng]}
            radius={120 + snapshot.riskScore * 9}
            pathOptions={{ color: RISK_COLORS[snapshot.riskLevel], fillColor: RISK_COLORS[snapshot.riskLevel], fillOpacity: 0.22, weight: 1 }}
          />
        );
      })}
    </>
  );
}
