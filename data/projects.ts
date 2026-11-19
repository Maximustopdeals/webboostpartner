import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Portfolio | Webdesign Rotterdam & Website Laten Maken",
  description:
    "Ontdek mijn portfolio. Bewezen resultaten op het gebied van webdesign Rotterdam en website laten maken. Razendsnelle Next.js websites die écht nieuwe klanten opleveren.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Webdesign Rotterdam & Website Laten Maken",
    description:
      "Bewezen resultaten: razendsnelle Next.js-websites voor ZZP en MKB in Rotterdam. Bekijk projecten en meetbare resultaten.",
    url: "https://www.webboostpartner.nl/portfolio",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Webdesign Rotterdam",
    description:
      "Bewezen resultaten: razendsnelle Next.js-websites voor ZZP en MKB in Rotterdam.",
  },
};

interface FAQItem { q: string; a: string }

const faqs: FAQItem[] = [
  {
    q: "Voor wie bouwt WebBoost Partner websites?",
    a: "WebBoost Partner bouwt Next.js-websites voor ZZP'ers en MKB-bedrijven in Rotterdam en omgeving. Van lokale dienstverleners (kraamzorg, schoonmaak, rijscholen, zorg) tot high-end projecten. Het zwaartepunt ligt op ondernemers die snelheid, vindbaarheid en conversie belangrijk vinden.",
  },
  {
    q: "Wat voor projecten heeft WebBoost Partner gedaan?",
    a: "Recente projecten zijn onder andere Marley's Kraamzorg (100/100 PageSpeed, meer online aanmeldingen) en meerdere lokale dienstverleners in Rotterdam. Elk project wordt gebouwd op Next.js met 95+ PageSpeed, technische SEO en 100% eigenaarschap van de code.",
  },
  {
    q: "Kan ik resultaten van eerdere klanten zien?",
    a: "Ja. Per project is er een case study met het probleem, de aanpak en het meetbare resultaat. Je vindt ze via de projectkaarten op deze pagina. Klantcitaten zijn opgenomen waar de klant toestemming gaf.",
  },
  {
    q: "Kan ik een case study als voorbeeld gebruiken voor mijn eigen project?",
    a: "De getoonde projecten dienen als illustratie van de werkwijze en het resultaat. Voor een vergelijkbaar project maken we altijd een eigen plan met vaste prijs. Neem contact op voor een vrijblijvend adviesgesprek.",
  },
];

export default function PortfolioPage() {
  // ✅ NIEUW: één keer berekend, herbruikbaar in TL;DR en JSON-LD
  const realProjects = projects.filter((p) => !p.isDemo);

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://www.webboostpartner.nl/portfolio#webpage",
                url: "https://www.webboostpartner.nl/portfolio",
                name: "Portfolio | Webdesign Rotterdam & Website Laten Maken",
                description:
                  "Portfolio van WebBoost Partner: razendsnelle Next.js-websites voor ZZP en MKB in Rotterdam, met meetbare resultaten.",
                isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
                about: { "@id": "https://www.webboostpartner.nl/#organization" },
                author: { "@id": "https://www.webboostpartner.nl/over-mij#person" },
                inLanguage: "nl-NL",
                mainEntity: {
                  "@type": "ItemList",
                  name: "Projecten van WebBoost Partner",
                  // ✅ AANGEPAST: alleen echte klantprojecten in structured data
                  itemListElement: realProjects.map((p, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    url: `https://www.webboostpartner.nl/portfolio/${p.slug}`,
                    name: p.name,
                  })),
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.webboostpartner.nl/portfolio#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webboostpartner.nl/" },
                  { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.webboostpartner.nl/portfolio" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/portfolio#faq",
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

      {/* Header Sectie */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">// Bewezen Resultaten</p>
          <h1 className="font-heading font-black uppercase text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-black mb-6">
            Mijn <span className="text-[#FF4500]">Portfolio</span>.
          </h1>
          <p className="text-lg sm:text-xl text-[#4a4a48] leading-relaxed max-w-2xl font-medium">
            Geen loze beloftes, maar tastbaar bewijs. Ontdek een selectie van
            succesvolle trajecten voor <strong>webdesign Rotterdam</strong> en omgeving.
            Van <strong>website laten maken in Rotterdam</strong> tot complete moderniseringen:
            ik bouw sites die razendsnel laden en écht nieuwe klanten opleveren.
          </p>

          {/* ✅ AANGEPAST: TL;DR filtert demo's, pakt eerste 3 echte projecten */}
          <div className="mt-6 border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A19] max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] mb-2 font-bold">Kort antwoord</p>
            <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]">
              WebBoost Partner bouwt Next.js-websites voor ZZP en MKB in Rotterdam. Recente projecten: <strong>{realProjects.slice(0, 3).map((p) => p.name).join(", ")}</strong>. Elk project met meetbare resultaten op snelheid, SEO en conversie, en 100% eigenaarschap van de code.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Sectie */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ✅ ONGEWIJZIGD: alle projecten (incl. demo's) blijven zichtbaar */}
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-sectie */}
      <section className="bg-white border-t-2 border-black py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">// Veelgestelde vragen</p>
          <h2 className="font-heading font-black uppercase text-3xl sm:text-4xl tracking-tight leading-[0.95] mb-8">
            Veelgestelde vragen
          </h2>
          <FAQ items={faqs} schemaId="portfolio" />
        </div>
      </section>

      {/* CTA Sectie */}
      <section className="bg-[#FAFAFA] border-t-2 border-black py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <h2 className="font-heading font-black uppercase text-3xl sm:text-4xl mb-4">
            Klaar om jouw project hier <span className="text-[#FF4500]">tussen te zetten?</span>
          </h2>
          <p className="text-lg text-[#525252] mb-8 font-medium">
            Laten we samen bouwen aan een website die jouw vakmanschap laat zien en structureel nieuwe klanten oplevert.
          </p>
          <Link
            href="/contact?intent=advies"
            className="inline-flex items-center justify-center bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_#1A1A19]"
          >
            Vraag vrijblijvend adviesgesprek aan <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
