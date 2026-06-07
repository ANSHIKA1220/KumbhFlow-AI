import { NavLink } from "react-router-dom";
import { Activity, Bot, Car, Map, ParkingCircle, RadioTower, Siren } from "lucide-react";

const nav = [
  { to: "/", label: "Dashboard", icon: Activity },
  { to: "/simulation", label: "Simulation", icon: RadioTower },
  { to: "/routes", label: "Route Planner", icon: Map },
  { to: "/parking", label: "Parking", icon: ParkingCircle },
  { to: "/emergency", label: "Emergency", icon: Siren },
  { to: "/assistant", label: "Assistant", icon: Bot }
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-command-900/90 p-4 lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-signal-cyan font-black text-command-950">KF</div>
        <div>
          <strong className="block text-lg text-white">KumbhFlow AI</strong>
          <span className="text-xs text-slate-400">Smart-city mobility OS</span>
        </div>
      </div>
      <nav className="space-y-2">
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold ${isActive ? "bg-signal-cyan text-command-950" : "text-slate-300 hover:bg-white/10"}`}>
              <Icon size={18} /> {item.label}
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-8 rounded-xl border border-signal-cyan/20 bg-signal-cyan/10 p-4 text-sm text-slate-300">
        Synthetic digital twin mode is active. CCTV, GPS, parking sensors, and railway APIs can replace this data layer later.
      </div>
    </aside>
  );
}
