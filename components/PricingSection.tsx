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

const packages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    price: "€ 1.950",
    priceIncl: "€ 2.360",
    icon: <Zap size={32} />,
    forWho: "Voor ZZP'ers en starters die direct een serieus online visitekaartje willen.",
    promise: "Een professionele en strakke website — volledig zonder technisch gedoe.",
    features: [
      "Uniek, op maat gemaakt Next.js ontwerp",
      "Razendsnelle mobiele laadtijd (voorkomt afhakers)",
      "3–5 pagina's (Home, Diensten, Contact)",
      "Volledig responsive (perfect op smartphone en tablet)",
      "Technische SEO-basis (optimaal leesbaar voor Google)",
      "Betrouwbaar contactformulier + WhatsApp-koppeling",
      "Veilige premium hosting & SSL inbegrepen",
      "Korte doorlooptijd (binnen 2 weken live)",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "€ 3.495",
    priceIncl: "€ 4.229",
    badge: "Meest gekozen",
    icon: <TrendingUp size={32} />,
    forWho: "Voor MKB-bedrijven die actief nieuwe klanten en leads zoeken via Google.",
    promise: "Een conversiegerichte website die online structureel voor uw bedrijf verkoopt.",
    inheritFrom: "Starter",
    features: [
      "Volledig custom high-end design (geen templates)",
      "6–10 pagina's inclusief specifieke landingspagina's",
      "Lokale SEO-optimalisatie (Rotterdam + regio)",
      "Conversie-psychologie (slimme indeling voor meer leads)",
      "Geïntegreerde blog- of nieuwssectie voor content marketing",
      "Inrichting Google Analytics 4 & Search Console",
      "Extra trust-elementen (klantbeoordelingen & USP's prominent)",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "€ 5.495",
    priceIncl: "€ 6.649",
    badge: "Beste waarde",
    icon: <Star size={32} />,
    forWho: "Voor gevestigde bedrijven die online de absolute top in hun markt willen claimen.",
    promise: "Een krachtig digitaal platform dat naadloos meegroeit met uw zakelijke ambities.",
    inheritFrom: "Professional",
    features: [
      "Exclusief Next.js maatwerkplatform",
      "10–20 pagina's inclusief uitgebreide SEO-locatiepagina's",
      "Diepgaande contentstructuur & geavanceerde SEO-architectuur",
      "Subtiele high-end animaties & premium UX-ontwerp",
      "Slimme koppelingen met uw CRM- of online boekingssysteem",
      "Uitgebreide marketing dashboards om resultaten te meten",
      "Maximale optimalisatie voor de zwaarste Google-richtlijnen",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Vanaf € 7.995",
    priceIncl: "Vanaf € 9.674",
    icon: <Layers size={32} />,
    forWho: "Voor organisaties met complexe systemen, webshops of portaalfuncties.",
    promise: "Een op maat gemaakte webapplicatie die uw bedrijfsprocessen automatiseert.",
    inheritFrom: "Premium",
    features: [
      "Volledig op maat geprogrammeerde webapplicatie of portaal",
      "Complexe API-koppelingen met externe backends & ERP-systemen",
      "Schaalbare webshopfunctionaliteit (iDEAL, Mollie, Stripe)",
      "Volledige consultancy, projectplanning en strategische nazorg",
      "Inclusief 6 maanden uitgebreide support en doorlopende optimalisatie",
    ],
    isCustom: true,
  },
];

export default function PricingSection({ compact = false }: PricingSectionProps) {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {!compact && (
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // Transparante Investeringen
            </p>
            <h2 className="font-heading font-black uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              Kies een pakket dat<br />bij jouw groeidoelen past.
            </h2>
            <p className="mt-4 text-lg text-[#525252] max-w-2xl">
              Vaste prijzen vooraf, zonder verrassingen achteraf. Altijd gebouwd op een bliksemsnel, veilig en optimaal vindbaar fundament.
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
                <div className="absolute -top-3 left-4 font-heading text-xs uppercase px-3 py-1 border-2 border-black bg-[#FF4500] text-white z-20">
                  {pkg.badge}
                </div>
              )}

              <div className="mb-6 text-[#FF4500]">
                {pkg.icon}
              </div>

              <h3
                className={`font-heading font-black uppercase text-3xl mb-2 ${
                  pkg.highlighted ? "text-white" : "text-black"
                }`}
              >
                {pkg.name}
              </h3>

              <div className="mb-5">
                <p
                  className={`font-heading text-xl font-bold ${
                    pkg.highlighted ? "text-[#FF4500]" : "text-black"
                  }`}
                >
                  {pkg.price} <span className="text-sm font-sans font-normal text-gray-500">excl. btw</span>
                </p>
                <p
                  className={`text-xs mt-1 ${
                    pkg.highlighted ? "text-white/60" : "text-[#525252]"
                  }`}
                >
                  ({pkg.priceIncl} incl. 21% btw)
                </p>
              </div>

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
                    pkg.highlighted ? "text-[#FF4500]" : "text-[#525252]"
                  }`}
                >
                  Alles uit {pkg.inheritFrom}, plus:
                </p>
              )}

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-1 shrink-0 ${
                        pkg.highlighted ? "text-[#FF4500]" : "text-[#00B050]"
                      }`}
                    />
                    <span className={pkg.highlighted ? "text-white/90" : "text-[#1a1a1a]"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact?intent=pakket_${pkg.id}`}
                className={`mt-auto inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-wider border-2 px-6 py-3 transition-all text-sm ${
                  pkg.highlighted
                    ? "bg-[#FF4500] text-white border-black hover:bg-white hover:text-black hover:border-black"
                    : "bg-white text-black border-black hover:bg-black hover:text-white"
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
