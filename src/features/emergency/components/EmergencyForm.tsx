import type { EmergencyType } from "../logic/emergencyCorridor";
import { mockLocations } from "../../../data/mockLocations";

export function EmergencyForm({ value, onChange }: { value: { type: EmergencyType; sourceId: string; destinationId: string; priority: "standard" | "high" | "critical" }; onChange: (value: { type: EmergencyType; sourceId: string; destinationId: string; priority: "standard" | "high" | "critical" }) => void }) {
  return (
    <div className="grid gap-3 md:grid-cols-4">
      <select className="rounded-lg border border-white/10 bg-command-800 p-3" value={value.type} onChange={(event) => onChange({ ...value, type: event.target.value as EmergencyType })}><option value="ambulance">Ambulance</option><option value="fire">Fire</option><option value="stampede">Stampede Risk</option><option value="lost-person">Lost Person</option><option value="security">Security</option></select>
      <select className="rounded-lg border border-white/10 bg-command-800 p-3" value={value.sourceId} onChange={(event) => onChange({ ...value, sourceId: event.target.value })}>{mockLocations.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
      <select className="rounded-lg border border-white/10 bg-command-800 p-3" value={value.destinationId} onChange={(event) => onChange({ ...value, destinationId: event.target.value })}>{mockLocations.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
      <select className="rounded-lg border border-white/10 bg-command-800 p-3" value={value.priority} onChange={(event) => onChange({ ...value, priority: event.target.value as "standard" | "high" | "critical" })}><option value="standard">Standard</option><option value="high">High</option><option value="critical">Critical</option></select>
    </div>
  );
}
