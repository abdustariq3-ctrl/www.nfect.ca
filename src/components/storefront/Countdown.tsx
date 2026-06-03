import { useEffect, useState } from "react";
import { DROP_DATE, getCountdown } from "@/lib/storefront/countdown";

const cells: { key: keyof ReturnType<typeof getCountdown>; label: string }[] = [
  { key: "months", label: "MONTHS" },
  { key: "days", label: "DAYS" },
  { key: "hours", label: "HOURS" },
  { key: "minutes", label: "MINUTES" },
];

export function Countdown() {
  const [cd, setCd] = useState(() => getCountdown(DROP_DATE));
  useEffect(() => {
    const i = setInterval(() => setCd(getCountdown(DROP_DATE)), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>// 02 — T-MINUS</span>
          <span>BI-ANNUAL · 6 MONTHS · LOCKED</span>
        </div>

        <h2 className="mt-8 font-display text-3xl font-black uppercase tracking-tight sm:text-5xl">
          The next drop arrives in
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {cells.map(({ key, label }) => (
            <div
              key={key}
              className="relative border-2 border-border bg-card p-6 noise"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {label}
              </div>
              <div className="mt-3 font-display text-6xl font-black tabular-nums leading-none text-foreground sm:text-7xl">
                {cd[key].toString().padStart(2, "0")}
              </div>
              <div className="absolute right-3 top-3 h-2 w-2 bg-neon ticker" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          <span>TARGET: {DROP_DATE.toUTCString()}</span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
    </section>
  );
}
