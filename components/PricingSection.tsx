"use client";

import Link from "next/link";
import { Check, Zap, TrendingUp, Star, Layers } from "lucide-react";

interface PricingPackage {
  id: string;
  name: string;
  price: string;
  badge?: string;
  icon: JSX.Element;
  features: string[];
}

interface PricingSectionProps {
  compact?: boolean;
}

const packages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "Vanaf € 1.250",
    icon: <Zap size={32} />,
    features: [
      "Professioneel Next.js ontwerp",
      "Razendsnelle laadtijd (1 seconde)",
      "100/100 PageSpeed basisoptimalisatie",
      "3–5 pagina’s (Home, Diensten, Contact)",
      "Mobiel geoptimaliseerd",
      "Basis SEO (titels, meta’s, structuur)",
      "Contactformulier + WhatsApp‑koppeling",
      "Hosting via Vercel inbegrepen",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "Vanaf € 1.950",
    badge: "Meest gekozen",
    icon: <TrendingUp size={32} />,
    features: [
      "Premium Next.js ontwerp (volledig maatwerk)",
      "100/100 PageSpeed optimalisatie",
      "6–10 pagina’s inclusief landingspagina’s",
      "Lokale SEO‑optimalisatie (Rotterdam + regio)",
      "Conversiegericht ontwerp (CTA’s, flow, structuur)",
      "Reactietijd onder 0.2s",
      "Google Analytics + Tag Manager integratie",
      "Blogmodule of nieuwssectie",
      "Extra trust‑elementen (reviews, badges, USP’s)",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "Vanaf € 2.950",
    badge: "Beste waarde",
    icon: <Star size={32} />,
    features: [
      "High‑end Next.js ontwerp (volledig custom)",
      "100/100 PageSpeed + Core Web Vitals optimalisatie",
      "10–20 pagina’s inclusief SEO‑landingspagina’s",
      "Technische SEO + contentstructuur",
      "Conversiepsychologie op elke pagina",
      "Geavanceerde animaties (brutalist stijl)",
      "Integraties (CRM, boekingssysteem, API’s)",
      "Uitgebreide analytics dashboards",
      "Lokale + regionale SEO strategie",
      "Laadtijd onder 0.8s",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Offerte",
    icon: <Layers size={32} />,
    features: [
      "Volledig custom Next.js platform",
      "Complexe integraties (API’s, CRM, systemen)",
      "Webapplicaties, dashboards, portals",
      "SEO‑strategie op maat",
      "Conversie‑optimalisatie op maat",
      "Projectplanning + consultancy",
      "Doorlopende ondersteuning",
    ],
  },
];

export default function PricingSection({ compact = false }: PricingSectionProps) {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {!compact && (
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // Pakketten
            </p>
            <h2 className="font-heading font-black uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              Kies een pakket dat<br />past bij jouw onderneming.
            </h2>
            <p className="mt-4 text-lg text-[#525252] max-w-2xl">
              Van snelle starters tot high‑end maatwerk — altijd razendsnel, SEO‑technisch sterk en gebouwd voor groei.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-white border-2 border-black p-8 shadow-brutal flex flex-col"
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-4 bg-[#FF4500] text-white font-heading text-xs uppercase px-3 py-1 border-2 border-black">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-6 text-[#FF4500]">{pkg.icon}</div>

              <h3 className="font-heading font-black uppercase text-3xl mb-2">
                {pkg.name}
              </h3>

              <p className="font-heading text-xl mb-6">{pkg.price}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-[#00B050] mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-6 py-3 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                Offerte aanvragen →
              </Link>
            </div>
          ))}
        </div>

        {!compact && (
          <p className="mt-8 text-sm text-[#525252] max-w-2xl">
            Alle prijzen zijn vanaf‑prijzen. Een offerte op maat is altijd mogelijk — stuur een berichtje en we kijken samen wat past.
          </p>
        )}
      </div>
    </section>
  );
}
