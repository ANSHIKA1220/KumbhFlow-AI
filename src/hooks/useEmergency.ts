import { useMemo, useState } from "react";
import { generateEmergencyCorridor, type EmergencyType } from "../features/emergency/logic/emergencyCorridor";
import { useSimulationStore } from "../store/simulationStore";

type EmergencyInput = {
  type: EmergencyType;
  sourceId: string;
  destinationId: string;
  priority: "standard" | "high" | "critical";
};

export function useEmergency() {
  const snapshots = useSimulationStore((state) => state.snapshots);
  const [input, setInput] = useState<EmergencyInput>({ type: "ambulance", sourceId: "junction", destinationId: "sangam", priority: "high" });
  const plan = useMemo(() => generateEmergencyCorridor({ ...input, snapshots }), [input, snapshots]);
  return { input, setInput, plan };
}
