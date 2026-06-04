import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/storefront/Header";
import { Marquee } from "@/components/storefront/Marquee";
import { Hero } from "@/components/storefront/Hero";
import { Countdown } from "@/components/storefront/Countdown";
import { LockedCatalog } from "@/components/storefront/LockedCatalog";
import { Community } from "@/components/storefront/Community";
import { Footer } from "@/components/storefront/Footer";
import { WaitlistModal } from "@/components/storefront/WaitlistModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NFECT — Drop 01 // Overcrowded Suburbs" },
      { name: "description", content: "Bi-annual streetwear ritual. 400 pieces. No restock. Join the queue for Drop 01." },
      { property: "og:title", content: "NFECT — Drop 01" },
      { property: "og:description", content: "Bi-annual streetwear ritual. 400 pieces. No restock." },
    ],
  }),
  component: Index,
});

function Index() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const submitHero = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onJoin={() => setOpen(true)} />
      <Marquee />
      <Hero email={email} setEmail={setEmail} onSubmit={submitHero} />
      <Countdown />
      <LockedCatalog onUnlock={() => setOpen(true)} />
      <Community />
      <Marquee />
      <Footer />
      <WaitlistModal open={open} onClose={() => setOpen(false)} email={email} setEmail={setEmail} />
    </div>
  );
}
