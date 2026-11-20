import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Rotterdam | Lokale SEO die uw website vindbaar maakt | WebBoost Partner",
  description:
    "SEO Rotterdam voor ondernemers die gevonden willen worden. Lokale SEO, technische SEO en Core Web Vitals. Specialist in Next.js websites met 95+ PageSpeed. Gratis analyse.",
  alternates: { canonical: "/seo-rotterdam" },
  keywords: ["SEO Rotterdam", "lokale SEO Rotterdam", "SEO specialist Rotterdam", "technische SEO", "vindbare website Rotterdam", "SEO bureau Rotterdam"],
  openGraph: {
    title: "SEO Rotterdam | Lokale SEO die resultaat oplevert",
    description: "SEO voor Rotterdamse ondernemers. Technische SEO, lokale vindbaarheid en Core Web Vitals. Gratis analyse binnen 48 uur.",
    url: "https://www.webboostpartner.nl/seo-rotterdam",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Rotterdam | Lokale SEO die resultaat oplevert",
    description: "Technische SEO, lokale vindbaarheid en Core Web Vitals voor ondernemers in Rotterdam.",
  },
};

interface MetricItem { k: string; v: string; num: string }
interface FAQItem { q: string; a: string }

const faqs: FAQItem[] = [
  {
    q: "Wat kost SEO in Rotterdam?",
    a: "WebBoost Partner start elk SEO-traject met een gratis analyse. Daarna volgt een voorstel op maat, afhankelijk van de huidige staat van je website, concurrentie en doelen. SEO is standaard inbegrepen bij elke website uit de pakketten; losse SEO-trajecten worden per maand of per project geoffreerd.",
  },
  {
    q: "Hoe lang duurt het voordat ik resultaat zie van SEO?",
    a: "De eerste technische verbeteringen zijn binnen 2 tot 4 weken meetbaar. Voor duurzame positiestijgingen op concurrerende zoekwoorden in Rotterdam moet je rekenen op 3 tot 6 maanden. Lokale SEO (Google Business Profile, NAP-consistentie) levert vaak sneller zichtbaar resultaat.",
  },
  {
    q: "Wat is het verschil tussen technische SEO en lokale SEO?",
    a: "Technische SEO gaat over hoe goed Google je website kan lezen en indexeren: schone HTML, schema markup, sitemap, Core Web Vitals en canonical URLs. Lokale SEO gaat over hoe zichtbaar je bent in Rotterdam: Google Business Profile, lokale schema markup, NAP-consistentie en Rotterdam-gerichte content.",
  },
  {
    q: "Werken jullie met Google Business Profile?",
    a: "Ja. WebBoost Partner optimaliseert je Google Business Profile volledig: categorieën, beschrijving, foto's, openingstijden, diensten en reviewstrategie. Dit is een van de snelste manieren om lokaal in Rotterdam zichtbaar te worden.",
  },
  {
    q: "Kan ik SEO los afnemen of alleen bij een website?",
    a: "Beide. SEO is standaard inbegrepen bij elke website uit de pakketten (technische SEO). Daarnaast kun je een los doorlopend SEO-traject afnemen voor bestaande websites, ongeacht of die door WebBoost Partner zijn gebouwd.",
  },
  {
    q: "Doen jullie ook linkbuilding?",
    a: "Ja, gericht op lokale en relevante vermeldingen: regionale platforms, branchegidsen en samenwerkingspartners in Rotterdam. Geen massale linknetwerken, maar duurzame, relevante links die Google waardeert.",
  },
];

export default function SeoRotterdamPage() {
  return (
    <>
      {/* JSON-LD Schema - Ongewijzigd */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.webboostpartner.nl/seo-rotterdam#webpage",
                url: "https://www.webboostpartner.nl/seo-rotterdam",
                name: "SEO Rotterdam | Lokale SEO die uw website vindbaar maakt",
                description: "SEO Rotterdam voor ondernemers. Lokale SEO, technische SEO en Core Web Vitals. Specialist in Next.js.",
                isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
                about: { "@id": "https://www.webboostpartner.nl/#organization" },
                author: { "@id": "https://www.webboostpartner.nl/over-mij#person" },
                inLanguage: "nl-NL",
              },
              {
                "@type": "Service",
                "@id": "https://www.webboostpartner.nl/seo-rotterdam#service",
                name: "SEO Rotterdam",
                serviceType: ["SEO", "Lokale SEO", "Technische SEO", "Core Web Vitals optimalisatie"],
                description: "Lokale en technische SEO voor ondernemers in Rotterdam. Inclusief Core Web Vitals, Google Business Profile en schema markup.",
                provider: { "@id": "https://www.webboostpartner.nl/#organization" },
                areaServed: [
                  { "@type": "City", name: "Rotterdam" },
                  { "@type": "City", name: "Capelle aan den IJssel" },
                  { "@type": "City", name: "Schiedam" },
                  { "@type": "City", name: "Barendrecht" },
                ],
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: "0",
                  description: "Gratis SEO-analyse. Doorlopende SEO-trajecten op aanvraag.",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.webboostpartner.nl/seo-rotterdam#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webboostpartner.nl/" },
                  { "@type": "ListItem", position: 2, name: "SEO Rotterdam", item: "https://www.webboostpartner.nl/seo-rotterdam" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/seo-rotterdam#faq",
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
            SEO Rotterdam
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
            SEO Rotterdam die uw website <span className="text-brand italic">vindbaar maakt</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl leading-relaxed text-foreground-muted font-sans mb-10">
            Een website heeft pas waarde als hij gevonden wordt. WebBoost Partner helpt
            Rotterdamse ondernemers met <strong className="text-foreground font-semibold">SEO Rotterdam</strong>: technische SEO,
            lokale vindbaarheid en Core Web Vitals die meetbaar meer aanvragen opleveren.
          </p>

          {/* TL;DR */}
          <div className="bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle max-w-3xl mb-10">
            <p className="font-sans text-xs uppercase tracking-widest text-brand font-bold mb-3">Kort antwoord</p>
            <p className="text-base leading-relaxed text-foreground-muted font-sans">
              WebBoost Partner verzorgt <strong className="text-foreground font-semibold">technische SEO</strong> en <strong className="text-foreground font-semibold">lokale SEO</strong> voor ZZP en MKB in Rotterdam. SEO is standaard inbegrepen bij elke website uit de pakketten; losse SEO-trajecten starten met een <strong className="text-foreground font-semibold">gratis analyse</strong>. Next.js-websites halen standaard 95+ PageSpeed, wat direct bijdraagt aan je ranking.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-foreground mb-12">
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> Lokale SEO
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> Technische SEO
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> 95+ PageSpeed
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> Gratis analyse
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/contact?intent=analyse"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-brand-hover transition-all duration-300"
            >
              Vraag gratis SEO-analyse aan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS SECTIE */}
      <section className="bg-background-secondary py-24 sm:py-32 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            { k: "Technische SEO", v: "Schema, sitemap, semantische HTML", num: "100%" },
            { k: "Lokale SEO", v: "Rotterdam + regio focus", num: "Top 3" },
            { k: "Core Web Vitals", v: "LCP, INP, CLS optimalisatie", num: "95+" },
          ].map((m: MetricItem, index: number) => (
            <div key={index} className="bg-background border border-border-subtle p-8 sm:p-10 rounded-sm shadow-soft flex flex-col items-start">
              <p className="font-sans text-xs uppercase tracking-widest text-foreground-muted font-semibold mb-4">{m.k}</p>
              <p className="font-serif text-6xl text-brand mb-4">{m.num}</p>
              <p className="text-foreground-muted font-sans leading-relaxed">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT / ARTIKEL */}
      <article className="bg-background py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <p className="text-sm font-sans text-foreground-muted mb-10">
            Geschreven door{" "}
            <Link href="/over-mij" className="text-brand font-medium underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              Ron — WebBoost Partner
            </Link>
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Waarom SEO Rotterdam het verschil maakt</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            SEO is geen trucje. Het is een combinatie van techniek, structuur en autoriteit. Voor ondernemers in Rotterdam begint dat bij een website die Google goed kan lezen én die lokaal relevant is.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Mijn aanpak rust op drie pijlers: <strong className="text-foreground font-semibold">technische SEO</strong> (hoe begrijpt Google uw site), <strong className="text-foreground font-semibold">lokale SEO</strong> (hoe zichtbaar bent u in Rotterdam) en <strong className="text-foreground font-semibold">contentstructuur</strong> (wat u vertelt aan bezoekers én zoekmachines).
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Technische SEO</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Technische SEO is het fundament van iedere vindbare website. Dit implementeer ik standaard:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Schema.org markup</strong> — gestructureerde data voor rich snippets.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Semantische HTML</strong> — correcte heading-structuur en toegankelijke markup.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Sitemap.xml</strong> — direct ingediend bij Google Search Console.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Robots.txt</strong> — duidelijke instructies voor crawlers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Open Graph tags</strong> — professionele previews op social media.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Canonical URLs</strong> — voorkomt duplicate content.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">SSL/HTTPS</strong> — beveiligde verbinding als rankingfactor.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Lokale SEO Rotterdam</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Voor lokale ondernemers is vindbaarheid in Rotterdam cruciaal. Wanneer iemand zoekt op &ldquo;dienst + Rotterdam&rdquo;, wilt u bovenaan staan. Daarom optimaliseer ik gericht op lokale signalen:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Google Business Profile</strong> — volledig geoptimaliseerd profiel.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Lokale schema markup</strong> — LocalBusiness structured data.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">NAP-consistentie</strong> — identieke bedrijfsgegevens overal.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Rotterdam-gerichte content</strong> — pagina&apos;s die uw regio benadrukken.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Lokale linkbuilding</strong> — vermeldingen op regionale platforms.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Ik werk voor klanten in heel Rotterdam en omgeving: Centrum, Kralingen, Hillegersberg, Feijenoord, Capelle aan den IJssel, Schiedam en Barendrecht. Elke wijk heeft eigen zoekpatronen — daar speel ik op in.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Core Web Vitals optimalisatie</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Core Web Vitals zijn officiële Google rankingfactoren. Ze meten de echte gebruikerservaring:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">LCP</strong> — grootste element laadt snel.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">INP</strong> — snelle reactie op interacties.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">CLS</strong> — geen onverwachte layout-verschuivingen.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Door te bouwen in <strong className="text-foreground font-semibold">Next.js</strong> behaal ik standaard PageSpeed scores van 95+. Dat komt door SSG, automatische image-optimalisatie en edge delivery.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">SEO voor Next.js websites</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Next.js biedt sterke SEO-voordelen ten opzichte van klassieke CMS&apos;en:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">SSR / SSG</strong> — Google ziet direct volledige, snelle pagina&apos;s.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Metadata API</strong> — perfecte titles en descriptions per pagina.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">next/image</strong> — geoptimaliseerde afbeeldingen (AVIF/WebP).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">next/font</strong> — lokale fonts zonder vertraging.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            De combinatie van Next.js en technische SEO geeft de beste uitgangspositie in Google — zeker voor concurrentiegevoelige zoekwoorden in Rotterdam.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">SEO-traject en werkwijze</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Elk traject begint met een <strong className="text-foreground font-semibold">gratis SEO-analyse</strong>. Ik bekijk uw website, concurrentie en kansen in Rotterdam. Daarna volgt een helder plan:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Maand 1</strong> — audit, keyword research, concurrentieanalyse.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Maand 2</strong> — technische optimalisaties en lokale SEO.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Maand 3</strong> — content, linkbuilding en monitoring.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Doorlopend</strong> — rapportage en bijsturing.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            U krijgt maandelijks een overzichtelijk rapport met posities, verkeer en conversies.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Website laten maken + SEO in één</h2>
          <p className="text-foreground-muted leading-relaxed mb-12 text-lg">
            De sterkste resultaten ontstaan wanneer website en SEO vanaf het begin samen worden opgezet. Bekijk ook{" "}
            <Link href="/website-laten-maken-rotterdam" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              website laten maken in Rotterdam
            </Link>{" "}
            — dan start u met een technisch perfecte basis én een SEO-strategie die daarop aansluit. SEO is standaard inbegrepen bij elk pakket: bekijk de{" "}
            <Link href="/pakketten" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              pakketten en prijzen
            </Link>.
          </p>

          <div className="pt-12 border-t border-border-subtle mt-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Veelgestelde vragen</h2>
            <FAQ items={faqs} schemaId="seo-rotterdam" />
          </div>
        </div>
      </article>

      {/* CTA Sectie */}
      <CTASection
        title="Gratis SEO-analyse aanvragen"
        subtitle="Stuur uw website-URL en ontvang binnen 48 uur een vrijblijvend advies met concrete actiepunten voor Rotterdam."
        button="Analyse aanvragen"
        href="/contact?intent=analyse"
      />
    </>
  );
}
