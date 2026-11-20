import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress naar Next.js migratie | Behoud rankings, 10x sneller | WebBoost Partner",
  description:
    "Veilig overstappen van WordPress naar Next.js zonder verlies van Google-posities. Bliksemsnelle laadtijden, minder onderhoud en een stabiele website. Migratie vanaf €1.495.",
  alternates: { canonical: "/wordpress-naar-nextjs" },
  keywords: ["WordPress naar Next.js", "WordPress migratie", "website migratie", "WordPress alternatief", "trage WordPress website", "Next.js migratie", "WordPress naar moderne website"],
  openGraph: {
    title: "WordPress naar Next.js migratie | Rankings behouden, site 10x sneller",
    description: "Overstappen van WordPress zonder SEO-verlies. Sneller, veiliger, minder onderhoud. Vaste prijs, gratis migratie-analyse.",
    url: "https://www.webboostpartner.nl/wordpress-naar-nextjs",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress naar Next.js migratie | Rankings behouden",
    description: "Veilig overstappen. Bliksemsnel, minder onderhoud, Google-posities behouden. Gratis analyse.",
  },
};

interface FAQItem { q: string; a: string }

const faqs: FAQItem[] = [
  {
    q: "Verlies ik mijn posities in Google tijdens de migratie?",
    a: "Nee, mits de migratie zorgvuldig wordt uitgevoerd. Bestaande URL's, metadata en interne links worden in kaart gebracht. Waar nodig richten we 301-redirects in. In de praktijk stijgen websites vaak in ranking na een migratie dankzij de veel betere laadsnelheid en schone code.",
  },
  {
    q: "Wat gebeurt er met mijn teksten, blogs en afbeeldingen?",
    a: "Al uw content wordt volledig overgezet. U kunt WordPress houden als 'headless' CMS (u werkt zoals u gewend bent), of overstappen naar een moderner, onderhoudsarm systeem. Dat kiezen we samen.",
  },
  {
    q: "Hoe lang duurt een migratie?",
    a: "Voor een gemiddelde MKB-website duurt het 2 tot 4 weken. Grotere sites met veel pagina's of maatwerk krijgen vooraf een heldere planning.",
  },
  {
    q: "Wat kost een WordPress naar Next.js migratie?",
    a: "Migraties starten vanaf €1.495 excl. btw. De exacte prijs hangt af van de omvang van uw huidige site. U krijgt altijd vooraf een vaste prijsopgave — geen verrassingen.",
  },
  {
    q: "Kan ik na de migratie zelf content aanpassen?",
    a: "Ja. We koppelen een gebruiksvriendelijk CMS. U past teksten, afbeeldingen en blogs zelf aan — zonder plugin-updates of technische risico's.",
  },
  {
    q: "Ik ken Next.js niet. Is dat een probleem?",
    a: "Nee. U hoeft er niets van te weten. Next.js is de techniek achter de schermen (gebruikt door o.a. Nike en Netflix). U merkt vooral: de site is sneller, stabieler en veiliger. Het beheer blijft eenvoudig.",
  },
];

export default function WordPressNaarNextjsPage() {
  return (
    <>
      {/* Schema - Ongewijzigd */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.webboostpartner.nl/wordpress-naar-nextjs#webpage",
                url: "https://www.webboostpartner.nl/wordpress-naar-nextjs",
                name: "WordPress naar Next.js migratie | Behoud rankings, 10x sneller",
                description: "Veilig overstappen van WordPress naar Next.js zonder verlies van Google-posities. Sneller, veiliger, minder onderhoud.",
                isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
                about: { "@id": "https://www.webboostpartner.nl/#organization" },
                author: { "@id": "https://www.webboostpartner.nl/over-mij#person" },
                inLanguage: "nl-NL",
              },
              {
                "@type": "Service",
                "@id": "https://www.webboostpartner.nl/wordpress-naar-nextjs#service",
                name: "WordPress naar Next.js migratie",
                serviceType: "Website-migratie",
                description: "Veilige website-migratie van WordPress naar Next.js met behoud van SEO-posities, 301-redirects en vaste prijs vanaf €1.495.",
                provider: { "@id": "https://www.webboostpartner.nl/#organization" },
                areaServed: [
                  { "@type": "City", name: "Rotterdam" },
                  { "@type": "Country", name: "Nederland" },
                ],
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: "1495",
                  description: "WordPress naar Next.js migratie vanaf €1.495 excl. btw",
                },
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-6">
            WordPress naar Next.js
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
            WordPress naar <span className="text-brand italic">Next.js</span> migratie
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl leading-relaxed text-foreground-muted font-sans mb-10">
            Is uw WordPress-site traag op mobiel, lastig bij te houden of stagneert de
            vindbaarheid? Een migratie naar een moderne website lost dat op:{" "}
            <strong className="text-foreground font-semibold">sneller, veiliger en beter vindbaar</strong> — met behoud van uw
            Google-posities. U hoeft niets van de techniek te weten; u merkt vooral het
            resultaat.
          </p>

          {/* TL;DR */}
          <div className="bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle max-w-3xl mb-10">
            <p className="font-sans text-xs uppercase tracking-widest text-brand font-bold mb-3">Kort antwoord</p>
            <p className="text-base leading-relaxed text-foreground-muted font-sans">
              Een migratie van WordPress naar Next.js kost bij WebBoost Partner <strong className="text-foreground font-semibold">vanaf €1.495 excl. btw</strong>, duurt <strong className="text-foreground font-semibold">2–4 weken</strong> en behoudt je Google-posities via 301-redirects. Je site wordt 10x sneller, heeft geen plugin-onderhoud meer en je behoudt <strong className="text-foreground font-semibold">100% eigenaarschap</strong> van de code.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-foreground mb-12">
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> Rankings behouden
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> 95+ PageSpeed
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> Vanaf €1.495
            </li>
            <li className="flex items-center gap-2">
              <Check size={18} className="text-brand" /> Gratis analyse
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/contact?intent=migratie_analyse"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-brand-hover transition-all duration-300"
            >
              Vraag gratis migratie-analyse aan <ArrowRight size={18} />
            </Link>
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2 bg-background-secondary text-foreground font-sans font-medium px-8 py-4 rounded-sm hover:bg-border-subtle transition-all duration-300"
            >
              Bekijk pakketten
            </Link>
          </div>
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

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Herkent u dit bij uw WordPress-website?</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            WordPress is een sterk systeem en heeft miljoenen websites groot gemaakt.
            Maar naarmate een bedrijf groeit, komen dezelfde problemen terug:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">De site wordt trager</strong> — vooral op de telefoon. Bezoekers haken af.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Updates en plugins kosten tijd en stress</strong> — of iets gaat kapot na een update.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Onderhoud en beveiliging blijven terugkomen</strong> — structureel budget en aandacht.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Google-posities stagneren</strong> — de mobiele ervaring en Core Web Vitals zijn niet sterk genoeg.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Een migratie is dan geen technische hobby, maar een{" "}
            <strong className="text-foreground font-semibold">strategische keuze</strong>: meer aanvragen, minder gedoe, een
            website die meegroeit.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Wat levert de overstap u op?</h2>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Merkbaar sneller</strong> — pagina&apos;s laden in minder dan een seconde. Minder afhakers, meer conversie.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Sterkere positie in Google</strong> — betere scores op de factoren die Google meet (snelheid, stabiliteit, mobiel).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Minder onderhoud</strong> — geen wekelijkse plugin-updates of onverwachte crashes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Veiliger</strong> — geen openbare inlogpagina&apos;s die constant aangevallen worden.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Professionele uitstraling</strong> — maatwerk design, geen standaard thema.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Next.js is de techniek achter sites van onder andere Nike, Netflix en
            Notion. U hoeft die naam niet te onthouden: u merkt vooral dat de site
            sneller en rustiger aanvoelt.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Uw Google-posities blijven behouden</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            De belangrijkste vraag: <em className="italic">&quot;Verlies ik mijn rankings?&quot;</em> Het antwoord
            is: <strong className="text-foreground font-semibold">nee</strong>, als de migratie goed wordt gedaan. Dit doen we standaard:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">URL-mapping + 301-redirects</strong> — oude links blijven werken en geven hun waarde door.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Metadata meenemen</strong> — titles, descriptions, headings en alt-teksten verhuizen mee.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Schema / structured data</strong> — opnieuw en beter ingericht.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Direct na livegang</strong> — nieuwe sitemap indienen in Google Search Console en de crawl in de gaten houden.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            In de praktijk zien we vaak dat rankings na een paar weken{" "}
            <strong className="text-foreground font-semibold">stijgen</strong>, juist door de betere snelheid en schonere techniek.
          </p>

          {/* Snelheidstabel */}
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Snelheid: voor en na</h2>
          <p className="text-foreground-muted leading-relaxed mb-8 text-lg">Gemiddelde resultaten na een migratie van WordPress naar Next.js:</p>
          
          <div className="overflow-x-auto border border-border-subtle rounded-sm shadow-soft mb-8">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="bg-background-secondary text-foreground border-b border-border-subtle">
                  <th className="text-left p-4 sm:p-5 font-semibold uppercase tracking-wider text-xs">Metric</th>
                  <th className="text-left p-4 sm:p-5 font-semibold uppercase tracking-wider text-xs">Voor (WordPress)</th>
                  <th className="text-left p-4 sm:p-5 font-semibold uppercase tracking-wider text-xs text-brand">Na (Next.js)</th>
                </tr>
              </thead>
              <tbody className="text-foreground-muted">
                <tr className="border-b border-border-subtle hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Mobiele laadtijd (LCP)</td>
                  <td className="p-4 sm:p-5">3,4s</td>
                  <td className="p-4 sm:p-5 text-brand font-semibold">0,8s</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Google PageSpeed</td>
                  <td className="p-4 sm:p-5">52/100</td>
                  <td className="p-4 sm:p-5 text-brand font-semibold">95+/100</td>
                </tr>
                <tr className="hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Eerste serverreactie (TTFB)</td>
                  <td className="p-4 sm:p-5">1,8s</td>
                  <td className="p-4 sm:p-5 text-brand font-semibold">0,1s</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-foreground-muted leading-relaxed mb-10">
            Lees hoe Google{" "}
            <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              Core Web Vitals meet
            </a>{" "}
            en waarom dit direct invloed heeft op je ranking.
          </p>

          {/* Wanneer géén goed idee */}
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Wanneer is deze migratie géén goed idee?</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">Eerlijk advies hoort erbij. Een migratie is niet voor iedereen de juiste stap:</p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Je website is net nieuw</strong> (jonger dan 1 jaar) en presteert nog prima.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Je hebt een kleine statische site</strong> zonder groeiproblemen of trage laadtijden.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Je budget ligt onder €1.495</strong> — dan is een migratie niet realistisch.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Je gebruikt specifieke WordPress-plugins</strong> die essentieel zijn en niet eenvoudig te vervangen zijn.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            In die gevallen is het verstandiger om je WordPress-site te optimaliseren
            in plaats van te migreren. Ik zeg dat liever vooraf dan dat je onnodig investeert.
          </p>

          {/* Traject */}
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Het traject in vijf stappen</h2>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-4">1. Analyse van uw huidige site</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">We brengen structuur, sterke pagina&apos;s, content en technische knelpunten in kaart. U krijgt een helder migratieplan en een vaste prijs.</p>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-4">2. Architectuur en content</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">We bepalen wat behouden blijft en waar we meteen conversie verbeteren. U kiest hoe u content wilt beheren: vertrouwd (bijv. WordPress headless) of een moderner, lichter systeem.</p>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-4">3. Herbouw</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">De site wordt schoon opgebouwd. Snelheid, mobiel en design krijgen prioriteit. Geen oude ballast.</p>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-4">4. Redirects en livegang</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">Alle belangrijke URL&apos;s worden getest. Livegang op een rustig moment, daarna direct de sitemap naar Google.</p>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-4">5. Nazorg</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">De eerste weken monitoren we rankings, indexering en eventuele fouten in Search Console. Zo blijft de overstap stabiel.</p>

          {/* Kosten */}
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Wat kost een migratie?</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Migraties starten vanaf <strong className="text-foreground font-semibold">€1.495 excl. btw</strong>. De prijs hangt
            af van het aantal pagina&apos;s en de complexiteit. U krijgt altijd vooraf een
            vaste offerte — geen uurtje-factuurtje.
          </p>
          <p className="text-foreground-muted leading-relaxed mb-12 text-lg">
            Liever een complete nieuwe site met migratie van content? Bekijk ook{" "}
            <Link href="/website-laten-maken-rotterdam" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              website laten maken in Rotterdam
            </Link>{" "}
            of de <Link href="/pakketten" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">pakketten en prijzen</Link>. Twijfel je nog tussen blijven of overstappen? Lees{" "}
            <Link href="/nextjs-vs-wordpress" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">Next.js vs WordPress</Link>.
          </p>

          <div className="pt-12 border-t border-border-subtle mt-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Veelgestelde vragen</h2>
            <FAQ items={faqs} schemaId="wordpress-naar-nextjs" />
          </div>
        </div>
      </article>

      {/* CTA Sectie */}
      <CTASection
        title="Gratis migratie-analyse aanvragen"
        subtitle="Stuur de URL van uw WordPress-site. Ik beoordeel snelheid en kansen en stuur binnen 48 uur een vrijblijvend advies — zonder verplichtingen."
        button="Vraag gratis migratie-analyse aan"
        href="/contact?intent=migratie_analyse"
      />
    </>
  );
}
