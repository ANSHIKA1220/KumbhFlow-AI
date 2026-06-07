import { useEffect } from "react";
import { useSimulationStore } from "../store/simulationStore";

export function useSimulation() {
  const store = useSimulationStore();
  const { running, speed, scenario, advance } = store;

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => advance(), Math.max(700, 3500 / speed));
    return () => window.clearInterval(id);
  }, [running, speed, scenario, advance]);

  return store;
}
