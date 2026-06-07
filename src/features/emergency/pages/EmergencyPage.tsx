import { PageHeader } from "../../../components/layout/PageHeader";
import { MobilityMap } from "../../../components/maps/MobilityMap";
import { AIReasonList } from "../../../components/ai/AIReasonList";
import { EmergencyTimeline } from "../../../components/ai/EmergencyTimeline";
import { ResourceAllocationAI } from "../../../components/ai/ResourceAllocationAI";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import { useEmergency } from "../../../hooks/useEmergency";
import { useMobilityData } from "../../../hooks/useMobilityData";
import { useParking } from "../../../hooks/useParking";
import { generateEmergencyReasons } from "../../../services/aiExplanationService";
import { useState } from "react";
import { DiversionPlan } from "../components/DiversionPlan";
import { EmergencyForm } from "../components/EmergencyForm";
import { EmergencyRouteResult } from "../components/EmergencyRouteResult";

export function EmergencyPage() {
  const emergency = useEmergency();
  const { snapshots, alerts } = useMobilityData();
  const { recommendations } = useParking();
  const [generated, setGenerated] = useState(true);
  const severityClass = emergency.input.type === "fire" ? "from-orange-500/20" : emergency.input.type === "security" ? "from-violet-500/20" : emergency.input.type === "lost-person" ? "from-signal-blue/20" : "from-signal-red/20";
  const emergencyMapRoute = { roadIds: emergency.plan.route };
  return (
    <>
      <PageHeader eyebrow="Emergency corridor generator" title="Create clear corridors in seconds" description="For ambulance, fire, stampede risk, lost person, VIP/security, and other high-priority movement." />
      <Card className={`mb-4 bg-gradient-to-br ${severityClass} to-command-900`}><EmergencyForm value={emergency.input} onChange={(value) => { emergency.setInput(value); setGenerated(false); }} /><Button className="mt-4" onClick={() => setGenerated(true)}>Generate Emergency Plan</Button></Card>
      {generated ? (
        <>
          <div className="mb-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
            <Card><EmergencyRouteResult plan={emergency.plan} /><div className="mt-4"><h2 className="mb-3 text-lg font-black text-white">AI emergency reasoning</h2><AIReasonList reasons={generateEmergencyReasons()} /></div></Card>
            <Card><h2 className="mb-3 text-lg font-black text-white">Emergency map view</h2><MobilityMap snapshots={snapshots} alerts={alerts} parkingLots={recommendations} route={emergencyMapRoute} /></Card>
          </div>
          <div className="mb-4 grid gap-4 xl:grid-cols-2">
            <EmergencyTimeline />
            <ResourceAllocationAI crisisMode />
          </div>
          <Card><DiversionPlan plan={emergency.plan} /></Card>
        </>
      ) : (
        <Card><p className="text-sm text-slate-300">Select emergency type, source, destination, and priority, then generate a command-ready plan.</p></Card>
      )}
    </>
  );
}
