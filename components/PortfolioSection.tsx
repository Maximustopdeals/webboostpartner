"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Quote } from "lucide-react";

interface Project {
  name: string;
  url: string;
  tagline: string;
  isDemo?: boolean;
}

export default function PortfolioSection() {
  const projects: Project[] = [
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
      name: "Cindy's Kraamzorg",
      url: "https://cindyskraamzorg.nl",
      tagline: "Kraamzorg — van WordPress naar Next.js, lagere hostingkosten",
    },
    {
      name: "Luxe Webshop",
      url: "https://luxe-webshop.vercel.app",
      tagline: "Showcase — high-end webshop met maatwerk design en schaalbare structuur",
      isDemo: true,
    },
  ];

  return (
    <section className="bg-white border-y-2 border-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* HEADER */}
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
            // Recent werk
          </p>
          <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] mb-4">
            Websites die wij<br />realiseerden.
          </h2>
          <p className="text-lg text-[#525252] leading-relaxed">
            Een selectie van recente projecten. Van lokale dienstverleners tot 
            high-end webshops — allemaal gebouwd met Next.js en geoptimaliseerd 
            voor snelheid, SEO en conversie.
          </p>
        </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <div
              key={p.name}
              className="relative border-2 border-black p-6 bg-[#FAFAFA] shadow-brutal flex flex-col"
            >
              {p.isDemo && (
                <span className="absolute -top-3 -right-3 bg-[#FF4500] text-white font-mono text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-black">
                  Showcase
                </span>
              )}

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

        {/* TESTIMONIAL BLOK - CINDY'S KRAAMZORG */}
        <div className="mt-20 border-2 border-black bg-[#FAFAFA] p-8 sm:p-12 shadow-brutal relative">
          <Quote size={40} className="text-[#FF4500] mb-6" />
          
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-8">
            "Ik vond het spannend om mijn website te laten vernieuwen, maar WebBoost Partner heeft me echt ontzorgd. 
            De nieuwe website is zoveel sneller en professioneler dan mijn oude WordPress-site. 
            Wat ik vooral fijn vond, is dat mijn e-mail gewoon bij Cloud86 bleef werken. 
            Bovendien zijn mijn maandelijkse hostingkosten nu een stuk lager, omdat ik alleen nog maar 
            mijn e-mailpakket nodig heb. Een absolute aanrader!"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-heading font-black uppercase text-lg tracking-tight">
                Cindy
              </p>
              <p className="text-sm text-[#525252] font-mono uppercase tracking-wider">
                Eigenaar, Cindy's Kraamzorg
              </p>
            </div>
            <Link
              href="https://cindyskraamzorg.nl"
              target="_blank"
              className="inline-flex items-center gap-2 bg-black text-white font-heading uppercase text-sm tracking-wider border-2 border-black px-6 py-3 hover:bg-[#FF4500] hover:border-[#FF4500] transition-all"
            >
              Bekijk website <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
          >
            Uw website als volgende? <Globe size={18} />
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
