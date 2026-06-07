const prompts = ["Mujhe Sangam jana hai", "Where should I park?", "Bus kaha milegi?", "Emergency help needed", "Is this route safe?", "Bheed zyada hai kya?", "Mera group elderly hai"];

export function QuickPrompts({ onPick }: { onPick: (prompt: string) => void }) {
  return <div className="flex flex-wrap gap-2">{prompts.map((prompt) => <button key={prompt} onClick={() => onPick(prompt)} className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-slate-200 hover:bg-white/15">{prompt}</button>)}</div>;
}
