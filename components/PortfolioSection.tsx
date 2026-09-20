"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Globe } from "lucide-react";

interface Project {
  name: string;
  url: string;
  tagline: string;
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
      tagline: "Kraamzorg — persoonlijke website met 1 vast gezicht",
      image: "/images/portfolio/marleyskraamzorg.jpg",
      testimonial: {
        quote:
          "Ik ben ontzettend blij met mijn nieuwe website. Het geeft precies de warme, persoonlijke uitstraling die ik wilde. Klanten vinden mij nu veel makkelijker online en de site voelt echt als een verlengstuk van mijn praktijk.",
        author: "Lisa",
        role: "Oprichter, Marley's Kraamzorg",
      },
    },
    {
      name: "DTG Cleaning",
      url: "https://dtgcleaning.nl",
      tagline: "Schoonmaakbedrijf — razendsnelle lokale SEO website",
      image: "/images/portfolio/dtg-cleaning.jpg",
      testimonial: {
        quote:
          "De nieuwe website is een enorme sprong vooruit. Hij laadt razendsnel en ziet er professioneel uit. Ik krijg nu veel meer aanvragen via de site.",
        author: "Dominique",
        role: "Eigenaar, DTG Cleaning",
      },
    },
    {
      name: "Autorijschool Valberg",
      url: "https://autorijschoolvalberg.nl",
      tagline: "Rijschool — conversiegerichte website met landingspagina’s",
      image: "/images/portfolio/valberg.jpg",
      testimonial: {
        quote:
          "De website is modern, overzichtelijk en trekt precies de juiste doelgroep aan. Het aantal aanmeldingen via de site is flink gestegen.",
        author: "Roy",
        role: "Eigenaar, Autorijschool Valberg",
      },
    },
    {
      name: "Inas Kraamzorg",
      url: "https://inaskraamzorg.nl",
      tagline: "Zorgsector — warme branding + snelle Next.js performance",
      image: "/images/portfolio/inas.jpg",
      testimonial: {
        quote:
          "De website straalt precies de warmte en professionaliteit uit die bij mijn praktijk past. Ik merk dat aanstaande ouders mij nu makkelijker weten te vinden en zich meteen op hun gemak voelen als ze de site openen.",
        author: "Fatima",
        role: "Oprichter, Inas Kraamzorg",
      },
    },
    {
      name: "Cindy's Kraamzorg",
      url: "https://cindyskraamzorg.nl",
      tagline: "Kraamzorg — van WordPress naar Next.js, lagere hostingkosten",
      image: "/images/portfolio/cindys-kraamzorg.jpg",
      testimonial: {
        quote:
          "De nieuwe website is zoveel sneller en professioneler. En ik bespaar nu maandelijks op mijn hostingkosten. Maar wat ik het fijnste vind: de site voelt weer als mij. Klanten zeggen dat ze precies zien wie ik ben voordat ze mij bellen.",
        author: "Cindy",
        role: "Eigenaar, Cindy's Kraamzorg",
      },
    },
    {
      name: "Luxe Webshop",
      url: "https://luxe-webshop.vercel.app",
      tagline: "Showcase — high-end webshop met maatwerk design",
      image: "/images/portfolio/luxe-webshop.jpg",
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
              className="relative border-2 border-black bg-[#FAFAFA] shadow-brutal flex flex-col group overflow-hidden"
            >
              {p.isDemo && (
                <span className="absolute top-4 right-4 z-20 bg-[#FF4500] text-white font-mono text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-black">
                  Showcase
                </span>
              )}

              {/* AFBEELDING BLOK */}
              <div className="relative w-full h-56 border-b-2 border-black overflow-hidden bg-gray-100">
                <Image
                  src={p.image}
                  alt={`Screenshot van ${p.name}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* TEKST BLOK */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-black uppercase text-2xl mb-2">
                  {p.name}
                </h3>

                <p className="text-sm text-[#525252] mb-6">{p.tagline}</p>

                {/* TESTIMONIAL */}
                {p.testimonial && (
                  <blockquote className="border-l-4 border-[#FF4500] pl-4 mb-6 italic text-sm text-[#525252]">
                    <p className="mb-2">
                      &ldquo;{p.testimonial.quote}&rdquo;
                    </p>
                    <footer className="font-mono text-xs uppercase tracking-wider not-italic text-[#0A0A0A]">
                      — {p.testimonial.author}, {p.testimonial.role}
                    </footer>
                  </blockquote>
                )}

                <Link
                  href={p.url}
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading uppercase text-sm tracking-wider border-2 border-black px-4 py-3 hover:bg-black hover:border-black transition-all"
                >
                  Bekijk website <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
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
