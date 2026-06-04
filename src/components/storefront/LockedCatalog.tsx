import d1 from "@/assets/drop-1.jpg";
import d2 from "@/assets/drop-2.jpg";
import d3 from "@/assets/drop-3.jpg";
import d4 from "@/assets/drop-4.jpg";

const items = [
  { id: "N01", name: "HEAVY HOODIE / 720GSM", category: "OUTER", img: d1 },
  { id: "N02", name: "TACTICAL CARGO / RIPSTOP", category: "BOTTOM", img: d2 },
  { id: "N03", name: "MA-1 SHELL / OVERSIZED", category: "OUTER", img: d3 },
  { id: "N04", name: "GRAPHIC TEE / DOUBLE-FACED", category: "TOP", img: d4 },
];

export function LockedCatalog({ onUnlock }: { onUnlock: () => void }) {
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>// 03 — THE PREVIEW</span>
          <span className="text-neon">[ ACCESS REQUIRED ]</span>
        </div>

        <h2 className="mt-8 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Locked catalog<span className="text-neon">.</span>
        </h2>
        <p className="mt-3 max-w-2xl font-mono text-sm text-muted-foreground">
          Four pieces. Censored until you're inside the queue. Pricing unlocks at T-7 days.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article key={it.id} className="group relative border-2 border-border bg-card">
              <div className="relative aspect-[3/4] overflow-hidden noise">
                <img
                  src={it.img}
                  alt={`${it.name} locked preview`}
                  loading="lazy"
                  width={768}
                  height={896}
                  className="h-full w-full object-cover blur-[8px] grayscale transition-all duration-500 group-hover:blur-[4px]"
                />
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute left-3 top-3 border border-neon bg-background/90 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-neon backdrop-blur">
                  ◇ LOCKED
                </div>
                <div className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {it.id}
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="border-2 border-foreground bg-background px-4 py-2 font-mono text-xs uppercase tracking-widest">
                    ▢ ▢ ▢ ▢ ▢ ▢
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-border p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {it.category}
                </div>
                <div className="mt-1 font-display text-sm font-bold uppercase tracking-tight">
                  {it.name}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-sm tabular-nums text-muted-foreground line-through">
                    €0.00
                  </span>
                  <button
                    onClick={onUnlock}
                    className="glitch border border-neon px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-neon transition-colors hover:bg-neon hover:text-neon-foreground"
                  >
                    Unlock →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
