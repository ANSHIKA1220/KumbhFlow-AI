import { mockLocations } from "../../../data/mockLocations";
import type { GroupType, TravelMode } from "../../../types/route.types";
import { Button } from "../../../components/ui/Button";

export function RouteSearchForm({ value, onChange }: { value: { startId: string; destinationId: string; groupType: GroupType; mode: TravelMode }; onChange: (value: { startId: string; destinationId: string; groupType: GroupType; mode: TravelMode }) => void }) {
  return (
    <form className="grid gap-3 md:grid-cols-5" onSubmit={(event) => event.preventDefault()}>
      <select className="rounded-lg border border-white/10 bg-command-800 p-3" value={value.startId} onChange={(event) => onChange({ ...value, startId: event.target.value })}>{mockLocations.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
      <select className="rounded-lg border border-white/10 bg-command-800 p-3" value={value.destinationId} onChange={(event) => onChange({ ...value, destinationId: event.target.value })}>{mockLocations.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
      <select className="rounded-lg border border-white/10 bg-command-800 p-3" value={value.groupType} onChange={(event) => onChange({ ...value, groupType: event.target.value as GroupType })}><option value="individual">Individual</option><option value="family">Family</option><option value="elderly">Elderly</option><option value="disabled">Disabled</option><option value="large-group">Large Group</option></select>
      <select className="rounded-lg border border-white/10 bg-command-800 p-3" value={value.mode} onChange={(event) => onChange({ ...value, mode: event.target.value as TravelMode })}><option value="walk">Walk</option><option value="shuttle">Shuttle</option><option value="mixed">Mixed</option></select>
      <Button type="submit">Recommend</Button>
    </form>
  );
}
