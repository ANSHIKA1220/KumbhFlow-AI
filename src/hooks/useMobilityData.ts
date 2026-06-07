import { useSimulation } from "./useSimulation";
import { predictCongestion } from "../services/predictionService";
import { getActiveAlerts } from "../services/alertService";

export function useMobilityData() {
  const simulation = useSimulation();
  return {
    ...simulation,
    predictions: predictCongestion(simulation.snapshots, simulation.scenario),
    alerts: getActiveAlerts(simulation.snapshots)
  };
}
