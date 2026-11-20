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
    <section className="bg-background-secondary py-24 sm:py-32" data-testid="usp-grid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-4">
            Jouw Digitale Voorsprong
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground tracking-tight leading-[1.1]">
            Geen ingewikkeld gedoe.<br />
            Wel <span className="text-brand italic">online resultaat</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it: USPItem, i: number) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="bg-background p-8 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft border border-border-subtle"
                data-testid={`usp-card-${i}`}
              >
                <div className="w-12 h-12 grid place-items-center bg-brand/10 text-brand rounded-full mb-6">
                  <Icon size={24} strokeWidth={2} />
                </div>

                {it.metric && (
                  <p className="font-sans text-xs uppercase tracking-widest mb-2 text-brand font-semibold">
                    {it.metric}
                  </p>
                )}

                <h3 className="font-serif text-xl text-foreground mb-3">
                  {it.title}
                </h3>
                
                <p className="text-foreground-muted font-sans leading-relaxed text-sm">
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
