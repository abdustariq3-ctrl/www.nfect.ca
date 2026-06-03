const posts = [
  { user: "@kaios.404", tag: "DISCORD", text: "the heavyweight hoodie sample is INSANE. 720gsm feels like body armor.", likes: 421 },
  { user: "@nyx_grim", tag: "IG", text: "made it to position #312. let's see if i survive the queue.", likes: 1287 },
  { user: "@voidrunner", tag: "DISCORD", text: "drop 00 still in rotation 14 months later. quality unmatched.", likes: 638 },
  { user: "@suburbghost", tag: "IG", text: "referred 7 friends, locked in early access. the system works 🟢", likes: 2104 },
  { user: "@404.jane", tag: "DISCORD", text: "MA-1 silhouette leak looks like it'll move fast. don't sleep.", likes: 512 },
  { user: "@blckmrkt", tag: "IG", text: "no restock policy is the only ethical drop model. respect.", likes: 893 },
];

const stats = [
  { v: "12,481", l: "QUEUE" },
  { v: "4,206", l: "DISCORD" },
  { v: "38.2K", l: "IG" },
  { v: "97%", l: "SELL-THRU" },
];

export function Community() {
  return (
    <section className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>// 04 — THE WALL</span>
          <span>UNFILTERED / FROM THE QUEUE</span>
        </div>

        <h2 className="mt-8 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Cult, not customers<span className="text-neon">.</span>
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="border-2 border-border bg-card p-4">
              <div className="font-display text-3xl font-black tabular-nums text-neon sm:text-4xl">{s.v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <article key={i} className="group relative border-2 border-border bg-card p-5 transition-colors hover:border-neon">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="text-foreground">{p.user}</span>
                <span className="border border-border bg-background px-2 py-0.5 group-hover:border-neon group-hover:text-neon">
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 font-display text-sm leading-relaxed text-foreground">"{p.text}"</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>♥ {p.likes.toLocaleString()}</span>
                <span>VERIFIED ✓</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
