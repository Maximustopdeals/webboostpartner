import { MapPin, Sparkles, Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

function NextjsLogoCard() {
  return (
    <div className="bg-foreground rounded-t-sm p-8 flex items-center justify-center relative z-10 min-h-[300px]">
      <svg viewBox="0 0 180 180" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
        <mask id="m" maskUnits="userSpaceOnUse">
          <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <g mask="url(#m)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.5 157.5L69.5 60H60v60h8.5V72.5l72.5 93.5c3-1.8 5.8-3.9 8.5-6.3z" fill="white" />
          <path d="M146 60h-8v60h8V60z" fill="white" />
        </g>
      </svg>
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="font-sans text-xs uppercase tracking-widest text-white/50 mb-1">Aangedreven door</p>
        <p className="font-serif text-xl text-white">Next.js</p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Over mij | Ron — Webdesign & websites Rotterdam | WebBoost Partner",
  description:
    "Ron, oprichter van WebBoost Partner in Rotterdam. Persoonlijk webdesign en razendsnelle websites voor ZZP en MKB. Direct contact, vaste prijs, geen bureau-gedoe.",
  alternates: { canonical: "/over-mij" },
  keywords: ["webdesign Rotterdam", "website laten maken Rotterdam", "webbouwer Rotterdam", "Next.js specialist Rotterdam", "WebBoost Partner"],
  openGraph: {
    title: "Over mij | Ron — WebBoost Partner Rotterdam",
    description: "Persoonlijk webdesign in Rotterdam. Direct contact met de bouwer. Snelle websites die klanten opleveren.",
    url: "https://www.webboostpartner.nl/over-mij",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Over mij | Ron — WebBoost Partner Rotterdam",
    description: "Persoonlijk webdesign in Rotterdam. Direct contact, vaste prijs, geen bureau-gedoe.",
  },
};

interface FAQItem { q: string; a: string }

const faqs: FAQItem[] = [
  {
    q: "Wie is de oprichter van WebBoost Partner?",
    a: "WebBoost Partner is opgericht door Ron, een webbouwer uit Rotterdam. Hij bouwt razendsnelle Next.js-websites voor ZZP en MKB. U werkt rechtstreeks met hem — geen accountmanagers of tussenpersonen.",
  },
  {
    q: "Werkt WebBoost Partner landelijk of alleen in Rotterdam?",
    a: "WebBoost Partner werkt landelijk, met het zwaartepunt in Rotterdam en omgeving (Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht, Schiedam). Kennismaken kan op locatie of online.",
  },
  {
    q: "Wat maakt WebBoost Partner anders dan andere webbureaus?",
    a: "Drie dingen: (1) u werkt direct met de bouwer, niet met een team of accountmanager; (2) u krijgt 100% eigenaarschap van de code (standalone Git-repository, geen platform lock-in); (3) vaste prijs vooraf, geen uurtje-factuurtje.",
  },
  {
    q: "Welke technieken gebruikt WebBoost Partner?",
    a: "Next.js, React en TypeScript voor de frontend, met een headless CMS naar keuze (Sanity of headless WordPress). Hosting via Vercel of een eigen server. Alles gericht op snelheid (95+ PageSpeed) en SEO.",
  },
];

export default function OverMijPage() {
  return (
    <>
      {/* Person Schema - Ongewijzigd */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://www.webboostpartner.nl/over-mij#person",
                name: "Ron",
                jobTitle: "Oprichter & webbouwer",
                worksFor: { "@id": "https://www.webboostpartner.nl/#organization" },
                url: "https://www.webboostpartner.nl/over-mij",
                image: "https://www.webboostpartner.nl/og.jpg",
                description:
                  "Ron is oprichter van WebBoost Partner en bouwt razendsnelle Next.js-websites voor ZZP en MKB in Rotterdam en omgeving.",
                knowsAbout: ["Next.js", "React", "TypeScript", "SEO", "Core Web Vitals", "Webdesign"],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Rotterdam",
                  addressCountry: "NL",
                },
                sameAs: [
                  "https://www.linkedin.com/in/ron-webboostpartner",
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/over-mij#faq",
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

      {/* HERO */}
      <section className="bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-6">
              Over mij
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
              Ron — WebBoost Partner | <span className="text-brand italic">webbouwer in Rotterdam</span>
            </h1>

            {/* Kort profiel */}
            <div className="bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle mb-10">
              <p className="font-sans text-xs uppercase tracking-widest text-brand font-bold mb-3">Kort profiel</p>
              <p className="text-base leading-relaxed text-foreground-muted font-sans">
                Ron is oprichter van <strong className="text-foreground font-semibold">WebBoost Partner</strong> (webboostpartner.nl), een Nederlands webbureau dat razendsnelle Next.js-websites bouwt voor ZZP en MKB in Rotterdam. Hij werkt bewust kleinschalig: u werkt direct met de bouwer, krijgt 100% eigenaarschap van de code en een vaste prijs vooraf.
              </p>
            </div>

            <div className="space-y-6 text-lg sm:text-xl max-w-2xl leading-relaxed text-foreground-muted font-sans">
              <p>
                Ik ben Ron, oprichter van WebBoost Partner. Ik bouw websites die
                snel laden, beter scoren in Google en ondernemers helpen aan meer
                aanvragen zonder jargon en zonder bureau-gedoe.
              </p>
              <p>
                Wat begon als hobby naast mijn baan, groeide uit tot een
                specialisme. Inmiddels heb ik meerdere projecten gebouwd voor
                echte ondernemers: van schoonmaakbedrijven en rijscholen tot
                zorgprofessionals.
              </p>
              <p>
                Ik werk bewust kleinschalig. Geen accountmanagers, geen grote
                teams <strong className="text-foreground font-semibold">u werkt rechtstreeks met mij</strong>. Duidelijk,
                eerlijk en persoonlijk.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:ml-auto">
              {/* Kaart container */}
              <div className="bg-background border border-border-subtle rounded-sm shadow-soft relative z-10 overflow-hidden">
                <NextjsLogoCard />
                <div className="p-6 bg-background">
                  <p className="font-serif text-xl text-foreground mb-1">Ron · Oprichter</p>
                  <p className="font-sans text-sm text-foreground-muted flex items-center gap-1.5">
                    <MapPin size={16} className="text-brand" /> Rotterdam, NL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="bg-background-secondary py-24 sm:py-32 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            { title: "95+ PageSpeed", desc: "Websites die sneller laden dan 95% van alle sites — ook op mobiel." },
            { title: "SEO vanaf de basis", desc: "Technische SEO en lokale vindbaarheid standaard meegenomen." },
            { title: "Direct contact", desc: "U sparrt met mij, niet met een tussenpersoon of groot team." },
          ].map((item, i) => (
            <div key={i} className="bg-background border border-border-subtle p-8 rounded-sm shadow-soft">
              <Sparkles className="text-brand mb-5" size={24} />
              <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground-muted font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY / ARTIKEL */}
      <article className="bg-background py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-4 mb-6">Waarom ik WebBoost Partner ben gestart</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Jarenlang bouwde ik WordPress-websites. Dat werkt prima tot
            ondernemers tegen dezelfde problemen aanlopen: trage laadtijden,
            plugins die vastlopen, en SEO die stagneert. Een website hoort geen
            bron van stress te zijn, maar een tool die klanten oplevert.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-10 text-lg">
            Daarom bouw ik nu op een moderne, schone basis. Snel, veilig en
            onderhoudsarm. Voor u betekent dat: een site die professioneel oogt,
            prettig werkt voor bezoekers en beter presteert in Google.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Hoe we samenwerken</h2>
          <ul className="space-y-6 mb-12 text-foreground-muted text-lg font-sans">
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm">1</span>
              <span><strong className="text-foreground font-semibold">Kennismaking</strong> — We bespreken uw bedrijf, doelgroep en doelen. U krijgt een helder voorstel met vaste prijs.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm">2</span>
              <span><strong className="text-foreground font-semibold">Design</strong> — Een uniek ontwerp dat past bij uw merk en is ingericht op conversie. Geen templates.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm">3</span>
              <span><strong className="text-foreground font-semibold">Bouw</strong> — De website wordt strak opgebouwd, met snelheid en vindbaarheid als uitgangspunt.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand font-bold text-sm">4</span>
              <span><strong className="text-foreground font-semibold">Live &amp; nazorg</strong> — Na controle zetten we de site live. Ook daarna kunt u bij mij terecht.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Werkgebied</h2>
          <p className="text-foreground-muted leading-relaxed mb-8 text-lg">
            Ik werk landelijk, maar het zwaartepunt ligt in Rotterdam en
            omgeving. Lokaal schakelen werkt het prettigst: ik begrijp uw markt
            en concurrentie. Kennismaken kan op locatie of online.
          </p>

          <div className="flex flex-wrap gap-3">
            {["Rotterdam", "Capelle aan den IJssel", "Krimpen aan den IJssel", "Ridderkerk", "Barendrecht", "Schiedam"].map((c, index) => (
              <div key={index} className="bg-background-secondary border border-border-subtle px-5 py-2.5 rounded-sm text-sm font-medium text-foreground hover:border-brand transition-colors cursor-default">
                {c}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* PORTFOLIO */}
      <section className="bg-background-secondary border-y border-border-subtle py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-4">Recent werk</p>
              <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-[1.1] tracking-tight">
                Projecten die <span className="text-brand italic">presteren</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-background text-foreground font-sans font-medium text-sm border border-border-subtle px-6 py-3 rounded-sm hover:bg-border-subtle transition-all duration-300 whitespace-nowrap shadow-sm"
            >
              Bekijk alle projecten
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">Veelgestelde vragen</h2>
            <p className="text-foreground-muted font-sans">Alles wat je wilt weten over samenwerken met WebBoost Partner.</p>
          </div>
          <FAQ items={faqs} schemaId="over-mij" />
        </div>
      </section>

      {/* CTA Sectie */}
      <CTASection
        title="Laten we kennismaken"
        subtitle="Vrijblijvend sparren op locatie of online? Vertel waar u staat — ik luister en geef eerlijk advies."
        button="Plan adviesgesprek"
        href="/contact?intent=advies"
      />
    </>
  );
}
