"use client";

export default function Marquee() {
  const brands = [
    { name: "Nike", color: "#ffffff" },
    { name: "Netflix", color: "#E50914" },
    { name: "TikTok", color: "#00f2ea" },
    { name: "Twitch", color: "#9146FF" },
    { name: "NASA", color: "#ffffff" },
    { name: "Notion", color: "#ffffff" },
  ];

  // Dupliceer de merken voor een vloeiende lus
  const content: string[] = [
    ...brands.map((b) => b.name),
    ...brands.map((b) => b.name),
    ...brands.map((b) => b.name),
  ];

  return (
    <section className="bg-black border-y-2 border-black overflow-hidden py-6 sm:py-8" data-testid="marquee-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center gap-8 sm:gap-12 overflow-hidden">
          <span className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] font-mono shrink-0">
            Vertrouwd door
          </span>
          <div
            className="flex items-center gap-8 sm:gap-12 animate-marquee whitespace-nowrap"
          >
            {content.map((name: string, i: number) => (
              <span
                key={i}
                className="text-white/80 font-bold text-lg sm:text-xl tracking-tight hover:text-white transition-colors duration-300 shrink-0"
                style={{ 
                  color: brands.find(b => b.name === name)?.color || "#ffffff"
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
