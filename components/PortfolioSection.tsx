"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      name: "DTG Cleaning",
      url: "https://dtgcleaning.nl",
      tagline: "Schoonmaakbedrijf — razendsnelle lokale SEO website",
    },
    {
      name: "Autorijschool Valberg",
      url: "https://autorijschoolvalberg.nl",
      tagline: "Rijschool — conversiegerichte website met landingspagina’s",
    },
    {
      name: "Inas Kraamzorg",
      url: "https://inaskraamzorg.nl",
      tagline: "Zorgsector — warme branding + snelle Next.js performance",
    },
    {
      name: "Luxe Webshop",
      url: "#",
      tagline: "High‑end webshop — maatwerk design + schaalbare structuur",
    },
  ];

  return (
    <section className="bg-white border-y-2 border-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* MARQUEE */}
        <div className="overflow-hidden border-2 border-black bg-[#FAFAFA] py-4 mb-16">
          <div className="flex animate-marquee whitespace-nowrap gap-16 px-4">
            {projects.map((p) => (
              <span
                key={p.name}
                className="font-heading uppercase text-xl tracking-wider flex items-center gap-2"
              >
                <Sparkles size={18} className="text-[#FF4500]" />
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((p) => (
            <div
              key={p.name}
              className="border-2 border-black p-6 bg-[#FAFAFA] shadow-brutal flex flex-col"
            >
              <h3 className="font-heading font-black uppercase text-2xl mb-2">
                {p.name}
              </h3>

              <p className="text-sm text-[#525252] mb-6">{p.tagline}</p>

              <Link
                href={p.url}
                target="_blank"
                className="mt-auto inline-flex items-center gap-2 bg-black text-white font-heading uppercase text-sm tracking-wider border-2 border-black px-4 py-3 hover:bg-[#FF4500] hover:border-[#FF4500] transition-all"
              >
                Bekijk website <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
          >
            Ook zo’n website? <Globe size={18} />
          </Link>
        </div>
      </div>

      {/* MARQUEE ANIMATION */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
