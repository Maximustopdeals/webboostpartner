import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, ExternalLink, Monitor, Smartphone, Star } from "lucide-react";
import USPGrid from "@/components/USPGrid";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

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
    // ✅ AANGEPAST: typo "meistal" → "meestal"
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

      <section className="relative bg-[#F8F6F3] border-b border-[#E7E5E4] py-20 lg:py-28 overflow-hidden">
  <div className="container-wb grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
    
    {/* Left content */}
    <div className="lg:col-span-7">
      <p className="font-label mb-4">
        Webdesign Rotterdam
      </p>

      <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-[#1C1917] leading-[1.1]">
        Webdesign Rotterdam
        <span className="block text-[#E04E2A] mt-1">
          die klanten oplevert.
        </span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl max-w-xl text-[#44403C] leading-relaxed">
        WebBoost Partner bouwt bliksemsnelle Next.js-websites die jouw vakmanschap laten zien en bezoekers omzetten in echte aanvragen. Geen standaard templates, maar{" "}
        <Link 
          href="/portfolio" 
          className="text-[#C2410C] font-medium underline decoration-[#E04E2A]/40 underline-offset-4 hover:decoration-[#E04E2A] transition-colors"
        >
          bewezen maatwerk
        </Link>{" "}
        met 100% eigenaarschap van de code.
      </p>

      {/* Kort antwoord card */}
      <div className="mt-8 bg-white border border-[#E7E5E4] rounded-2xl p-6 shadow-soft">
        <p className="font-label text-[#E04E2A] mb-2">
          Kort antwoord
        </p>
        <p className="text-[15px] leading-relaxed text-[#44403C]">
          WebBoost Partner is een Nederlands webbureau in Rotterdam dat razendsnelle Next.js-websites bouwt voor ZZP en MKB. Website laten maken vanaf <strong className="text-[#1C1917] font-semibold">€1.950</strong>, 95+ PageSpeed, SEO inbegrepen, vaste prijs en <strong className="text-[#1C1917] font-semibold">100% eigenaarschap</strong> van de code — geen platform lock-in.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact?intent=advies"
          className="btn-primary"
        >
          Vraag gratis adviesgesprek aan
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Social proof */}
      <div className="mt-7 flex items-center gap-3">
        <div className="flex text-[#E04E2A]">
          <Star size={15} fill="currentColor" />
          <Star size={15} fill="currentColor" />
          <Star size={15} fill="currentColor" />
          <Star size={15} fill="currentColor" />
          <Star size={15} fill="currentColor" />
        </div>
        <p className="text-sm text-[#57534E]">
          “Binnen een week 3 nieuwe aanvragen!” — Cindy, Cindy&apos;s Kraamzorg
        </p>
      </div>

      {/* Trust points */}
      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-[#1C1917]">
        <li className="flex items-center gap-2">
          <Check size={16} className="text-[#E04E2A]" strokeWidth={2.5} />
          Vaste prijs vooraf
        </li>
        <li className="flex items-center gap-2">
          <Check size={16} className="text-[#E04E2A]" strokeWidth={2.5} />
          <Link 
            href="/over-mij" 
            className="hover:text-[#E04E2A] transition-colors underline decoration-transparent hover:decoration-[#E04E2A] underline-offset-2"
          >
            100% eigenaarschap
          </Link>
        </li>
      </ul>

      {/* Internal links */}
      <div className="mt-8 pt-6 border-t border-[#E7E5E4] space-y-2 text-sm text-[#57534E]">
        <p>
          <span className="font-semibold text-[#1C1917]">Diensten:</span>{" "}
          <Link href="/website-laten-maken-rotterdam" className="hover:text-[#E04E2A] underline decoration-[#E04E2A]/30 underline-offset-2 hover:decoration-[#E04E2A] transition-colors">
            Website laten maken Rotterdam
          </Link>
          {" · "}
          <Link href="/seo-rotterdam" className="hover:text-[#E04E2A] underline decoration-[#E04E2A]/30 underline-offset-2 hover:decoration-[#E04E2A] transition-colors">
            SEO Rotterdam
          </Link>
          {" · "}
          <Link href="/pakketten" className="hover:text-[#E04E2A] underline decoration-[#E04E2A]/30 underline-offset-2 hover:decoration-[#E04E2A] transition-colors">
            Pakketten & prijzen
          </Link>
        </p>
        <p>
          <span className="font-semibold text-[#1C1917]">Meer weten:</span>{" "}
          <Link href="/wordpress-naar-nextjs" className="hover:text-[#E04E2A] underline decoration-[#E04E2A]/30 underline-offset-2 hover:decoration-[#E04E2A] transition-colors">
            WordPress naar Next.js
          </Link>
          {" · "}
          <Link href="/nextjs-vs-wordpress" className="hover:text-[#E04E2A] underline decoration-[#E04E2A]/30 underline-offset-2 hover:decoration-[#E04E2A] transition-colors">
            Next.js vs WordPress
          </Link>
          {" · "}
          <Link href="/portfolio" className="hover:text-[#E04E2A] underline decoration-[#E04E2A]/30 underline-offset-2 hover:decoration-[#E04E2A] transition-colors">
            Portfolio
          </Link>
        </p>
      </div>
    </div>

    {/* Right side – Live proof card */}
    <div className="lg:col-span-5 relative mt-6 lg:mt-0">
      <div className="bg-white border border-[#E7E5E4] rounded-2xl p-7 sm:p-8 shadow-soft-md">
        
        <div className="flex items-center justify-between mb-7">
          <p className="font-label">
            Live bewijs
          </p>
          <span className="inline-flex items-center gap-1.5 bg-[#E6F4F1] text-[#1F7A6E] text-[11px] font-medium px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#2A9D8F] rounded-full animate-pulse" />
            Geverifieerd
          </span>
        </div>

        {/* Scores */}
        <div className="flex items-end gap-8 mb-7 pb-7 border-b border-[#E7E5E4]">
          <div>
            <div className="flex items-center gap-1.5 text-[#57534E] mb-1.5">
              <Monitor size={14} />
              <span className="text-xs font-medium">Desktop</span>
            </div>
            <span className="font-display text-5xl text-[#E04E2A] leading-none">100</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[#57534E] mb-1.5">
              <Smartphone size={14} />
              <span className="text-xs font-medium">Mobiel</span>
            </div>
            <span className="font-display text-5xl text-[#E04E2A] leading-none">95</span>
          </div>
        </div>

        {/* Project */}
        <div className="mb-7">
          <p className="text-xs font-medium text-[#57534E] mb-1.5">
            Recent project
          </p>
          <h3 className="font-display text-xl text-[#1C1917] mb-2">
            Marley&apos;s Kraamzorg
          </h3>
          <p className="text-sm text-[#57534E] leading-relaxed">
            Volledig op maat gemaakt met een uitzonderlijk snelle laadtijd en een perfecte beoordeling.
          </p>
        </div>

        <a
          href="https://pagespeed.web.dev/analysis?url=https://www.marleyskraamzorg.nl/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#F8F6F3] text-[#1C1917] font-semibold text-sm py-3.5 rounded-xl border border-[#E7E5E4] hover:border-[#1C1917] hover:bg-white transition-all"
        >
          Bekijk de live score bij Google
          <ExternalLink size={15} />
        </a>
      </div>
    </div>
  </div>
</section>

      <USPGrid />

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
