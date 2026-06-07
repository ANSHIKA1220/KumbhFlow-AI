import { useMemo } from "react";
import { allocateParking } from "../features/parking/logic/parkingAllocator";
import { useSimulationStore } from "../store/simulationStore";

export function useParking(destinationId = "sangam") {
  const snapshots = useSimulationStore((state) => state.snapshots);
  const recommendations = useMemo(() => allocateParking(destinationId, snapshots), [destinationId, snapshots]);
  return { recommendations, bestParking: recommendations[0] };
}
