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
  // ... (ongewijzigd, laat je data staan)
];

export default function PricingSection({ compact = false }: PricingSectionProps) {
  return (
    <section className="bg-[#FAFAFA] py-20 sm:py-28 border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {!compact && (
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-accessible mb-3">
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
              // ✅ NIEUW: id per pakket voor diepe links + scroll-offset
              id={`pakket-${pkg.id}`}
              className={`relative scroll-mt-24 border-2 border-black p-8 flex flex-col transition-all ${
                pkg.highlighted
                  ? "bg-black text-white shadow-brutal-orange lg:-translate-y-2"
                  : "bg-white shadow-brutal"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-4 font-heading text-xs uppercase px-3 py-1 border-2 border-black bg-[#FF4500] text-black font-bold z-20">
                  {pkg.badge}
                </div>
              )}

              <div className={`mb-6 ${pkg.highlighted ? "text-[#FF6B2B]" : "text-[#FF4500]"}`}>
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
                    pkg.highlighted ? "text-[#FF6B2B]" : "text-black"
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

              <p
                className={`text-sm leading-relaxed mb-3 ${
                  pkg.highlighted ? "text-white/70" : "text-[#525252]"
                }`}
              >
                {pkg.forWho}
              </p>

              <p
                className={`text-sm font-semibold leading-relaxed mb-6 pb-6 border-b-2 ${
                  pkg.highlighted
                    ? "text-white border-white/20"
                    : "text-black border-black/10"
                }`}
              >
                {pkg.promise}
              </p>

              {pkg.inheritFrom && (
                <p
                  className={`font-mono text-xs uppercase tracking-wider mb-3 ${
                    pkg.highlighted ? "text-[#FF6B2B]" : "text-[#525252]"
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
                        pkg.highlighted ? "text-[#FF6B2B]" : "text-[#00B050]"
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
                    ? "bg-[#FF4500] text-black border-black hover:bg-white hover:text-black hover:border-black"
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
