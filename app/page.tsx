import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, ExternalLink, Monitor, Smartphone, Star } from "lucide-react";
import USPGrid from "@/components/USPGrid";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ"; // ✅ NIEUW

export const metadata: Metadata = {
  title: "Webdesign Rotterdam | Website Laten Maken | 95+ PageSpeed | WebBoost Partner",
  description:
    "Webdesign Rotterdam en website laten maken? WebBoost Partner bouwt bliksemsnelle Next.js websites die jouw vakmanschap tonen en bezoekers omzetten in klanten. Vaste prijs, lokaal, SEO inbegrepen.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Webdesign Rotterdam | Website Laten Maken | WebBoost Partner",
    description:
      "Bliksemsnelle Next.js websites in Rotterdam. 95+ PageSpeed, vaste prijs, meer aanvragen.",
    url: "https://www.webboostpartner.nl",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Rotterdam | Website Laten Maken",
    description: "Razendsnelle Next.js websites met 95+ PageSpeed. Lokaal in Rotterdam.",
  },
};

// ✅ NIEUW: FAQ voor homepage (entiteit + commerciële vragen)
interface FAQItem { q: string; a: string }

const faqs: FAQItem[] = [
  {
    q: "Wat kost een website laten maken in Rotterdam?",
    a: "Bij WebBoost Partner start een website laten maken in Rotterdam vanaf €1.950 excl. btw. U krijgt een Next.js-website met 95+ PageSpeed, SEO inbegrepen, vaste prijs en 100% eigenaarschap van de code. Bekijk de pakketten voor een exacte prijsindicatie.",
  },
  {
    q: "Krijg ik de code van mijn website in eigendom?",
    a: "Ja. U krijgt een standalone Git-repository met alle broncode. Geen proprietary platform lock-in: u kunt de site op elk moment zelf hosten, doorgeven aan een andere developer of migreren naar Vercel. Dat is een bewuste keuze van WebBoost Partner.",
  },
  {
    q: "Werken jullie ook buiten Rotterdam?",
    a: "Ja, WebBoost Partner werkt landelijk, met het zwaartepunt in Rotterdam en omgeving (Capelle aan den IJssel, Krimpen, Ridderkerk, Barendrecht, Schiedam). Kennismaken kan op locatie of online.",
  },
  {
    q: "Waarom Next.js en niet WordPress?",
    a: "Next.js is sneller, veiliger en onderhoudsarmer dan WordPress. U heeft geen plugin-updates, geen openbare inlog en volledige controle over snelheid en SEO. Voor ZZP en MKB in Rotterdam die snelheid en vindbaarheid belangrijk vinden, is Next.js meistal de betere keuze. Lees de eerlijke vergelijking.",
  },
  {
    q: "Hoe lang duurt het voordat mijn website klaar is?",
    a: "Een gemiddelde website voor ZZP of MKB is binnen 3 tot 6 weken live. Bij een WordPress naar Next.js migratie duurt dit 2 tot 4 weken. U krijgt altijd vooraf een heldere planning met vaste prijs.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ✅ NIEUW: Organization + WebSite + ProfessionalService JSON-LD */}
      {/* Vervang de sameAs-URLs door je eigen LinkedIn-, KvK- en Google Business-profiel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.webboostpartner.nl/#organization",
                name: "WebBoost Partner",
                url: "https://www.webboostpartner.nl",
                logo: "https://www.webboostpartner.nl/og.jpg",
                description:
                  "WebBoost Partner is een Nederlands webbureau dat razendsnelle Next.js-websites bouwt voor ZZP en MKB in Rotterdam en omgeving. Vaste prijs, SEO inbegrepen, 100% eigenaarschap van de code.",
                founder: { "@id": "https://www.webboostpartner.nl/over-mij#person" },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Rotterdam",
                  addressCountry: "NL",
                },
                areaServed: [
                  { "@type": "City", name: "Rotterdam" },
                  { "@type": "City", name: "Capelle aan den IJssel" },
                  { "@type": "City", name: "Krimpen aan den IJssel" },
                  { "@type": "City", name: "Ridderkerk" },
                  { "@type": "City", name: "Barendrecht" },
                  { "@type": "City", name: "Schiedam" },
                ],
                sameAs: [
                  "https://www.linkedin.com/company/webboostpartner", // TODO: jouw LinkedIn
                  "https://www.kvk.nl/bedrijf/webboostpartner",        // TODO: jouw KvK
                  // "https://github.com/...",                          // optioneel
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://www.webboostpartner.nl/#website",
                url: "https://www.webboostpartner.nl",
                name: "WebBoost Partner",
                publisher: { "@id": "https://www.webboostpartner.nl/#organization" },
                inLanguage: "nl-NL",
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://www.webboostpartner.nl/#service",
                name: "WebBoost Partner",
                image: "https://www.webboostpartner.nl/og.jpg",
                url: "https://www.webboostpartner.nl",
                priceRange: "€€",
                description:
                  "Webdesign en Next.js-websiteontwikkeling voor ZZP en MKB in Rotterdam. Websites met 95+ PageSpeed, SEO inbegrepen en vaste prijs.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Rotterdam",
                  addressCountry: "NL",
                },
                areaServed: { "@type": "City", name: "Rotterdam" },
                parentOrganization: { "@id": "https://www.webboostpartner.nl/#organization" },
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/#faq",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />

      <section className="relative bg-[#FAFAFA] border-b-2 border-black py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-heading font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-black leading-[1.1]">
              <span className="block text-[#FF4500] mb-2">
                Webdesign Rotterdam
              </span>
              die klanten oplevert.
            </h1>

            {/* ✅ AANGEPAST: merknaam + Next.js expliciet in de paragraaf */}
            <p className="mt-6 text-lg sm:text-xl max-w-2xl text-[#1a1a1a] font-medium leading-relaxed">
              WebBoost Partner bouwt bliksemsnelle Next.js-websites die jouw vakmanschap laten zien en bezoekers omzetten in echte aanvragen. Geen standaard templates, maar <Link href="/portfolio" className="underline decoration-2 decoration-[#FF4500] hover:text-[#FF4500] transition-colors">bewezen maatwerk</Link> — met 100% eigenaarschap van de code.
            </p>

            {/* ✅ NIEUW: TL;DR / citeerbaar antwoordblok */}
            <div className="mt-6 border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A19]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] mb-2 font-bold">
                Kort antwoord
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]">
                WebBoost Partner is een Nederlands webbureau in Rotterdam dat razendsnelle Next.js-websites bouwt voor ZZP en MKB. Website laten maken vanaf <strong>€1.950</strong>, 95+ PageSpeed, SEO inbegrepen, vaste prijs en <strong>100% eigenaarschap</strong> van de code — geen platform lock-in.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?intent=advies"
                className="inline-flex items-center justify-center bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_#1A1A19]"
              >
                Vraag gratis adviesgesprek aan <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex text-[#FF4500]">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-sm font-medium text-[#525252]">
                "Binnen een week 3 nieuwe aanvragen!" — Cindy, Cindy&apos;s Kraamzorg
              </p>
            </div>

            {/* ✅ AANGEPAST: "100% eigenaarschap" linkt nu naar uitleg + extra interne link */}
            <ul className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-mono uppercase tracking-wider text-black font-bold">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#FF4500] stroke-[3]" /> Vaste prijs vooraf
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#FF4500] stroke-[3]" />
                <Link href="/over-mij" className="hover:text-[#FF4500] underline decoration-2 decoration-transparent hover:decoration-[#FF4500]">
                  100% eigenaarschap
                </Link>
              </li>
            </ul>

            {/* ✅ NIEUW: compacte interne links naar inhoudelijke pagina's */}
            <p className="mt-6 text-sm text-[#525252]">
              Meer weten?{" "}
              <Link href="/website-laten-maken-rotterdam" className="underline decoration-2 decoration-[#FF4500] hover:text-[#FF4500]">
                Website laten maken Rotterdam
              </Link>
              {" · "}
              <Link href="/wordpress-naar-nextjs" className="underline decoration-2 decoration-[#FF4500] hover:text-[#FF4500]">
                WordPress naar Next.js
              </Link>
              {" · "}
              <Link href="/nextjs-vs-wordpress" className="underline decoration-2 decoration-[#FF4500] hover:text-[#FF4500]">
                Next.js vs WordPress
              </Link>
            </p>
          </div>

          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-[#FF4500] translate-x-3 translate-y-3 border-2 border-black" />

            <div className="relative bg-white border-2 border-black p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#525252] font-bold">
                  Live Bewijs
                </p>
                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 font-mono text-[10px] px-2 py-1 border border-green-800 font-bold">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                  GEVERIFIEERD
                </span>
              </div>

              <div className="flex items-end gap-6 mb-6 border-b-2 border-black pb-6">
                <div>
                  <div className="flex items-center gap-1 text-[#525252] mb-1">
                    <Monitor size={14} /> <span className="text-[10px] font-mono uppercase font-bold">Desktop</span>
                  </div>
                  <span className="font-heading font-black text-5xl leading-none text-[#FF4500]">100</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#525252] mb-1">
                    <Smartphone size={14} /> <span className="text-[10px] font-mono uppercase font-bold">Mobiel</span>
                  </div>
                  <span className="font-heading font-black text-5xl leading-none text-[#FF4500]">95</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                  Recent project:
                </p>
                <h3 className="font-heading font-black text-xl uppercase mb-2">
                  Marley&apos;s Kraamzorg
                </h3>
                <p className="text-sm text-[#4a4a48] leading-relaxed font-medium">
                  Volledig op maat gemaakt met een uitzonderlijk snelle laadtijd en een perfecte beoordeling.
                </p>
              </div>

              <a
                href="https://pagespeed.web.dev/analysis?url=https://www.marleyskraamzorg.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#FAFAFA] text-black font-heading font-bold uppercase text-[11px] tracking-wider border-2 border-black py-3 hover:bg-black hover:text-white transition-colors"
              >
                Bekijk de live score bij Google <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <USPGrid />

      {/* ✅ NIEUW: FAQ-sectie op de homepage */}
      <section className="bg-white py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
            // Veelgestelde vragen
          </p>
          <h2 className="font-heading font-black uppercase text-3xl sm:text-4xl tracking-tight leading-[0.95] mb-8">
            Veelgestelde vragen
          </h2>
          <FAQ items={faqs} schemaId="home" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
