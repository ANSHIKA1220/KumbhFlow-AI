import { NavLink } from "react-router-dom";
import { env } from "../../config/env";
import { useUiStore } from "../../store/uiStore";

const links = ["/", "/simulation", "/routes", "/parking", "/emergency", "/assistant"];
const labels = ["Dashboard", "Simulation", "Routes", "Parking", "Emergency", "Assistant"];

export function MobileNav() {
  const open = useUiStore((state) => state.sidebarOpen);
  const setOpen = useUiStore((state) => state.setSidebarOpen);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/70 lg:hidden" onClick={() => setOpen(false)}>
      <nav className="h-full w-72 bg-command-900 p-4" onClick={(event) => event.stopPropagation()}>
        <strong className="mb-6 block text-xl text-white">{env.appName}</strong>
        {links.map((link, index) => (
          <NavLink key={link} to={link} onClick={() => setOpen(false)} className="mb-2 block rounded-xl px-3 py-3 font-bold text-slate-200 hover:bg-white/10">{labels[index]}</NavLink>
        ))}
      </nav>
    </div>
  );
}
