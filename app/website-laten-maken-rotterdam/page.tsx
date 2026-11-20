import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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
      {/* JSON-LD - Ongewijzigd gelaten voor SEO */}
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
      <section className="bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-6">
            Website laten maken Rotterdam
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
            Website laten maken in <span className="text-brand italic">Rotterdam</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-3xl leading-relaxed text-foreground-muted font-sans mb-10">
            Een website laten maken in Rotterdam die snel laadt, beter scoort in Google en structureel aanvragen oplevert. Ik bouw het voor je met een vaste prijs, SEO inbegrepen en nul templates.
          </p>

          {/* TL;DR Box */}
          <div className="bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle max-w-3xl mb-10">
            <p className="font-sans text-xs uppercase tracking-widest text-brand font-bold mb-3">
              Kort antwoord
            </p>
            <p className="text-base leading-relaxed text-foreground-muted font-sans">
              Een website laten maken in Rotterdam kost bij WebBoost Partner <strong className="text-foreground font-semibold">vanaf €1.950 excl. btw</strong>. U krijgt een Next.js-website met <strong className="text-foreground font-semibold">95+ PageSpeed</strong>, SEO inbegrepen, vaste prijs en <strong className="text-foreground font-semibold">100% eigenaarschap</strong> van de code. Doorlooptijd: 3–6 weken.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-foreground mb-12">
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> 95+ PageSpeed
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> SEO inbegrepen
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> Vaste prijs vanaf €1.950
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> Gratis adviesgesprek
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/contact?intent=advies"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-brand-hover transition-all duration-300"
            >
              Vraag vrijblijvend adviesgesprek aan <ArrowRight size={18} />
            </Link>
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2 bg-background-secondary text-foreground font-sans font-medium px-8 py-4 rounded-sm hover:bg-border-subtle transition-all duration-300"
            >
              Bekijk pakketten & prijzen
            </Link>
          </div>
        </div>
      </section>

      {/* Recent werk */}
      <section className="bg-background-secondary py-24 sm:py-32 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-4">Recent werk</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-[1.1] tracking-tight">
              Websites die<br />presteren.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-foreground-muted font-sans mb-8">
              Van lokale dienstverleners tot high-end projecten: elke website die ik bouw
              laadt razendsnel en is gericht op het genereren van aanvragen.
              Zo bracht ik de laadtijd van <strong className="text-foreground font-semibold">Marley&apos;s Kraamzorg</strong> terug naar
              een perfecte score van 100/100, wat direct leidde tot meer online aanmeldingen.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-foreground text-white px-8 py-4 font-sans font-medium text-sm rounded-sm hover:bg-foreground/90 transition-colors"
            >
              Bekijk alle recente projecten <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Content / Artikel */}
      <article className="bg-background py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-4 mb-6">Waarom een professionele website het verschil maakt</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Uw website is vaak het eerste (en soms enige) contactmoment met een potentiële klant.
            In minder dan drie seconden bepaalt iemand of uw bedrijf betrouwbaar en professioneel genoeg is
            om contact mee op te nemen.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Een trage of onduidelijke website kost u aanvragen. Een snelle, conversiegerichte website
            levert ze op. Goed <strong className="text-foreground font-semibold">webdesign Rotterdam</strong> is daarom geen kostenpost,
            maar een investering die direct bijdraagt aan meer leads en omzet.
          </p>
          
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg font-medium">Met een sterke website:</p>
          <ul className="space-y-4 mb-10 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Bouwt u vertrouwen</strong> — bezoekers voelen direct dat u serieus bent.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Genereert u meer aanvragen</strong> — duidelijke call-to-actions en een logische structuur.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span>
                <strong className="text-foreground font-semibold">Wordt u beter gevonden</strong> — sterke technische SEO en uitstekende{" "}
                <Link href="/seo-rotterdam" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
                  lokale vindbaarheid
                </Link>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Bespaart u tijd</strong> — minder onderhoud, geen plugin-problemen, stabiele prestaties.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-16 mb-6">Wat u krijgt bij WebBoost Partner</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Elke website die ik bouw is een compleet digitaal fundament: strategie, design,
            techniek en vindbaarheid in één. Geen half werk, geen open eindjes.
          </p>
          <ul className="space-y-4 mb-10 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Maatwerk design</strong> — geen templates, maar een unieke uitstraling die past bij uw merk en doelgroep.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">95+ PageSpeed score</strong> — pagina&apos;s laden in minder dan 2 seconden, ook op mobiel.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Technische SEO inbegrepen</strong> — schema markup, semantische HTML, sitemap en Core Web Vitals optimaal.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Conversiegerichte structuur</strong> — elke pagina en knop is gericht op het genereren van aanvragen.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Volledig responsief</strong> — perfecte weergave op telefoon, tablet en desktop.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Vaste prijs vooraf</strong> — u weet precies waar u aan toe bent, zonder verrassingen achteraf.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Direct contact met de bouwer</strong> — u werkt direct met mij (Ron), niet met accountmanagers of freelancers.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">100% eigenaarschap</strong> — u krijgt een standalone Git-repository, geen platform lock-in.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-16 mb-6">Website laten maken voor ZZP&apos;ers en MKB in Rotterdam</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Ik werk vooral voor ondernemers in Rotterdam en de directe omgeving.
            Of u nu een aannemer bent in Capelle aan den IJssel, een coach in Hillegersberg,
            een fysiotherapeut in Kralingen of een dienstverlener in het centrum: uw website
            moet uw vakmanschap zichtbaar maken en nieuwe klanten opleveren.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Ik bouw websites die vandaag sterk staan én morgen eenvoudig uit te breiden zijn
            met nieuwe diensten, extra pagina&apos;s of meerdere locaties. Zo groeit uw online aanwezigheid
            mee met uw bedrijf.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-16 mb-6">Waarom Next.js in plaats van WordPress?</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Veel websites starten op WordPress. Dat werkt prima — tot de plugins, updates en
            beveiligingsproblemen de overhand nemen. Next.js (het framework achter sites van
            onder andere Nike, Netflix en Notion) biedt een moderne, schone technische basis:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Sneller</strong> — geen overbodige code of trage plugins.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Veiliger</strong> — minder aanvalsoppervlak, geen kwetsbare plugins.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Beter voor Google</strong> — volledige controle over snelheid en structuur.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="text-brand shrink-0 mt-1" size={20} />
              <span><strong className="text-foreground font-semibold">Toekomstbestendig</strong> — klaar voor groei zonder technische schuld.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Voor Rotterdamse ondernemers betekent dit: een website die sneller laadt,
            professioneler oogt en structureel meer resultaat oplevert. Dat is het verschil
            met gemiddeld <strong className="text-foreground font-semibold">webdesign Rotterdam</strong>.
          </p>

          <p className="text-foreground-muted leading-relaxed mb-12 text-lg">
            Wil je eerst de afweging maken? Lees{" "}
            <Link href="/nextjs-vs-wordpress" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">Next.js vs WordPress</Link> of bekijk{" "}
            <Link href="/wordpress-naar-nextjs" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">WordPress naar Next.js migratie</Link>.
          </p>

          <div className="pt-12 border-t border-border-subtle mt-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Veelgestelde vragen</h2>
            <FAQ items={faqs} schemaId="website-laten-maken-rotterdam" />
          </div>
        </div>
      </article>

      {/* CTA Sectie */}
      <CTASection
        title="Klaar voor een website die klanten oplevert?"
        subtitle="Vraag een gratis adviesgesprek aan. Ik bekijk je situatie en geef eerlijk advies — zonder verplichtingen."
        button="Plan adviesgesprek"
        href="/contact?intent=advies"
      />
    </>
  );
}
