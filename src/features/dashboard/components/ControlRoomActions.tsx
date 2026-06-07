import { Siren, TrafficCone, Bus, ParkingCircle } from "lucide-react";
import { Button } from "../../../components/ui/Button";

const actions = [
  { label: "Open emergency corridor", icon: Siren },
  { label: "Deploy diversion team", icon: TrafficCone },
  { label: "Stage extra shuttles", icon: Bus },
  { label: "Redirect parking inflow", icon: ParkingCircle }
];

export function ControlRoomActions() {
  return <div className="grid gap-3 sm:grid-cols-2">{actions.map((action) => { const Icon = action.icon; return <Button key={action.label} className="flex items-center justify-center gap-2"><Icon size={17} />{action.label}</Button>; })}</div>;
}
