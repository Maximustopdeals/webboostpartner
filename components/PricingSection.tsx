"use client";

import React from "react";
import Link from "next/link";
import { Check, Zap, TrendingUp, Star, Layers, ArrowRight } from "lucide-react";

interface PricingPackage {
  id: string;
  name: string;
  price: string;
  badge?: string;
  icon: React.ReactNode;
  forWho: string;
  promise: string;
  inheritFrom?: string;
  features: string[];
  highlighted?: boolean;
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
    forWho: "Voor ZZP'ers en starters die serieus online willen.",
    promise: "Een professionele website die werkt — zonder gedoe.",
    features: [
      "Professioneel Next.js ontwerp",
      "Razendsnelle laadtijd (onder 2 seconden)",
      "95+ PageSpeed",
      "3–5 pagina's (Home, Diensten, Contact)",
      "Mobiel geoptimaliseerd",
      "Basis SEO (titels, meta's, structuur)",
      "Contactformulier + WhatsApp-koppeling",
      "Hosting via Vercel inbegrepen",
      "Klaar binnen 2 weken",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "Vanaf € 1.950",
    badge: "Meest gekozen",
    icon: <TrendingUp size={32} />,
    forWho: "Voor MKB-bedrijven die klanten zoeken via Google.",
    promise: "Een website die niet alleen mooi is — maar klanten oplevert.",
    inheritFrom: "Starter",
    features: [
      "Premium Next.js ontwerp (volledig maatwerk)",
      "6–10 pagina's inclusief landingspagina's",
      "Lokale SEO (Rotterdam + regio)",
      "Conversiegericht ontwerp (CTA's, flow, structuur)",
      "Reactietijd onder 0,2s",
      "Google Analytics 4 + Tag Manager",
      "Blogmodule of nieuwssectie",
      "Extra trust-elementen (reviews, badges, USP's)",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "Vanaf € 2.950",
    badge: "Beste waarde",
    icon: <Star size={32} />,
    forWho: "Voor bedrijven die online structureel willen groeien.",
    promise: "Een digitaal fundament dat meegroeit met uw ambitie.",
    inheritFrom: "Professional",
    features: [
      "High-end Next.js ontwerp (volledig custom)",
      "10–20 pagina's inclusief SEO-landingspagina's",
      "Technische SEO + contentstructuur",
      "Conversiepsychologie op elke pagina",
      "Geavanceerde animaties (brutalist stijl)",
      "Integraties (CRM, boekingssysteem, API's)",
      "Uitgebreide analytics dashboards",
      "Lokale + regionale SEO-strategie",
      "Laadtijd onder 1 seconde",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Offerte",
    icon: <Layers size={32} />,
    forWho: "Voor organisaties met complexe digitale behoeften.",
    promise: "Een digitaal platform dat uw processen ondersteunt.",
    inheritFrom: "Premium",
    features: [
      "Volledig custom Next.js platform",
      "Complexe integraties (API's, CRM, systemen)",
      "Webapplicaties, dashboards, portals",
      "SEO-strategie op maat",
      "Conversie-optimalisatie op maat",
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
              Kies een pakket dat<br />bij u past.
            </h2>
            <p className="mt-4 text-lg text-[#525252] max-w-2xl">
              Van snelle starters tot high-end maatwerk. Altijd razendsnel, 
              SEO-technisch sterk en gebouwd voor groei.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative border-2 border-black p-8 flex flex-col transition-all ${
                pkg.highlighted
                  ? "bg-black text-white shadow-brutal-orange lg:-translate-y-2"
                  : "bg-white shadow-brutal"
              }`}
            >
              {pkg.badge && (
                <div
                  className={`absolute -top-3 left-4 font-heading text-xs uppercase px-3 py-1 border-2 border-black ${
                    pkg.highlighted
                      ? "bg-[#FF4500] text-white"
                      : "bg-[#FF4500] text-white"
                  }`}
                >
                  {pkg.badge}
                </div>
              )}

              <div
                className={`mb-6 ${
                  pkg.highlighted ? "text-[#FF4500]" : "text-[#FF4500]"
                }`}
              >
                {pkg.icon}
              </div>

              <h3
                className={`font-heading font-black uppercase text-3xl mb-2 ${
                  pkg.highlighted ? "text-white" : ""
                }`}
              >
                {pkg.name}
              </h3>

              <p
                className={`font-heading text-xl mb-5 ${
                  pkg.highlighted ? "text-[#FF4500]" : "text-black"
                }`}
              >
                {pkg.price}
              </p>

              {/* Voor wie */}
              <p
                className={`text-sm leading-relaxed mb-3 ${
                  pkg.highlighted ? "text-white/70" : "text-[#525252]"
                }`}
              >
                {pkg.forWho}
              </p>

              {/* Belofte */}
              <p
                className={`text-sm font-semibold leading-relaxed mb-6 pb-6 border-b-2 ${
                  pkg.highlighted
                    ? "text-white border-white/20"
                    : "text-black border-black/10"
                }`}
              >
                {pkg.promise}
              </p>

              {/* Inheritance label */}
              {pkg.inheritFrom && (
                <p
                  className={`font-mono text-xs uppercase tracking-wider mb-3 ${
                    pkg.highlighted ? "text-white/60" : "text-[#525252]"
                  }`}
                >
                  Alles uit {pkg.inheritFrom}, plus:
                </p>
              )}

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-1 shrink-0 ${
                        pkg.highlighted ? "text-[#FF4500]" : "text-[#00B050]"
                      }`}
                    />
                    <span className={pkg.highlighted ? "text-white" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-auto inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-wider border-2 px-6 py-3 transition-all ${
                  pkg.highlighted
                    ? "bg-[#FF4500] text-white border-[#FF4500] hover:bg-white hover:text-black hover:border-white"
                    : "bg-[#FF4500] text-white border-black hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm"
                }`}
              >
                Offerte aanvragen <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {!compact && (
          <p className="mt-8 text-sm text-[#525252] max-w-2xl">
            Alle prijzen zijn vanaf-prijzen en exclusief btw. Een offerte op maat is 
            altijd mogelijk — stuur een bericht en we kijken samen wat past.
          </p>
        )}
      </div>
    </section>
  );
}
