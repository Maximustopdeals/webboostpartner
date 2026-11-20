import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Monitor,
  Smartphone,
  Star,
} from "lucide-react";
import USPGrid from "@/components/USPGrid";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "Webdesign Rotterdam | Website Laten Maken | 95+ PageSpeed | WebBoost Partner",
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
    description:
      "Razendsnelle Next.js websites met 95+ PageSpeed. Lokaal in Rotterdam.",
  },
};

interface FAQItem {
  q: string;
  a: string;
}

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
    a: "Next.js is sneller, veiliger en onderhoudsarmer dan WordPress. U heeft geen plugin-updates, geen openbare inlog en volledige controle over snelheid en SEO. Voor ZZP en MKB in Rotterdam die snelheid en vindbaarheid belangrijk vinden, is Next.js meestal de betere keuze. Lees de eerlijke vergelijking.",
  },
  {
    q: "Hoe lang duurt het voordat mijn website klaar is?",
    a: "Een gemiddelde website voor ZZP of MKB is binnen 3 tot 6 weken live. Bij een WordPress naar Next.js migratie duurt dit 2 tot 4 weken. U krijgt altijd vooraf een heldere planning met vaste prijs.",
  },
];

export default function HomePage() {
  return (
    <>
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
                founder: {
                  "@id": "https://www.webboostpartner.nl/over-mij#person",
                },
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
                  "https://www.linkedin.com/company/webboostpartner",
                  "https://www.kvk.nl/bedrijf/webboostpartner",
                ],
              },
              {
                "@type": "WebSite",
                "@id": "https://www.webboostpartner.nl/#website",
                url: "https://www.webboostpartner.nl",
                name: "WebBoost Partner",
                publisher: {
                  "@id": "https://www.webboostpartner.nl/#organization",
                },
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
                areaServed: {
                  "@type": "City",
                  name: "Rotterdam",
                },
                parentOrganization: {
                  "@id": "https://www.webboostpartner.nl/#organization",
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/#faq",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              },
            ],
          }),
        }}
      />

      {/* HERO SECTIE */}
      <section className="relative bg-background pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-6">
              <span className="block text-brand-accessible italic mb-2">
                Webdesign Rotterdam
              </span>
              die klanten oplevert.
            </h1>

            <p className="text-lg sm:text-xl max-w-2xl text-foreground-muted font-sans leading-relaxed mb-8">
              WebBoost Partner bouwt bliksemsnelle Next.js-websites die jouw
              vakmanschap laten zien en bezoekers omzetten in echte aanvragen.
              Geen standaard templates, maar{" "}
              <Link
                href="/portfolio"
                className="text-foreground underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-accessible transition-colors"
              >
                bewezen maatwerk
              </Link>{" "}
              met 100% eigenaarschap van de code.
            </p>

            <div className="bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle mb-10">
              <p className="font-sans text-xs uppercase tracking-widest text-brand-accessible font-bold mb-3">
                Kort antwoord
              </p>
              <p className="text-base text-foreground-muted leading-relaxed font-sans">
                WebBoost Partner is een Nederlands webbureau in Rotterdam dat
                razendsnelle Next.js-websites bouwt voor ZZP en MKB. Website
                laten maken vanaf{" "}
                <strong className="text-foreground font-semibold">
                  €1.950
                </strong>
                , 95+ PageSpeed, SEO inbegrepen, vaste prijs en{" "}
                <strong className="text-foreground font-semibold">
                  100% eigenaarschap
                </strong>{" "}
                van de code. Geen platform lock-in.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10">
              <Link
                href="/contact?intent=advies"
                className="inline-flex items-center justify-center bg-brand-accessible text-white font-sans font-medium px-8 py-4 hover:bg-brand-accessible-hover transition-all duration-300 rounded-sm"
              >
                Vraag gratis adviesgesprek aan{" "}
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-2">
                <div
                  className="flex text-brand"
                  role="img"
                  aria-label="5 van de 5 sterren"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-sm font-medium text-foreground-muted">
                  &quot;Binnen een week 3 nieuwe aanvragen!&quot; — Cindy,
                  Cindy&apos;s Kraamzorg
                </p>
              </div>

              <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-foreground">
                <li className="flex items-center gap-2">
                  <Check
                    size={18}
                    className="text-brand"
                    aria-hidden="true"
                  />
                  Vaste prijs vooraf
                </li>
                <li className="flex items-center gap-2">
                  <Check
                    size={18}
                    className="text-brand"
                    aria-hidden="true"
                  />
                  <Link
                    href="/over-mij"
                    className="hover:text-brand-accessible transition-colors"
                  >
                    100% eigenaarschap
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-border-subtle space-y-3 text-sm text-foreground-muted font-sans">
              <p>
                <strong className="font-semibold text-foreground">
                  Diensten:
                </strong>{" "}
                <Link
                  href="/website-laten-maken-rotterdam"
                  className="hover:text-brand-accessible transition-colors underline decoration-transparent hover:decoration-brand-accessible underline-offset-4"
                >
                  Website laten maken Rotterdam
                </Link>
                {" · "}
                <Link
                  href="/seo-rotterdam"
                  className="hover:text-brand-accessible transition-colors underline decoration-transparent hover:decoration-brand-accessible underline-offset-4"
                >
                  SEO Rotterdam
                </Link>
                {" · "}
                <Link
                  href="/pakketten"
                  className="hover:text-brand-accessible transition-colors underline decoration-transparent hover:decoration-brand-accessible underline-offset-4"
                >
                  Pakketten &amp; prijzen
                </Link>
              </p>
              <p>
                <strong className="font-semibold text-foreground">
                  Meer weten:
                </strong>{" "}
                <Link
                  href="/wordpress-naar-nextjs"
                  className="hover:text-brand-accessible transition-colors underline decoration-transparent hover:decoration-brand-accessible underline-offset-4"
                >
                  WordPress naar Next.js
                </Link>
                {" · "}
                <Link
                  href="/nextjs-vs-wordpress"
                  className="hover:text-brand-accessible transition-colors underline decoration-transparent hover:decoration-brand-accessible underline-offset-4"
                >
                  Next.js vs WordPress
                </Link>
                {" · "}
                <Link
                  href="/portfolio"
                  className="hover:text-brand-accessible transition-colors underline decoration-transparent hover:decoration-brand-accessible underline-offset-4"
                >
                  Portfolio
                </Link>
              </p>
            </div>
          </div>

          {/* RECHTERKOLOM - LIVE BEWIJS */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white border border-border-subtle p-8 sm:p-10 shadow-soft rounded-sm">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border-subtle">
                <p className="font-sans text-xs uppercase tracking-widest text-foreground-muted font-bold">
                  Live Bewijs
                </p>
                <span className="inline-flex items-center gap-2 bg-[#F0FDF4] text-green-700 font-medium text-xs px-3 py-1 rounded-full border border-green-200">
                  <span
                    className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                    aria-hidden="true"
                  />
                  Geverifieerd
                </span>
              </div>

              <div className="flex items-end gap-10 mb-8 pb-8 border-b border-border-subtle">
                <div>
                  <div className="flex items-center gap-2 text-foreground-muted mb-2">
                    <Monitor size={16} aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Desktop
                    </span>
                  </div>
                  <span className="font-serif text-6xl text-brand-accessible leading-none">
                    100
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-foreground-muted mb-2">
                    <Smartphone size={16} aria-hidden="true" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Mobiel
                    </span>
                  </div>
                  <span className="font-serif text-6xl text-brand-accessible leading-none">
                    95
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-2">
                  Recent project:
                </p>
                <h2 className="font-serif text-2xl text-foreground mb-3">
                  Marley&apos;s Kraamzorg
                </h2>
                <p className="text-base text-foreground-muted leading-relaxed font-sans">
                  Volledig op maat gemaakt met een uitzonderlijk snelle laadtijd
                  en een perfecte beoordeling.
                </p>
              </div>

              <a
                href="https://pagespeed.web.dev/analysis?url=https://www.marleyskraamzorg.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-background-secondary text-foreground font-medium text-sm py-3.5 rounded-sm hover:bg-border-subtle transition-colors"
              >
                Bekijk de live score bij Google{" "}
                <ExternalLink size={16} aria-hidden="true" />
                <span className="sr-only">
                  (opent in een nieuw tabblad)
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <USPGrid />

      {/* FAQ SECTIE */}
      <section className="bg-background-secondary py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-foreground-muted font-sans">
              Alles wat je wilt weten over samenwerken met WebBoost Partner.
            </p>
          </div>
          <FAQ items={faqs} schemaId="home" />
        </div>
      </section>

      <CTASection />
    </>
  );
}
