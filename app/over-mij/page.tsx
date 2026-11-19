import { MapPin, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import type { Metadata } from "next";
import FAQ from "@/components/FAQ"; // ✅ NIEUW

function NextjsLogoCard() {
  return (
    <div className="bg-[#0A0A0A] border-2 border-black p-8 flex items-center justify-center relative z-10 min-h-[300px]">
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
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">Aangedreven door</p>
        <p className="font-heading font-extrabold uppercase text-lg text-white tracking-tight">Next.js</p>
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

// ✅ NIEUW: FAQ
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
      {/* ✅ AANGEPAST: Person-schema uitgebreid met @id, sameAs, knowsAbout */}
      {/* Vervang de sameAs-URLs door je eigen LinkedIn en GitHub */}
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
                  "https://www.linkedin.com/in/ron-webboostpartner", // TODO: jouw LinkedIn
                  // "https://github.com/...",                        // optioneel
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
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Over mij</p>
            {/* ✅ AANGEPAST: merknaam in H1 */}
            <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl">
              Ron — WebBoost Partner |{" "}
              <span className="text-[#FF4500]">webbouwer in Rotterdam</span>
            </h1>

            {/* ✅ NIEUW: Kort profiel (citeerbaar) */}
            <div className="mt-6 border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A19]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] mb-2 font-bold">Kort profiel</p>
              <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]">
                Ron is oprichter van <strong>WebBoost Partner</strong> (webboostpartner.nl), een Nederlands webbureau dat razendsnelle Next.js-websites bouwt voor ZZP en MKB in Rotterdam. Hij werkt bewust kleinschalig: u werkt direct met de bouwer, krijgt 100% eigenaarschap van de code en een vaste prijs vooraf.
              </p>
            </div>

            <div className="mt-6 space-y-4 text-lg sm:text-xl max-w-2xl leading-relaxed text-[#1a1a1a]">
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
                teams <strong>u werkt rechtstreeks met mij</strong>. Duidelijk,
                eerlijk en persoonlijk.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-sm ml-auto">
              <div className="bg-white border-2 border-black p-2 relative z-10">
                <NextjsLogoCard />
                <div className="px-3 py-3 border-t-2 border-black mt-2">
                  <p className="font-heading font-bold uppercase text-sm">Ron · Oprichter</p>
                  <p className="font-mono text-xs text-[#525252] flex items-center gap-1 mt-1">
                    <MapPin size={12} /> Rotterdam, NL
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#FF4500] border-2 border-black -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="bg-white py-20 border-y-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-10">
          {[
            { title: "95+ PageSpeed", desc: "Websites die sneller laden dan 95% van alle sites — ook op mobiel." },
            { title: "SEO vanaf de basis", desc: "Technische SEO en lokale vindbaarheid standaard meegenomen." },
            { title: "Direct contact", desc: "U sparrt met mij, niet met een tussenpersoon of groot team." },
          ].map((item, i) => (
            <div key={i} className="border-2 border-black bg-[#FAFAFA] p-6 shadow-brutal">
              <Sparkles className="text-[#FF4500] mb-3" size={22} />
              <h3 className="font-heading font-black uppercase text-xl mb-2">{item.title}</h3>
              <p className="text-[#525252]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom ik WebBoost Partner ben gestart</h2>
          <p>
            Jarenlang bouwde ik WordPress-websites. Dat werkt prima tot
            ondernemers tegen dezelfde problemen aanlopen: trage laadtijden,
            plugins die vastlopen, en SEO die stagneert. Een website hoort geen
            bron van stress te zijn, maar een tool die klanten oplevert.
          </p>
          <p>
            Daarom bouw ik nu op een moderne, schone basis. Snel, veilig en
            onderhoudsarm. Voor u betekent dat: een site die professioneel oogt,
            prettig werkt voor bezoekers en beter presteert in Google.
          </p>

          <h2>Hoe we samenwerken</h2>
          <ul>
            <li><strong>1. Kennismaking</strong> — We bespreken uw bedrijf, doelgroep en doelen. U krijgt een helder voorstel met vaste prijs.</li>
            <li><strong>2. Design</strong> — Een uniek ontwerp dat past bij uw merk en is ingericht op conversie. Geen templates.</li>
            <li><strong>3. Bouw</strong> — De website wordt strak opgebouwd, met snelheid en vindbaarheid als uitgangspunt.</li>
            <li><strong>4. Live &amp; nazorg</strong> — Na controle zetten we de site live. Ook daarna kunt u bij mij terecht.</li>
          </ul>

          <h2>Werkgebied</h2>
          <p>
            Ik werk landelijk, maar het zwaartepunt ligt in Rotterdam en
            omgeving. Lokaal schakelen werkt het prettigst: ik begrijp uw markt
            en concurrentie. Kennismaken kan op locatie of online.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["Rotterdam", "Capelle aan den IJssel", "Krimpen aan den IJssel", "Ridderkerk", "Barendrecht", "Schiedam"].map((c, index) => (
              <div key={index} className="border-2 border-black bg-[#FAFAFA] p-4 text-center hover:bg-[#FF4500] hover:text-white transition-colors">
                <p className="font-heading font-bold uppercase text-sm tracking-tight">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* PORTFOLIO */}
      <section className="bg-[#FAFAFA] border-y-2 border-black py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">// Recent werk</p>
              <h2 className="font-heading font-black uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] text-black">
                Projecten die <span className="text-[#FF4500]">presteren</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-white text-black font-heading font-bold uppercase text-xs tracking-wider border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_#1A1A19] whitespace-nowrap"
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

      {/* ✅ NIEUW: FAQ-sectie */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">// Veelgestelde vragen</p>
          <h2 className="font-heading font-black uppercase text-3xl sm:text-4xl tracking-tight leading-[0.95] mb-8">
            Veelgestelde vragen
          </h2>
          <FAQ items={faqs} schemaId="over-mij" />
        </div>
      </section>

      <CTASection
        title="Laten we kennismaken"
        subtitle="Vrijblijvend sparren op locatie of online? Vertel waar u staat — ik luister en geef eerlijk advies."
        button="Plan adviesgesprek"
        href="/contact?intent=advies"
      />
    </>
  );
}
