import { Card } from "../../../components/ui/Card";
import { PageHeader } from "../../../components/layout/PageHeader";
import { useSimulation } from "../../../hooks/useSimulation";
import { DataStreamTable } from "../components/DataStreamTable";
import { ScenarioSelector } from "../components/ScenarioSelector";
import { SimulatorControls } from "../components/SimulatorControls";
import { WhatIfPanel } from "../components/WhatIfPanel";

export function SimulationPage() {
  const simulation = useSimulation();
  return (
    <>
      <PageHeader eyebrow="Synthetic data simulator" title="Work without official datasets" description="KumbhFlow AI generates realistic mobility data every few seconds. The simulator can later be replaced by CCTV counts, bus GPS, parking sensors, rail APIs, and control room feeds." />
      <Card className="mb-4"><ScenarioSelector value={simulation.scenario} onChange={simulation.setScenario} /></Card>
      <Card className="mb-4"><SimulatorControls running={simulation.running} speed={simulation.speed} onRunningChange={simulation.setRunning} onSpeedChange={simulation.setSpeed} /></Card>
      <Card className="mb-4">
        <h2 className="mb-2 text-xl font-black text-white">What-if Simulator</h2>
        <p className="mb-4 text-sm leading-6 text-slate-400">Test command decisions before applying them to the digital twin.</p>
        <WhatIfPanel />
      </Card>
      <Card className="mb-4 bg-gradient-to-r from-signal-blue/10 to-signal-cyan/10">
        <h2 className="text-xl font-black text-white">Why synthetic data?</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">Official live data is unavailable during prototyping. KumbhFlow AI uses a synthetic digital twin to simulate CCTV counts, GPS feeds, parking occupancy, rail arrivals, shuttle movement, and crowd density. These mock streams can later be replaced with real APIs.</p>
      </Card>
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-black text-white">Live synthetic data stream</h2>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">Tick {simulation.tick}</span>
        </div>
        <DataStreamTable snapshots={simulation.snapshots} />
      </Card>
    </>
  );
}
