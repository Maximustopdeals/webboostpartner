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
  return (
    <main className="bg-background min-h-screen">
      {/* JSON-LD Schema */}
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
                  itemListElement: projects.map((p, i) => ({
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
      <section className="bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-6">Bewezen Resultaten</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
            Mijn <span className="text-brand italic">Portfolio</span>.
          </h1>
          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-2xl font-sans mb-10">
            Geen loze beloftes, maar tastbaar bewijs. Ontdek een selectie van
            succesvolle trajecten voor <strong className="text-foreground font-semibold">webdesign Rotterdam</strong> en omgeving.
            Van <strong className="text-foreground font-semibold">website laten maken in Rotterdam</strong> tot complete moderniseringen:
            ik bouw sites die razendsnel laden en écht nieuwe klanten opleveren.
          </p>

          {/* TL;DR */}
          <div className="bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-widest text-brand font-bold mb-3">Kort antwoord</p>
            <p className="text-base leading-relaxed text-foreground-muted font-sans">
              WebBoost Partner bouwt Next.js-websites voor ZZP en MKB in Rotterdam. Recente projecten: <strong className="text-foreground font-semibold">{projects.slice(0, 3).map((p) => p.name).join(", ")}</strong>. Elk project met meetbare resultaten op snelheid, SEO en conversie, en 100% eigenaarschap van de code.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Sectie */}
      <section className="bg-background-secondary py-24 sm:py-32 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-sectie */}
      <section className="bg-background py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">Veelgestelde vragen</h2>
            <p className="text-foreground-muted font-sans">Alles wat je wilt weten over mijn werkwijze en projecten.</p>
          </div>
          <FAQ items={faqs} schemaId="portfolio" />
        </div>
      </section>

      {/* CTA Sectie */}
      <section className="bg-background-secondary border-t border-border-subtle py-24 text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">
            Klaar om jouw project hier <span className="text-brand italic">tussen te zetten?</span>
          </h2>
          <p className="text-lg text-foreground-muted mb-10 font-sans">
            Laten we samen bouwen aan een website die jouw vakmanschap laat zien en structureel nieuwe klanten oplevert.
          </p>
          <Link
            href="/contact?intent=advies"
            className="inline-flex items-center justify-center bg-brand text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-brand-hover transition-all duration-300"
          >
            Vraag vrijblijvend adviesgesprek aan <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
