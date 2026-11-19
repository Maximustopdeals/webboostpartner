import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Laten Maken Rotterdam | Vanaf €1.950 | Next.js | WebBoost Partner",
  description:
    "Website laten maken in Rotterdam? WebBoost Partner bouwt razendsnelle Next.js websites (95+ PageSpeed) voor ZZP & MKB. Vaste prijs, SEO inbegrepen, gratis adviesgesprek.",
  keywords: [
    "website laten maken Rotterdam",
    "webdesign Rotterdam",
    "website bouwen Rotterdam",
    "nieuwe website Rotterdam",
    "website maken ZZP Rotterdam",
    "professionele website Rotterdam",
    "Next.js website Rotterdam",
    "webdesign bureau Rotterdam",
  ],
  alternates: { canonical: "/website-laten-maken-rotterdam" },
  openGraph: {
    title: "Website Laten Maken Rotterdam | Vanaf €1.950 | WebBoost Partner",
    description:
      "Razendsnelle Next.js websites voor ZZP & MKB in Rotterdam. 95+ PageSpeed, SEO inbegrepen, vaste prijs. Vraag gratis adviesgesprek aan.",
    url: "https://www.webboostpartner.nl/website-laten-maken-rotterdam",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Website laten maken Rotterdam — WebBoost Partner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Rotterdam | Vanaf €1.950",
    description: "Razendsnelle Next.js websites met 95+ PageSpeed. SEO inbegrepen, vaste prijs, lokaal in Rotterdam.",
    images: ["/og.jpg"],
  },
};

interface FAQItem { q: string; a: string }

// ✅ NIEUW: FAQ-array daadwerkelijk gevuld
const faqs: FAQItem[] = [
  {
    q: "Wat kost een website laten maken in Rotterdam?",
    a: "Bij WebBoost Partner start een website laten maken in Rotterdam vanaf €1.950 excl. btw. De prijs hangt af van het aantal pagina's en functionaliteit. U krijgt altijd vooraf een vaste prijsopgave — geen uurtje-factuurtje.",
  },
  {
    q: "Hoe lang duurt het bouwen van een website?",
    a: "Een gemiddelde website voor ZZP of MKB is binnen 3 tot 6 weken live. U ontvangt vooraf een heldere planning met mijlpalen, zodat u weet waar u aan toe bent.",
  },
  {
    q: "Krijg ik de code van mijn website in eigendom?",
    a: "Ja. U krijgt een standalone Git-repository met alle broncode. Geen proprietary platform lock-in: u kunt de site op elk moment zelf hosten, doorgeven aan een andere developer of migreren naar Vercel.",
  },
  {
    q: "Is SEO inbegrepen bij een nieuwe website?",
    a: "Ja. Technische SEO zit standaard in elke website: schone semantische HTML, schema markup, sitemap, snelle Core Web Vitals en correcte metadata. Lokale vindbaarheid (SEO Rotterdam) is optioneel uit te breiden.",
  },
  {
    q: "Waarom Next.js en niet WordPress?",
    a: "Next.js is sneller, veiliger en onderhoudsarmer dan WordPress. Geen plugin-updates, geen openbare inlog, volledige controle over snelheid en SEO. Voor ZZP en MKB in Rotterdam die snelheid en vindbaarheid belangrijk vinden, is Next.js meestal de betere keuze.",
  },
  {
    q: "Werken jullie ook buiten Rotterdam?",
    a: "Ja, WebBoost Partner werkt landelijk, met het zwaartepunt in Rotterdam en omgeving (Capelle aan den IJssel, Krimpen, Ridderkerk, Barendrecht, Schiedam). Kennismaken kan op locatie of online.",
  },
];

export default function WebsiteRotterdamPage() {
  return (
    <>
      {/* ✅ NIEUW: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.webboostpartner.nl/website-laten-maken-rotterdam#webpage",
                url: "https://www.webboostpartner.nl/website-laten-maken-rotterdam",
                name: "Website Laten Maken Rotterdam | Vanaf €1.950 | WebBoost Partner",
                description:
                  "Website laten maken in Rotterdam? WebBoost Partner bouwt razendsnelle Next.js websites (95+ PageSpeed) voor ZZP & MKB. Vaste prijs, SEO inbegrepen.",
                isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
                about: { "@id": "https://www.webboostpartner.nl/#organization" },
                inLanguage: "nl-NL",
              },
              {
                "@type": "Service",
                "@id": "https://www.webboostpartner.nl/website-laten-maken-rotterdam#service",
                name: "Website laten maken Rotterdam",
                serviceType: "Webdesign en Next.js-websiteontwikkeling",
                description:
                  "Website laten maken in Rotterdam met Next.js: 95+ PageSpeed, SEO inbegrepen, vaste prijs vanaf €1.950, 100% eigenaarschap van de code.",
                provider: { "@id": "https://www.webboostpartner.nl/#organization" },
                areaServed: [
                  { "@type": "City", name: "Rotterdam" },
                  { "@type": "Country", name: "Nederland" },
                ],
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: "1950",
                  description: "Website laten maken vanaf €1.950 excl. btw",
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/website-laten-maken-rotterdam#faq",
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
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Website laten maken Rotterdam
          </p>

          <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl max-w-none">
            Website laten maken in <span className="text-[#FF4500]">Rotterdam</span>
          </h1>

          <p className="mt-6 text-xl max-w-3xl leading-relaxed font-semibold">
            Een website laten maken in Rotterdam die snel laadt, beter scoort in Google en structureel aanvragen oplevert. Ik bouw het voor je met een vaste prijs, SEO inbegrepen en nul templates.
          </p>

          {/* ✅ NIEUW: TL;DR */}
          <div className="mt-6 border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A19] max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] mb-2 font-bold">
              Kort antwoord
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]">
              Een website laten maken in Rotterdam kost bij WebBoost Partner <strong>vanaf €1.950 excl. btw</strong>. U krijgt een Next.js-website met <strong>95+ PageSpeed</strong>, SEO inbegrepen, vaste prijs en <strong>100% eigenaarschap</strong> van de code. Doorlooptijd: 3–6 weken.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono uppercase tracking-wider text-[#525252]">
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00B050] rounded-full" /> 95+ PageSpeed</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00B050] rounded-full" /> SEO inbegrepen</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00B050] rounded-full" /> Vaste prijs vanaf €1.950</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00B050] rounded-full" /> Gratis adviesgesprek</li>
          </ul>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/contact?intent=advies"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Vraag vrijblijvend adviesgesprek aan <ArrowRight size={18} />
            </Link>
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Bekijk pakketten & prijzen
            </Link>
          </div>
        </div>
      </section>

      {/* Recent werk */}
      <section className="bg-[#FAFAFA] py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">// Recent werk</p>
            <h2 className="font-heading font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[0.95]">
              Websites die<br />presteren.
            </h2>
          </div>
          <div className="lg:col-span-7 prose-brutal">
            <p>
              Van lokale dienstverleners tot high-end projecten: elke website die ik bouw
              laadt razendsnel en is gericht op het genereren van aanvragen.
              Zo bracht ik de laadtijd van <strong>Marley&apos;s Kraamzorg</strong> terug naar
              een perfecte score van 100/100, wat direct leidde tot meer online aanmeldingen.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 mt-6 bg-[#FF4500] text-black px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors border-2 border-black hover:-translate-y-1 hover:shadow-brutal-sm"
            >
              Bekijk alle recente projecten <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom een professionele website het verschil maakt</h2>
          <p>
            Uw website is vaak het eerste (en soms enige) contactmoment met een potentiële klant.
            In minder dan drie seconden bepaalt iemand of uw bedrijf betrouwbaar en professioneel genoeg is
            om contact mee op te nemen.
          </p>
          <p>
            Een trage of onduidelijke website kost u aanvragen. Een snelle, conversiegerichte website
            levert ze op. Goed <strong>webdesign Rotterdam</strong> is daarom geen kostenpost,
            maar een investering die direct bijdraagt aan meer leads en omzet.
          </p>
          <p>Met een sterke website:</p>
          <ul>
            <li><strong>Bouwt u vertrouwen</strong> — bezoekers voelen direct dat u serieus bent.</li>
            <li><strong>Genereert u meer aanvragen</strong> — duidelijke call-to-actions en een logische structuur.</li>
            <li>
              <strong>Wordt u beter gevonden</strong> — sterke technische SEO en uitstekende{" "}
              <Link href="/seo-rotterdam" className="text-[#FF4500] underline decoration-2 hover:bg-[#FF4500] hover:text-white transition-colors px-1">
                lokale vindbaarheid
              </Link>.
            </li>
            <li><strong>Bespaart u tijd</strong> — minder onderhoud, geen plugin-problemen, stabiele prestaties.</li>
          </ul>

          <h2>Wat u krijgt bij WebBoost Partner</h2>
          <p>
            Elke website die ik bouw is een compleet digitaal fundament: strategie, design,
            techniek en vindbaarheid in één. Geen half werk, geen open eindjes.
          </p>
          <ul>
            <li><strong>Maatwerk design</strong> — geen templates, maar een unieke uitstraling die past bij uw merk en doelgroep.</li>
            <li><strong>95+ PageSpeed score</strong> — pagina&apos;s laden in minder dan 2 seconden, ook op mobiel.</li>
            <li><strong>Technische SEO inbegrepen</strong> — schema markup, semantische HTML, sitemap en Core Web Vitals optimaal.</li>
            <li><strong>Conversiegerichte structuur</strong> — elke pagina en knop is gericht op het genereren van aanvragen.</li>
            <li><strong>Volledig responsief</strong> — perfecte weergave op telefoon, tablet en desktop.</li>
            <li><strong>Vaste prijs vooraf</strong> — u weet precies waar u aan toe bent, zonder verrassingen achteraf.</li>
            <li><strong>Direct contact met de bouwer</strong> — u werkt direct met mij (Ron), niet met accountmanagers of freelancers.</li>
            <li><strong>100% eigenaarschap</strong> — u krijgt een standalone Git-repository, geen platform lock-in.</li>
          </ul>

          <h2>Website laten maken voor ZZP&apos;ers en MKB in Rotterdam</h2>
          <p>
            Ik werk vooral voor ondernemers in Rotterdam en de directe omgeving.
            Of u nu een aannemer bent in Capelle aan den IJssel, een coach in Hillegersberg,
            een fysiotherapeut in Kralingen of een dienstverlener in het centrum: uw website
            moet uw vakmanschap zichtbaar maken en nieuwe klanten opleveren.
          </p>
          <p>
            Ik bouw websites die vandaag sterk staan én morgen eenvoudig uit te breiden zijn
            met nieuwe diensten, extra pagina&apos;s of meerdere locaties. Zo groeit uw online aanwezigheid
            mee met uw bedrijf.
          </p>

          <h2>Waarom Next.js in plaats van WordPress?</h2>
          <p>
            Veel websites starten op WordPress. Dat werkt prima — tot de plugins, updates en
            beveiligingsproblemen de overhand nemen. Next.js (het framework achter sites van
            onder andere Nike, Netflix en Notion) biedt een moderne, schone technische basis:
          </p>
          <ul>
            <li><strong>Sneller</strong> — geen overbodige code of trage plugins.</li>
            <li><strong>Veiliger</strong> — minder aanvalsoppervlak, geen kwetsbare plugins.</li>
            <li><strong>Beter voor Google</strong> — volledige controle over snelheid en structuur.</li>
            <li><strong>Toekomstbestendig</strong> — klaar voor groei zonder technische schuld.</li>
          </ul>
          <p>
            Voor Rotterdamse ondernemers betekent dit: een website die sneller laadt,
            professioneler oogt en structureel meer resultaat oplevert. Dat is het verschil
            met gemiddeld <strong>webdesign Rotterdam</strong>.
          </p>

          {/* ✅ NIEUW: interne links naar vergelijkingspagina's */}
          <p>
            Wil je eerst de afweging maken? Lees{" "}
            <Link href="/nextjs-vs-wordpress">Next.js vs WordPress</Link> of bekijk{" "}
            <Link href="/wordpress-naar-nextjs">WordPress naar Next.js migratie</Link>.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        {/* ✅ NIEUW: FAQ daadwerkelijk gerenderd */}
        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="website-laten-maken-rotterdam" />
        </div>
      </article>

      <CTASection
        title="Klaar voor een website die klanten oplevert?"
        subtitle="Vraag een gratis adviesgesprek aan. Ik bekijk je situatie en geef eerlijk advies — zonder verplichtingen."
        button="Plan adviesgesprek"
        href="/contact?intent=advies"
      />
    </>
  );
}
