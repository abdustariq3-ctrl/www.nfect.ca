const ITEMS = [
  "DROP 01 // OVERCROWDED SUBURBS",
  "BI-ANNUAL RELEASE CYCLE",
  "MEMBERS ONLY",
  "NO RESTOCK · NO MERCY",
  "BUILT FOR THE OVERLOOKED",
  "JOIN THE QUEUE",
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-border bg-neon text-neon-foreground overflow-hidden">
      <div className="marquee py-3 font-mono text-sm uppercase tracking-[0.2em]">
        {loop.map((t, i) => (
          <span key={i} className="px-8 flex items-center gap-8 whitespace-nowrap">
            {t}
            <span aria-hidden>✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}
