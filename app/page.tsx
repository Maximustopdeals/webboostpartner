import Link from "next/link"; 
import { ArrowRight, Check } from "lucide-react";

import USPGrid from "@/components/USPGrid";
import Marquee from "@/components/Marquee";
import PageSpeedTool from "@/components/PageSpeedTool";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Website Laten Maken Rotterdam | Conversiegericht & Snel | WebBoost Partner",
  description:
    "Professionele website laten maken in Rotterdam. Binnen 2 seconden laadtijd, optimale lokale SEO en een modern ontwerp dat écht klanten oplevert. Voor ZZP & MKB.",
  keywords: [
    "Website laten maken Rotterdam",
    "Webdesign Rotterdam",
    "Next.js Rotterdam",
    "Next.js webdesign",
    "Next.js developer Rotterdam",
    "snelle website Rotterdam",
    "MKB website Rotterdam",
    "modern webdesign Rotterdam",
  ],
  alternates: {
    canonical: "https://www.webboostpartner.nl/",
  },
  openGraph: {
    title: "Website Laten Maken Rotterdam | WebBoost Partner",
    description:
      "Een professionele website die écht klanten oplevert. Bliksemsnel, technisch perfect geoptimaliseerd voor Google en gebouwd voor groei.",
    url: "https://www.webboostpartner.nl/",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.webboostpartner.nl/#website",
                url: "https://www.webboostpartner.nl/",
                name: "WebBoost Partner",
                description: "Professioneel webdesign en SEO bureau in Rotterdam",
                publisher: {
                  "@id": "https://www.webboostpartner.nl/#organization",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://www.webboostpartner.nl/#webpage",
                url: "https://www.webboostpartner.nl/",
                name: "Website Laten Maken Rotterdam | WebBoost Partner",
                isPartOf: {
                  "@id": "https://www.webboostpartner.nl/#website",
                },
                about: {
                  "@id": "https://www.webboostpartner.nl/#organization",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://www.webboostpartner.nl/#organization",
                name: "WebBoost Partner",
                url: "https://www.webboostpartner.nl/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.webboostpartner.nl/logo.png",
                },
                sameAs: ["https://www.linkedin.com/in/ron-webboost"],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Neeltje Griffijnstraat 12",
                  addressLocality: "Rotterdam",
                  postalCode: "3065 KD",
                  addressCountry: "NL",
                },
                telephone: "+31642628242",
                email: "info@webboostpartner.nl",
              },
            ],
          }),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#FAFAFA] border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] border-[20px] border-black rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1 mb-6">
              <span className="w-2 h-2 bg-[#FF4500] rounded-full" />
              <span className="font-mono text-xs uppercase tracking-widest">
                Webdesign & SEO Rotterdam
              </span>
            </div>

            <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl max-w-none">
              Een professionele website die écht <span className="text-[#FF4500]">klanten oplevert</span>.
            </h1>

            <p className="mt-6 text-xl max-w-2xl text-[#1a1a1a] leading-relaxed font-semibold">
              Geen ingewikkeld technisch jargon of loze beloftes. Wel een bliksemsnelle website die jouw vakmanschap laat zien, optimaal vindbaar is in Google en bezoekers omzet in betalende klanten.
            </p>

            <p className="mt-4 text-sm text-[#525252]">
              WordPress heeft het internet groot gemaakt en drijft miljoenen prachtige sites aan. Met moderne Next.js technologie bouwen we daarop voort en maken we jouw website klaar voor de absolute toekomst.
            </p>

            <ul className="mt-6 text-sm font-mono uppercase tracking-wider text-[#1a1a1a] space-y-2">
              <li className="flex items-center gap-2"><Check size={16} className="text-[#FF4500]" /> Vaste all-in prijs vooraf, geen verrassingen</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#FF4500]" /> Persoonlijk contact in de regio Rotterdam</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[#FF4500]" /> Volledig geoptimaliseerd voor groei en conversie</li>
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 flex-wrap">
              <Link
                href="/contact?intent=quickscan"
                className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                Vraag gratis adviesgesprek aan <ArrowRight size={18} />
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
                Direct meer resultaat <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* PAGE SPEED INSIGHTS RETRO CARD */}
          <div className="lg:col-span-4">
            <div className="relative max-w-sm ml-auto">
              <div
                className="bg-white border-2 border-black shadow-brutal p-6"
                style={{ willChange: "auto" }}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">
                  Google PageSpeed Insights
                </p>

                <div className="flex items-end gap-3 mb-4">
                  <span className="font-heading font-black text-7xl leading-none text-[#FF4500]">95+</span>
                  <span className="text-[#525252] font-mono text-sm mb-2">/100</span>
                </div>

                <div className="space-y-2 text-xs font-mono border-t-2 border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-[#525252]">Laadtijd mobiel</span>
                    <span className="font-bold text-green-600">0.6s (Uitstekend)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#525252]">Google Indexering</span>
                    <span className="font-bold text-green-600">100% Optimaal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#525252]">Gebruikerservaring</span>
                    <span className="font-bold text-green-600">Core Web Vitals Proof</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERIGE IMPORTS EN SECTIES */}
      <Marquee />
      <USPGrid />
      <PageSpeedTool />
      <PricingSection />
      <CTASection />
    </>
  );
}
