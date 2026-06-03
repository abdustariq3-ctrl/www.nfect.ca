// Next bi-annual drop ~6 months out
export const DROP_DATE = new Date("2026-12-01T20:00:00Z");

export function getCountdown(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { months, days, hours, minutes, seconds };
}
