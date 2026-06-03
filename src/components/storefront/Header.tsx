import { useEffect, useState } from "react";
import { getCountdown, DROP_DATE } from "@/lib/storefront/countdown";

export function Header({ onJoin }: { onJoin: () => void }) {
  const [time, setTime] = useState(() => new Date());
  const [cd, setCd] = useState(() => getCountdown(DROP_DATE));

  useEffect(() => {
    const i = setInterval(() => {
      setTime(new Date());
      setCd(getCountdown(DROP_DATE));
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const clock = time.toLocaleTimeString("en-GB", { hour12: false });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center border-2 border-foreground font-display font-black">
            ◆
          </div>
          <div className="font-display text-lg font-black tracking-tight sm:text-xl">
            VOID/01
          </div>
        </div>

        <div className="hidden items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon ticker" />
            <span>LIVE</span>
            <span className="text-foreground tabular-nums">{clock}</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div>
            NEXT DROP <span className="text-neon tabular-nums">{cd.days}D {cd.hours.toString().padStart(2,"0")}:{cd.minutes.toString().padStart(2,"0")}:{cd.seconds.toString().padStart(2,"0")}</span>
          </div>
        </div>

        <button
          onClick={onJoin}
          className="glitch group flex items-center gap-2 border-2 border-neon bg-neon px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-neon-foreground transition-all hover:bg-background hover:text-neon"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-foreground group-hover:bg-neon" />
          Enter Queue
        </button>
      </div>
    </header>
  );
}
