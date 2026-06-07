export function Tabs({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (tab: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2 rounded-xl bg-white/5 p-1">
      {tabs.map((tab) => (
        <button key={tab} onClick={() => onChange(tab)} className={`rounded-lg px-3 py-2 text-sm font-bold ${active === tab ? "bg-signal-cyan text-command-950" : "text-slate-300 hover:bg-white/10"}`}>
          {tab}
        </button>
      ))}
    </div>
  );
}
