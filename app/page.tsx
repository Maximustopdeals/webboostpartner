import Link from "next/link";
import { ArrowRight } from "lucide-react";

import USPGrid from "@/components/USPGrid";
import Marquee from "@/components/Marquee";
import PageSpeedTool from "@/components/PageSpeedTool";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Website laten maken in Rotterdam | Next.js Specialist | WebBoost Partner",
  description:
    "Razendsnelle Next.js websites in Rotterdam die binnen 2 seconden laden, beter scoren in Google en meer klanten opleveren. Moderne techniek die écht werkt.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#FAFAFA] border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] border-[20px] border-black rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 mb-6">
              <span className="w-2 h-2 bg-[#FF4500] rounded-full" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Next.js website laten maken in Rotterdam
              </span>
            </div>

            <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-[5.5rem] max-w-4xl">
              Next.js websites in <span className="text-[#FF4500]">Rotterdam</span> die scoren.
            </h1>

            <p className="mt-6 text-xl max-w-2xl text-[#1a1a1a] leading-relaxed font-semibold">
              Binnen 2 seconden laadtijd, 95+ PageSpeed en beter gevonden in Google.
              Gebouwd met Next.js — moderne techniek die écht werkt. Meer aanvragen, minder gedoe.
            </p>

            <ul className="mt-4 text-sm font-mono uppercase tracking-wider text-[#525252] space-y-1">
              <li>● Binnen 24 uur reactie</li>
              <li>● Gratis adviesgesprek</li>
              <li>● Geen verplichtingen</li>
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                Plan een gesprek <ArrowRight size={18} />
              </Link>

              <Link
                href="/pakketten"
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                Bekijk pakketten
              </Link>

              <Link
                href="/website-laten-maken-rotterdam"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4500] font-heading font-bold uppercase tracking-wider border-2 border-[#FF4500] px-8 py-4 hover:bg-[#FF4500] hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                Waarom Next.js? <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative max-w-sm ml-auto">
              <div className="bg-white border-2 border-black shadow-brutal p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">
                  PageSpeed Insights
                </p>

                <div className="flex items-end gap-3 mb-3">
                  <span className="font-heading font-black text-7xl leading-none">95+</span>
                  <span className="text-[#525252] font-mono text-sm mb-2">/100</span>
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <div className="flex justify-between">
                    <span>Laadtijd</span>
                    <span className="font-bold">onder 2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stabiliteit</span>
                    <span className="font-bold">Uitstekend</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reactietijd</span>
                    <span className="font-bold">Direct</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t-2 border-black">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00B050]">
                    ● Sneller dan 95% van alle websites
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-[#FF4500] border-2 border-black" />
            </div>
          </div>
        </div>
      </section>

      {/* USP / SPEED / MARQUEE */}
      <Marquee />
      <PageSpeedTool />
      <USPGrid />

      {/* PORTFOLIO VERWIJZING — stuurt naar money page */}
      <section className="bg-white py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // Recent werk
            </p>
            <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              Websites die<br />presteren.
            </h2>
          </div>
          <div className="lg:col-span-7 prose-brutal">
            <p>
              Van lokale dienstverleners tot high-end webshops: wij bouwen websites 
              die snel laden, goed scoren in Google en klanten opleveren. Bekijk 
              onze recente projecten en zie zelf het resultaat.
            </p>
            <Link
              href="/website-laten-maken-rotterdam"
              className="inline-flex items-center gap-2 mt-6 bg-[#FF4500] text-white px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-black transition-colors border-2 border-black hover:-translate-y-1 hover:shadow-brutal-sm"
            >
              Bekijk onze projecten <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WAAROM WEBBOOST PARTNER */}
      <section className="bg-white py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // Waarom WebBoost Partner
            </p>
            <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
              Waarom ondernemers<br />voor ons kiezen.
            </h2>
          </div>

          <div className="lg:col-span-7 prose-brutal">
            <ul className="space-y-4 text-base">
              <li>
                <strong>95+ PageSpeed</strong>
                <span className="text-[#525252]"> Sneller dan 95% van alle websites</span>
              </li>
              <li>
                <strong>Technische SEO inbegrepen</strong>
                <span className="text-[#525252]"> Direct zichtbaar in Google</span>
              </li>
              <li>
                <strong>Maatwerk ontwerp</strong>
                <span className="text-[#525252]"> Geen templates, pure branding</span>
              </li>
              <li>
                <strong>Vaste prijs</strong>
                <span className="text-[#525252]"> Geen verrassingen, geen gedoe</span>
              </li>
            </ul>

            <Link
              href="/website-laten-maken-rotterdam"
              className="inline-flex items-center gap-2 mt-8 bg-[#FF4500] text-white px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-black transition-colors border-2 border-black hover:-translate-y-1 hover:shadow-brutal-sm"
            >
              Bekijk alle voordelen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <PricingSection />
      <CTASection />
    </>
  );
}
