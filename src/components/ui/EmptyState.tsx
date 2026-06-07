export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="rounded-xl border border-dashed border-white/15 p-6 text-center text-slate-400"><strong className="block text-white">{title}</strong><p className="mt-2 text-sm">{description}</p></div>;
}
