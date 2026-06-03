import heroImg from "@/assets/hero-lookbook.jpg";

export function Hero({
  email, setEmail, onSubmit,
}: { email: string; setEmail: (v: string) => void; onSubmit: (e: React.FormEvent) => void }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Left - copy */}
        <div className="relative flex flex-col justify-between border-r border-border p-6 sm:p-10 lg:p-14">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="border border-neon bg-neon/10 px-2 py-1 text-neon">● DROP 01</span>
            <span>SS '26 // LOOKBOOK</span>
          </div>

          <h1 className="mt-10 font-display text-[14vw] font-black uppercase leading-[0.85] tracking-tighter sm:text-[10vw] lg:text-[7.5vw]">
            OVER<br />
            <span className="text-stroke">CROWDED</span><br />
            SUBURBS<span className="text-neon">.</span>
          </h1>

          <p className="mt-8 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
            A bi-annual ritual. 400 pieces. No restock. Built for the kids the city forgot.
            The queue opens once — the queue closes hard.
          </p>

          <form onSubmit={onSubmit} className="mt-10 border-2 border-foreground">
            <div className="flex items-center justify-between border-b border-foreground bg-foreground px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-background">
              <span>// JOIN THE COMMUNITY — UNLOCK ACCESS</span>
              <span className="ticker">●</span>
            </div>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-background px-4 py-4 font-mono text-base text-foreground placeholder:text-muted-foreground focus:bg-secondary focus:outline-none"
              />
              <button
                type="submit"
                className="glitch border-l-2 border-foreground bg-neon px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-neon-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Get In →
              </button>
            </div>
          </form>
        </div>

        {/* Right - image */}
        <div className="relative noise scanlines min-h-[420px] overflow-hidden bg-card">
          <img
            src={heroImg}
            alt="Drop 01 lookbook hooded figure in industrial alley"
            className="absolute inset-0 h-full w-full object-cover"
            width={1536}
            height={1536}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2 border border-neon bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-neon backdrop-blur">
            ▣ REC · 04:21
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            FILE_VOID_01.MOV
          </div>
          <div className="scan-line absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
