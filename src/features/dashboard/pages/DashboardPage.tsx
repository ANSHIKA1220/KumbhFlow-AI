import { Card } from "../../../components/ui/Card";
import { PageHeader } from "../../../components/layout/PageHeader";
import { MobilityMap } from "../../../components/maps/MobilityMap";
import { CrowdDistributionChart } from "../../../components/charts/CrowdDistributionChart";
import { TransportModeChart } from "../../../components/charts/TransportModeChart";
import { AIReasonList } from "../../../components/ai/AIReasonList";
import { PredictionTimeline } from "../../../components/ai/PredictionTimeline";
import { RecommendationRankCard } from "../../../components/ai/RecommendationRankCard";
import { LostPersonPredictor } from "../../../components/ai/LostPersonPredictor";
import { AIReasoningPanel } from "../../../components/ai/AIReasoningPanel";
import { CrowdFlowForecast } from "../../../components/ai/CrowdFlowForecast";
import { MobilityHealthScore } from "../../../components/ai/MobilityHealthScore";
import { ResourceAllocationAI } from "../../../components/ai/ResourceAllocationAI";
import { useMobilityData } from "../../../hooks/useMobilityData";
import { useParking } from "../../../hooks/useParking";
import { useRoutePlanner } from "../../../hooks/useRoutePlanner";
import { generateDashboardActions } from "../../../services/aiExplanationService";
import { predictMedicalDelay, predictParkingOverflow, predictRouteBlockage, predictStampedeRisk } from "../../../services/incidentPredictionService";
import { adjustParkingForecast, predictAtTimeOffset } from "../../../services/timelinePredictionService";
import { useEffect, useState } from "react";
import { useSimulationStore } from "../../../store/simulationStore";
import { AlertFeed } from "../components/AlertFeed";
import { CommandDecisionEngine } from "../components/CommandDecisionEngine";
import { ControlRoomActions } from "../components/ControlRoomActions";
import { LiveOverview } from "../components/LiveOverview";
import { PredictionPanel } from "../components/PredictionPanel";
import { RiskSummary } from "../components/RiskSummary";

export function DashboardPage() {
  const { snapshots, alerts, predictions } = useMobilityData();
  const { recommendations } = useParking();
  const { bestRoute } = useRoutePlanner();
  const [timeline, setTimeline] = useState(30);
  const [playing, setPlaying] = useState(false);
  const crisisMode = useSimulationStore((state) => state.crisisMode);
  const forecastSnapshots = predictAtTimeOffset(snapshots, timeline);
  const forecastParking = adjustParkingForecast(recommendations, timeline);
  const actions = generateDashboardActions(forecastSnapshots);
  const incidentPanels = [predictStampedeRisk(forecastSnapshots), predictParkingOverflow(forecastSnapshots), predictRouteBlockage(forecastSnapshots), predictMedicalDelay(forecastSnapshots)];
  const avgRisk = Math.round(forecastSnapshots.reduce((sum, item) => sum + item.riskScore, 0) / Math.max(1, forecastSnapshots.length));
  const confidence = Math.max(78, 95 - Math.round(avgRisk / 7));
  const riskLevel = crisisMode ? "HIGH ALERT" : avgRisk > 70 ? "HIGH" : avgRisk > 40 ? "MODERATE" : "SAFE";
  const mobilityHealth = crisisMode ? 42 : Math.max(18, 100 - avgRisk + (confidence > 86 ? 4 : 0));
  const sangamRisk = forecastSnapshots.find((item) => item.locationId === "sangam") ?? forecastSnapshots[0];
  const parkingPressure = Math.round(forecastParking.reduce((sum, item) => sum + item.occupancyPct, 0) / Math.max(1, forecastParking.length));
  useEffect(() => {
    if (!playing) return;
    const steps = [0, 15, 30, 60, 120];
    const id = window.setInterval(() => {
      setTimeline((current) => steps[(steps.indexOf(current) + 1) % steps.length]);
    }, 1100);
    return () => window.clearInterval(id);
  }, [playing]);
  return (
    <>
      <PageHeader eyebrow="AI mobility command dashboard" title="Mahakumbh predictive command center" description="From reactive traffic monitoring to predictive mobility intelligence. Forecast risk, explain decisions, and trigger command actions before congestion becomes unsafe." />
      <div className="mb-4 rounded-2xl border border-signal-cyan/25 bg-signal-cyan/10 p-4 text-center text-sm font-black text-slate-100">KumbhFlow AI does not optimize for shortest path. It optimizes for safest crowd movement before congestion happens.</div>
      <div className="mb-4 grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
        <MobilityHealthScore score={mobilityHealth} crisisMode={crisisMode} />
        <CommandDecisionEngine riskLevel={riskLevel} confidence={confidence} crisisMode={crisisMode} />
      </div>
      {crisisMode ? <div className="mb-4 rounded-2xl border border-signal-red/50 bg-signal-red/15 p-5 text-center text-2xl font-black text-signal-red">ALERT LEVEL 4 - Train Surge + Rain + Parking Overflow Detected</div> : null}
      <Card className="mb-4 mt-4 bg-gradient-to-br from-signal-cyan/15 via-command-900 to-command-900">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2"><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-300">Forecast horizon: {timeline === 0 ? "Now" : `+${timeline} min`}</span><button onClick={() => setPlaying(!playing)} className="rounded-full bg-signal-cyan px-3 py-1 text-xs font-black text-command-950">{playing ? "Pause Simulation" : "Play Simulation"}</button></div>
            <h2 className="text-2xl font-black text-white">Live Digital Twin Playback</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">KumbhFlow AI predicts average network risk at {avgRisk}/100. The system recommends staged diversion, shuttle reinforcement, and parking redirection before Sangam approach density peaks.</p>
          </div>
          <PredictionTimeline value={timeline} onChange={setTimeline} />
        </div>
      </Card>
      <LiveOverview snapshots={forecastSnapshots} alerts={alerts} parking={forecastParking} />
      <div className="mt-4 grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <Card><div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-black text-white">Predictive Risk Map</h2><span className="text-xs font-bold text-signal-cyan">Timeline adjusted</span></div><MobilityMap snapshots={forecastSnapshots} alerts={alerts} parkingLots={forecastParking} route={bestRoute} /></Card>
        <div className="space-y-4"><PredictionPanel predictions={predictions} /><CrowdFlowForecast offset={timeline} /></div>
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]">
        <AIReasoningPanel crowdDensity={sangamRisk.crowdDensity} parkingPressure={parkingPressure} trainArrivals={crisisMode ? "+38%" : "+24%"} predictedRisk={riskLevel} action={crisisMode ? "Generate green corridor and redirect all inflow" : "Deploy 3 shuttle buses"} impact={crisisMode ? "-18% emergency delay" : "-11% density"} />
        <ResourceAllocationAI crisisMode={crisisMode} />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card><h2 className="mb-4 text-lg font-black text-white">AI Recommended Actions</h2><div className="space-y-3">{actions.map((action, index) => <RecommendationRankCard key={action.title} rank={index + 1} {...action} />)}</div></Card>
        <Card><h2 className="mb-4 text-lg font-black text-white">Incident Probability Panel</h2><div className="space-y-3">{incidentPanels.map((item) => <div key={item.label} className="rounded-xl bg-white/5 p-3"><div className="flex items-center justify-between"><strong className="text-white">{item.label}</strong><span className="text-xl font-black text-signal-cyan">{item.percentage}%</span></div><p className="mt-2 text-xs text-slate-400">Top factors: {item.factors.join(", ")}</p></div>)}</div></Card>
        <Card><h2 className="mb-4 text-lg font-black text-white">AI Explainability</h2><AIReasonList reasons={["Synthetic digital twin is using live scenario pressure, location risk, and parking pressure.", "Forecast map updates risk circles according to the selected timeline horizon.", "Recommended actions are ranked by estimated impact and confidence."]} /></Card>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card><h2 className="mb-4 text-lg font-black text-white">Risk summary</h2><RiskSummary snapshots={forecastSnapshots} /></Card>
        <Card><h2 className="mb-4 text-lg font-black text-white">Alerts feed</h2><AlertFeed alerts={alerts} /></Card>
        <Card><h2 className="mb-4 text-lg font-black text-white">Control room actions</h2><ControlRoomActions /><div className="mt-5"><CrowdDistributionChart snapshots={forecastSnapshots} /></div><TransportModeChart /></Card>
      </div>
      <div className="mt-4">
        <LostPersonPredictor />
      </div>
    </>
  );
}
