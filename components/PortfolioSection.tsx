"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, MonitorPlay, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  url: string;
  tagline: string;
  resultMetric: string;
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  isDemo?: boolean;
}

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      name: "Marley's Kraamzorg",
      url: "https://www.marleyskraamzorg.nl",
      tagline: "Volledig maatwerkplatform met een warme, betrouwbare branding en intuïtieve aanmeldingsflow.",
      resultMetric: "Laadtijd 0.6s · Direct online aanmeldingen",
      image: "/images/portfolio/marleyskraamzorg-hero.jpg",
      testimonial: {
        quote: "Ik ben ontzettend blij met mijn nieuwe website. Het geeft precies de warme, persoonlijke uitstraling die ik wilde. Klanten vinden mij nu veel makkelijker online en de site voelt echt als een verlengstuk van mijn praktijk.",
        author: "Lisa",
        role: "Oprichter, Marley's Kraamzorg",
      },
    },
    {
      name: "DTG Cleaning",
      url: "https://dtgcleaning.nl",
      tagline: "Razendsnel lokaal SEO-platform ingericht op directe offerte-aanvragen in de schoonmaakbranche.",
      resultMetric: "Top 3 posities · Stijging in online aanvragen",
      image: "/images/portfolio/dtg-cleaning.jpg",
      testimonial: {
        quote: "De nieuwe website is een enorme sprong vooruit. Hij laadt razendsnel en ziet er professioneel uit. Ik krijg nu veel meer aanvragen via de site.",
        author: "Dominique",
        role: "Eigenaar, D.T.G. Cleaning",
      },
    },
    {
      name: "Autorijschool Valberg",
      url: "https://autorijschoolvalberg.nl",
      tagline: "Conversiegerichte landingspagina's met slimme call-to-actions voor een constante stroom nieuwe leerlingen.",
      resultMetric: "5-Sterren UX · Flink meer lesaanmeldingen",
      image: "/images/portfolio/valberg.jpg",
      testimonial: {
        quote: "De website is modern, overzichtelijk en trekt precies de juiste doelgroep aan. Het aantal aanmeldingen via de site is flink gestegen.",
        author: "Roy",
        role: "Eigenaar, Autorijschool Valberg",
      },
    },
    {
      name: "Luxe Webshop",
      url: "https://luxe-webshop.vercel.app",
      tagline: "High-end, ultrasnel e-commerce platform met maatwerk design en vlekkeloze betaalintegraties.",
      resultMetric: "Headless Commerce Showcase",
      image: "/images/portfolio/luxe-webshop.jpg",
      isDemo: true,
    },
    {
      name: "Inas Kraamzorg",
      url: "https://inaskraamzorg.nl",
      tagline: "Zorgplatform met meertalige ondersteuning en een uiterst toegankelijke mobiele structuur.",
      resultMetric: "100% Core Web Vitals score",
      image: "/images/portfolio/inas.jpg",
      testimonial: {
        quote: "De website straalt precies de warmte en professionaliteit uit die bij mijn praktijk past. Ik merk dat aanstaande ouders mij nu makkelijker weten te vinden.",
        author: "Fatima",
        role: "Oprichter, Inas Kraamzorg",
      },
    },
    {
      name: "Cindy's Kraamzorg",
      url: "https://cindyskraamzorg.nl",
      tagline: "WordPress migratie naar Next.js. Volledige modernisering en eliminatie van plugin-onderhoud.",
      resultMetric: "Hostingkosten verlaagd · 3x snellere laadtijd",
      image: "/images/portfolio/cindys-kraamzorg.jpg",
      testimonial: {
        quote: "De nieuwe website is zoveel sneller en professioneler. En ik bespaar nu maandelijks op mijn hostingkosten. Maar wat ik het fijnste vind: de site voelt weer als mij.",
        author: "Cindy",
        role: "Eigenaar, Cindy's Kraamzorg",
      },
    },
  ];

  return (
    <section className="bg-white border-y-2 border-black py-20 sm:py-28 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* HEADER */}
        <div className="mb-12 max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-accessible mb-3">
            // Bewezen Resultaten
          </p>
          <h2 className="font-heading font-black uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] mb-4 text-[#1a1a1a]">
            Websites die voor je werken.
          </h2>
          <p className="text-lg text-[#4a4a48] leading-relaxed max-w-3xl font-medium">
            Geen theoretische verhalen, maar tastbaar rendement. Ontdek een
            selectie van maatwerk projecten die we volledig hebben
            geoptimaliseerd voor snelheid, lokale SEO en maximale leadgeneratie.
          </p>
        </div>

        {/* RETRO MARQUEE */}
        <div className="overflow-hidden border-2 border-black bg-[#FAFAFA] py-4 mb-16 shadow-[2px_2px_0px_0px_#1A1A19]">
          <div className="flex animate-marquee-portfolio whitespace-nowrap gap-16 px-4">
            {projects.map((p) => (
              <span
                key={p.name}
                className="font-heading font-black uppercase text-base sm:text-lg tracking-wider flex items-center gap-2 text-black"
              >
                <Sparkles size={16} className="text-[#FF4500]" />
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* WORK GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <div
              key={p.name}
              className="relative border-2 border-black bg-white shadow-[4px_4px_0px_0px_#1A1A19] flex flex-col group overflow-hidden"
            >
              {p.isDemo && (
                <span className="absolute top-4 right-4 z-20 bg-black text-white font-mono text-[9px] uppercase tracking-widest px-2 py-1 border-2 border-white">
                  Concept Showcase
                </span>
              )}

              {/* AFBEELDING CONTAINER */}
              <div className="relative w-full h-52 border-b-2 border-black bg-[#F5F5F3] p-4 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={p.image}
                    alt={`Screenshot van ${p.name}`}
                    fill
                    className="object-contain object-top group-hover:scale-102 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading font-black uppercase text-xl text-black">
                    {p.name}
                  </h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* ✅ FIX: text-gray-500 -> text-gray-600 voor contrast */
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-gray-600 hover:text-orange-accessible transition-colors"
                  >
                    Live site <ExternalLink size={12} />
                  </a>
                </div>

                {/* METRIC BADGE */}
                <p className="font-mono text-[11px] uppercase tracking-wider text-orange-accessible font-bold mb-3">
                  🚀 {p.resultMetric}
                </p>

                <p className="text-sm text-[#4a4a48] leading-relaxed mb-6 font-medium">
                  {p.tagline}
                </p>

                {/* TESTIMONIAL AREA */}
                {p.testimonial && (
                  <blockquote className="border-l-2 border-[#FF4500] pl-4 mb-6 italic text-xs text-gray-600 bg-[#FFE5DA]/20 py-2 pr-2">
                    <p className="mb-2">
                      &ldquo;{p.testimonial.quote}&rdquo;
                    </p>
                    <footer className="font-mono text-[10px] uppercase tracking-wider not-italic text-black font-bold">
                      — {p.testimonial.author}, {p.testimonial.role}
                    </footer>
                  </blockquote>
                )}

                {/* PRIMARY ACTION */}
                <Link
                  href="/contact?intent=quickscan"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-[#FF4500] text-black font-heading font-bold uppercase text-xs tracking-wider border-2 border-black py-3 hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_#1A1A19]"
                >
                  Ontdek Jouw Kansen <MonitorPlay size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM GLOBAL CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact?intent=quickscan"
            className="inline-flex items-center gap-2 bg-black text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-[#FF4500] hover:text-black hover:border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1A1A19] transition-all text-sm"
          >
            Wil jij ook structureel meer online resultaat?{" "}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes marquee-portfolio {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-portfolio {
          animation: marquee-portfolio 22s linear infinite;
        }
      `}</style>
    </section>
  );
}
