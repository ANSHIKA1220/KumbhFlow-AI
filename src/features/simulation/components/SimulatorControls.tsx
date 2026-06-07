import { Pause, Play } from "lucide-react";
import { Button } from "../../../components/ui/Button";

export function SimulatorControls({ running, speed, onRunningChange, onSpeedChange }: { running: boolean; speed: number; onRunningChange: (running: boolean) => void; onSpeedChange: (speed: number) => void }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
      <Button onClick={() => onRunningChange(!running)} className="flex items-center justify-center gap-2">
        {running ? <Pause size={16} /> : <Play size={16} />} {running ? "Pause simulation" : "Start simulation"}
      </Button>
      <label className="flex items-center gap-3 text-sm font-bold text-slate-300">
        Speed
        <input className="accent-signal-cyan" type="range" min={1} max={6} value={speed} onChange={(event) => onSpeedChange(Number(event.target.value))} />
        <span>{speed}x</span>
      </label>
    </div>
  );
}
