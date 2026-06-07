import { useEffect } from "react";
import { useSimulationStore } from "../store/simulationStore";

export function useSimulation() {
  const store = useSimulationStore();

  useEffect(() => {
    if (!store.running) return;
    const id = window.setInterval(() => store.advance(), Math.max(700, 3500 / store.speed));
    return () => window.clearInterval(id);
  }, [store.running, store.speed, store.scenario]);

  return store;
}
