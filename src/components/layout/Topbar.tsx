import { Menu, Sparkles } from "lucide-react";
import { env } from "../../config/env";
import { getActiveAlerts } from "../../services/alertService";
import { useSimulationStore } from "../../store/simulationStore";
import { useUiStore } from "../../store/uiStore";
import { AIConfidenceBadge } from "../ai/AIConfidenceBadge";
import { Badge } from "../ui/Badge";

export function Topbar() {
  const scenario = useSimulationStore((state) => state.scenario);
  const speed = useSimulationStore((state) => state.speed);
  const snapshots = useSimulationStore((state) => state.snapshots);
  const enableDemoMode = useSimulationStore((state) => state.enableDemoMode);
  const crisisMode = useSimulationStore((state) => state.crisisMode);
  const setCrisisMode = useSimulationStore((state) => state.setCrisisMode);
  const setSidebarOpen = useUiStore((state) => state.setSidebarOpen);
  const alerts = getActiveAlerts(snapshots);
  const avgRisk = Math.round(snapshots.reduce((sum, item) => sum + item.riskScore, 0) / Math.max(1, snapshots.length));
  const confidence = Math.max(76, 96 - Math.round(avgRisk / 5));
  return (
    <div className={`sticky top-0 z-30 flex min-h-16 flex-wrap items-center justify-between gap-3 border-b px-4 py-3 backdrop-blur ${crisisMode ? "border-signal-red/40 bg-red-950/90" : "border-white/10 bg-command-950/85"}`}>
      <button className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden" onClick={() => setSidebarOpen(true)}><Menu size={20} /></button>
      <div className="hidden text-sm font-semibold text-slate-400 lg:block">{env.appName}: From reactive traffic monitoring to predictive mobility intelligence.</div>
      <div className="flex flex-wrap items-center gap-2">
        <AIConfidenceBadge score={confidence} />
        <Badge tone="green">Prediction Engine: Active</Badge>
        <Badge tone="blue">Scenario: {scenario}</Badge>
        <Badge tone="neutral">Speed: {speed}x</Badge>
        <Badge tone={alerts.length > 3 ? "red" : "amber"}>Alerts: {alerts.length}</Badge>
        <button onClick={() => setCrisisMode(!crisisMode)} className={`rounded-full px-3 py-1 text-xs font-black transition ${crisisMode ? "bg-signal-red text-white" : "bg-white/10 text-slate-200 hover:bg-white/20"}`}>
          {crisisMode ? "Crisis Mode: HIGH ALERT" : "Normal Mode"}
        </button>
        {env.demoMode ? <button onClick={enableDemoMode} className="flex items-center gap-1 rounded-full bg-signal-cyan px-3 py-1 text-xs font-black text-command-950 transition hover:bg-white">
          <Sparkles size={13} /> Demo Mode
        </button> : null}
      </div>
    </div>
  );
}
