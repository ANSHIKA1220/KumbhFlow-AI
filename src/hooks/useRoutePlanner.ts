import { useMemo } from "react";
import { optimizeRoutes } from "../features/routing/logic/routeOptimizer";
import { useMobilityStore } from "../store/mobilityStore";
import { useSimulationStore } from "../store/simulationStore";

export function useRoutePlanner() {
  const { routeInput, setRouteInput } = useMobilityStore();
  const snapshots = useSimulationStore((state) => state.snapshots);
  const rankedRoutes = useMemo(() => optimizeRoutes({ ...routeInput, snapshots }), [routeInput, snapshots]);
  return { routeInput, setRouteInput, rankedRoutes, bestRoute: rankedRoutes[0] };
}
