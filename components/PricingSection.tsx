"use client";

import React from "react";
import Link from "next/link";
import { Check, Zap, TrendingUp, Star, Layers, ArrowRight } from "lucide-react";

interface PricingPackage {
  id: string;
  name: string;
  price: string;
  priceIncl: string;
  badge?: string;
  icon: React.ReactNode;
  forWho: string;
  promise: string;
  inheritFrom?: string;
  features: string[];
  highlighted?: boolean;
  isCustom?: boolean;
}

interface PricingSectionProps {
  compact?: boolean;
}

// ✅ HIER IS JOUW DATA WEER INGEVULD
const packages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "€1.950",
    priceIncl: "€2.359,50",
    icon: <Zap size={32} strokeWidth={1.5} />,
    forWho: "Voor ZZP'ers en starters die een professioneel online visitekaartje willen.",
    promise: "Snel, strak en klaar om leads te ontvangen.",
    features: [
      "3 tot 5 pagina's",
      "Maatwerk Next.js design",
      "95+ PageSpeed score",
      "Technische SEO basis",
      "Contactformulier",
      "Google Analytics 4 setup"
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "€3.495",
    priceIncl: "€4.228,95",
    badge: "Meest gekozen",
    icon: <TrendingUp size={32} strokeWidth={1.5} />,
    forWho: "Voor MKB-ondernemers die via Google actief leads en aanvragen willen genereren.",
    promise: "Het perfecte fundament voor online groei en lokale vindbaarheid.",
    inheritFrom: "Starter",
    highlighted: true,
    features: [
      "Tot 10 pagina's",
      "Strategische landingspagina's",
      "Lokale SEO Rotterdam",
      "Blog / nieuwsmodule",
      "Uitgebreide conversie-optimalisatie",
      "WhatsApp-integratie"
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "€5.495",
    priceIncl: "€6.648,95",
    icon: <Star size={32} strokeWidth={1.5} />,
    forWho: "Voor gevestigde bedrijven die online de absolute top in hun branche willen claimen.",
    promise: "High-end maatwerk met diepgaande conversiepsychologie.",
    inheritFrom: "Professional",
    features: [
      "10 tot 20 pagina's",
      "Volledig custom platform",
      "Diepgaande conversiepsychologie",
      "Vloeiende animaties",
      "CRM / boekingssysteem integraties",
      "Uitgebreide SEO-strategie"
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "€7.995+",
    priceIncl: "Op aanvraag",
    icon: <Layers size={32} strokeWidth={1.5} />,
    forWho: "Voor organisaties met complexe digitale processen, grotere webshops of dashboards.",
    promise: "Onbeperkte schaalbaarheid en volledige integratie met jouw systemen.",
    inheritFrom: "Premium",
    isCustom: true,
    features: [
      "Volledig maatwerk & strategie",
      "Headless CMS koppeling",
      "Webshop / klantomgeving",
      "Complexe API-koppelingen",
      "Uitgebreide nazorg & support",
      "Schaalbaar voor honderden producten"
    ],
  },
];

export default function PricingSection({ compact = false }: PricingSectionProps) {
  return (
    <section className={`py-24 sm:py-32 ${compact ? 'bg-transparent' : 'bg-background-secondary'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {!compact && (
          <div className="max-w-3xl mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-4">
              Transparante Investeringen
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-[1.1] tracking-tight mb-6">
              Kies een pakket dat<br />bij jouw groeidoelen past.
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl font-sans">
              Vaste prijzen vooraf, zonder verrassingen achteraf. Altijd gebouwd op een bliksemsnel, veilig en optimaal vindbaar fundament.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={`pakket-${pkg.id}`}
              className={`relative flex flex-col p-8 rounded-sm transition-all duration-300 scroll-mt-24 ${
                pkg.highlighted
                  ? "bg-foreground text-white shadow-soft lg:-translate-y-4 border border-foreground"
                  : "bg-background border border-border-subtle shadow-sm hover:shadow-soft hover:border-foreground-muted/30"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap z-20">
                  {pkg.badge}
                </div>
              )}

              <div className={`mb-6 ${pkg.highlighted ? "text-brand" : "text-brand"}`}>
                {pkg.icon}
              </div>

              <h3 className={`font-serif text-2xl mb-2 ${pkg.highlighted ? "text-white" : "text-foreground"}`}>
                {pkg.name}
              </h3>

              <div className="mb-5">
                <p className={`font-serif text-4xl tracking-tight ${pkg.highlighted ? "text-white" : "text-foreground"}`}>
                  {pkg.price} <span className="text-sm font-sans font-medium text-foreground-muted">excl. btw</span>
                </p>
                <p className={`text-xs mt-2 font-sans ${pkg.highlighted ? "text-white/60" : "text-foreground-muted"}`}>
                  ({pkg.priceIncl} incl. 21% btw)
                </p>
              </div>

              <p className={`text-sm leading-relaxed mb-4 font-sans ${pkg.highlighted ? "text-white/80" : "text-foreground-muted"}`}>
                {pkg.forWho}
              </p>

              <p className={`text-sm font-medium leading-relaxed mb-6 pb-6 border-b ${pkg.highlighted ? "text-white border-white/20" : "text-foreground border-border-subtle"}`}>
                {pkg.promise}
              </p>

              {pkg.inheritFrom && (
                <p className={`font-sans text-xs uppercase tracking-widest mb-4 font-semibold ${pkg.highlighted ? "text-brand" : "text-foreground-muted"}`}>
                  Alles uit {pkg.inheritFrom}, plus:
                </p>
              )}

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`mt-0.5 shrink-0 ${pkg.highlighted ? "text-brand" : "text-brand"}`}
                    />
                    <span className={`text-sm font-sans leading-snug ${pkg.highlighted ? "text-white/90" : "text-foreground-muted"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact?intent=pakket_${pkg.id}`}
                className={`mt-auto inline-flex items-center justify-center gap-2 font-sans font-medium px-6 py-3.5 rounded-sm transition-colors duration-200 text-sm ${
                  pkg.highlighted
                    ? "bg-brand text-white hover:bg-brand-hover"
                    : "bg-background-secondary text-foreground hover:bg-border-subtle"
                }`}
              >
                Offerte Aanvragen <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
