export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-display text-5xl font-black uppercase tracking-tighter sm:text-7xl">
              NFECT<span className="text-neon">.</span>
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              MADE FOR THE OVERLOOKED · EST. NOWHERE
            </div>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            © 2026 · ALL RIGHTS RESERVED · NO RESTOCK
          </div>
        </div>
      </div>
    </footer>
  );
}
