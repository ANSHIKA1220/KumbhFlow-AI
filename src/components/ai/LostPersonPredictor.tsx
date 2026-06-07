import { MapPinned } from "lucide-react";
import { useState } from "react";
import { mockLocations } from "../../data/mockLocations";

export function LostPersonPredictor() {
  const [lastSeen, setLastSeen] = useState("junction");
  const location = mockLocations.find((item) => item.id === lastSeen);
  const path = lastSeen === "junction" ? "Sector 4 -> Parade Ground -> Sangam" : "Parade Ground -> Hanuman Mandir -> Sangam";
  const confidence = lastSeen === "junction" ? 76 : 71;
  return (
    <section className="rounded-2xl border border-signal-blue/30 bg-gradient-to-br from-signal-blue/15 to-white/[0.03] p-5">
      <div className="mb-4 flex items-center gap-3">
        <MapPinned className="text-signal-blue" />
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-signal-blue">Missing Person Assistance</p>
          <h2 className="text-xl font-black text-white">Lost Person Recovery Predictor</h2>
        </div>
      </div>
      <label className="text-sm font-bold text-slate-300">
        Last seen
        <select className="mt-2 w-full rounded-lg border border-white/10 bg-command-800 p-3" value={lastSeen} onChange={(event) => setLastSeen(event.target.value)}>
          {mockLocations.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </label>
      <div className="mt-4 rounded-xl bg-black/20 p-4">
        <p className="text-sm text-slate-400">AI predicts likely movement from <strong className="text-white">{location?.name}</strong></p>
        <p className="mt-2 text-lg font-black text-signal-cyan">{path}</p>
        <p className="mt-2 text-sm font-bold text-signal-green">Confidence: {confidence}%</p>
      </div>
    </section>
  );
}
