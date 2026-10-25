import React from "react";
import { Gauge, Search, MapPin, Handshake, ShieldCheck, TrendingUp } from "lucide-react";

interface USPItem {
  icon: React.ComponentType<{ size: number; strokeWidth?: number; className?: string }>;
  title: string;
  desc: string;
  metric?: string;
}

const items: USPItem[] = [
  {
    icon: Gauge,
    title: "Bliksemsnelle laadtijd",
    desc: "Pagina's laden in minder dan een seconde. Dit voorkomt mobiele afhakers en zorgt direct voor een hogere conversie.",
    metric: "< 0.6s Mobiel",
  },
  {
    icon: Search,
    title: "Optimale SEO-architectuur",
    desc: "Geavanceerde semantische HTML en gestructureerde data direct ingebouwd. Jouw website is direct Google-proof.",
    metric: "100/100 Core SEO",
  },
  {
    icon: TrendingUp,
    title: "Conversiegericht ontwerp",
    desc: "Elke pixel en knop staat in het teken van het overtuigen van jouw bezoeker om direct een aanvraag te doen.",
    metric: "Focus op ROI",
  },
  {
    icon: MapPin,
    title: "Persoonlijk & Lokaal",
    desc: "Korte lijnen en direct contact in de regio Rotterdam. Geen anonieme projectteams, maar sparren met Ron.",
  },
  {
    icon: Handshake,
    title: "Transparante prijs vooraf",
    desc: "Duidelijke all-in tarieven zonder onverwachte kosten achteraf. Eerlijke communicatie zonder ingewikkeld IT-jargon.",
  },
  {
    icon: ShieldCheck,
    title: "Onderhoudsarm & Veilig",
    desc: "Geen wekelijkse stress om kwetsbare plug-in-updates of database-crashes. Een stabiel fundament dat altijd online blijft.",
  },
];

export default function USPGrid() {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 border-t-2 border-black" data-testid="usp-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-3xl mb-14">
          {/* ✅ KLEINE TEKST: blijft text-orange-accessible */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-accessible mb-3">
            // Jouw Digitale Voorsprong
          </p>
          <h2 className="font-heading font-black uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] text-black">
            Geen ingewikkeld gedoe.<br />
            {/* ✅ GROTE KOP: text-[#FF4500] */}
            Wel <span className="text-[#FF4500]">online resultaat</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it: USPItem, i: number) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="border-2 border-black bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1A1A19]"
                data-testid={`usp-card-${i}`}
              >
                <div className="w-11 h-11 grid place-items-center border-2 border-black bg-[#FF4500] text-black mb-5 shadow-[2px_2px_0px_0px_#1A1A19]">
                  <Icon size={20} strokeWidth={2.5} />
                </div>

                {it.metric && (
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-1.5 text-orange-accessible font-bold">
                    {it.metric}
                  </p>
                )}

                <h3 className="font-heading font-black uppercase text-lg tracking-tight mb-2 text-black">
                  {it.title}
                </h3>
                
                <p className="text-sm text-[#4a4a48] leading-relaxed font-medium">
                  {it.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
