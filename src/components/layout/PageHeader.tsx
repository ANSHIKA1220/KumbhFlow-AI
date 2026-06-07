export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header className="mb-5 flex flex-col gap-2">
      <p className="text-xs font-black uppercase tracking-[0.24em] text-signal-cyan">{eyebrow}</p>
      <h1 className="text-3xl font-black text-white md:text-4xl">{title}</h1>
      {description ? <p className="max-w-3xl text-sm leading-6 text-slate-400">{description}</p> : null}
    </header>
  );
}
