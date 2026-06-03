import { useEffect, useMemo, useState } from "react";

type Stage = "email" | "success";

const TIERS = [
  { count: 3, label: "Early Access", desc: "Skip the queue · 48h head-start" },
  { count: 5, label: "Free Shipping", desc: "Worldwide express on Drop 01" },
  { count: 10, label: "Guaranteed Piece", desc: "Your size held · zero risk" },
  { count: 25, label: "Mystery Box + Discord Role", desc: "Lab samples + ::VOID_INSIDER:: tag" },
];

export function WaitlistModal({
  open, onClose, email, setEmail,
}: {
  open: boolean; onClose: () => void;
  email: string; setEmail: (v: string) => void;
}) {
  const [stage, setStage] = useState<Stage>(email ? "success" : "email");
  const [position] = useState(() => Math.floor(2400 + Math.random() * 7800));
  const [refs, setRefs] = useState(0);
  const [copied, setCopied] = useState(false);

  const code = useMemo(() => Math.random().toString(36).slice(2, 8).toUpperCase(), []);
  const link = `void01.shop/q/${code}`;

  useEffect(() => {
    if (open && email && stage === "email") setStage("success");
  }, [open, email, stage]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStage("success");
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(`https://${link}`); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const nextTier = TIERS.find((t) => refs < t.count);
  const progress = nextTier ? (refs / nextTier.count) * 100 : 100;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div
        className="relative w-full max-w-xl border-2 border-neon bg-card noise animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b-2 border-neon bg-neon px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-neon-foreground">
          <span>// QUEUE.PROTOCOL — VOID/01</span>
          <button onClick={onClose} aria-label="Close" className="hover:opacity-70">✕</button>
        </div>

        {stage === "email" ? (
          <form onSubmit={submit} className="p-6 sm:p-8">
            <h3 className="font-display text-3xl font-black uppercase leading-none sm:text-4xl">
              Get in the queue<span className="text-neon">.</span>
            </h3>
            <p className="mt-3 font-mono text-sm text-muted-foreground">
              One email. One spot. No second chances when Drop 01 opens.
            </p>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="mt-6 w-full border-2 border-foreground bg-background px-4 py-4 font-mono text-base focus:border-neon focus:outline-none"
              autoFocus
            />
            <button className="glitch mt-4 w-full border-2 border-neon bg-neon py-4 font-mono text-sm font-bold uppercase tracking-widest text-neon-foreground transition-colors hover:bg-background hover:text-neon">
              Lock my spot →
            </button>
          </form>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-neon">
              ✓ CONFIRMED · {email || "anonymous@void.01"}
            </div>
            <h3 className="mt-3 font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
              You are in the queue<span className="text-neon">.</span>
            </h3>
            <div className="mt-2 font-display text-5xl font-black tabular-nums text-neon sm:text-6xl">
              #{(position - refs * 47).toLocaleString()}
            </div>

            {/* Referral link */}
            <div className="mt-6 border-2 border-border bg-background">
              <div className="border-b border-border px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                YOUR REFERRAL LINK
              </div>
              <div className="flex items-center">
                <code className="flex-1 truncate px-4 py-3 font-mono text-sm text-foreground">{link}</code>
                <button
                  onClick={copy}
                  className="border-l border-border bg-secondary px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-neon hover:text-neon-foreground"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            {/* Simulate */}
            <div className="mt-4 flex items-center justify-between border border-dashed border-border bg-background/60 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>SIMULATE FRIEND SIGNUPS</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setRefs((r) => Math.max(0, r - 1))} className="border border-border px-2 py-0.5 hover:border-neon hover:text-neon">−</button>
                <span className="tabular-nums text-foreground">{refs}</span>
                <button onClick={() => setRefs((r) => Math.min(99, r + 1))} className="border border-border px-2 py-0.5 hover:border-neon hover:text-neon">+</button>
              </div>
            </div>

            {/* Tier tracker */}
            <div className="mt-5">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>MILESTONE TRACKER</span>
                {nextTier && <span>NEXT: {nextTier.count - refs} TO {nextTier.label.toUpperCase()}</span>}
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden border border-border bg-background">
                <div className="h-full bg-neon transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>

              <ul className="mt-5 space-y-2">
                {TIERS.map((t) => {
                  const unlocked = refs >= t.count;
                  return (
                    <li
                      key={t.count}
                      className={`flex items-center gap-3 border px-3 py-2.5 transition-colors ${
                        unlocked ? "border-neon bg-neon/10" : "border-border bg-background/40"
                      }`}
                    >
                      <span className={`grid h-7 w-9 place-items-center border font-mono text-[11px] font-bold ${
                        unlocked ? "border-neon bg-neon text-neon-foreground" : "border-border text-muted-foreground"
                      }`}>
                        {unlocked ? "✓" : t.count}
                      </span>
                      <div className="flex-1">
                        <div className={`font-display text-sm font-bold uppercase ${unlocked ? "text-neon" : "text-foreground"}`}>
                          {t.label}
                        </div>
                        <div className="font-mono text-[11px] text-muted-foreground">{t.desc}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
