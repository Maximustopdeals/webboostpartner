import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      {/* Schema */}
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
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// WordPress naar Next.js</p>
          <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl max-w-none">
            WordPress naar <span className="text-[#FF4500]">Next.js</span> migratie
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed font-semibold">
            Is uw WordPress-site traag op mobiel, lastig bij te houden of stagneert de
            vindbaarheid? Een migratie naar een moderne website lost dat op:{" "}
            <strong>sneller, veiliger en beter vindbaar</strong> — met behoud van uw
            Google-posities. U hoeft niets van de techniek te weten; u merkt vooral het
            resultaat.
          </p>

          {/* ✅ NIEUW: TL;DR */}
          <div className="mt-6 border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A19] max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] mb-2 font-bold">Kort antwoord</p>
            <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]">
              Een migratie van WordPress naar Next.js kost bij WebBoost Partner <strong>vanaf €1.495 excl. btw</strong>, duurt <strong>2–4 weken</strong> en behoudt je Google-posities via 301-redirects. Je site wordt 10x sneller, heeft geen plugin-onderhoud meer en je behoudt <strong>100% eigenaarschap</strong> van de code.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono uppercase tracking-wider text-[#525252]">
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00B050] rounded-full" /> Rankings behouden</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00B050] rounded-full" /> 95+ PageSpeed</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00B050] rounded-full" /> Vanaf €1.495</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#00B050] rounded-full" /> Gratis analyse</li>
          </ul>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/contact?intent=migratie_analyse"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Vraag gratis migratie-analyse aan <ArrowRight size={18} />
            </Link>
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Bekijk pakketten
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          {/* ✅ NIEUW: auteur-signaal */}
          <p className="text-sm font-mono uppercase tracking-wider text-[#525252] mb-6">
            Geschreven door{" "}
            <Link href="/over-mij" className="text-[#FF4500] underline decoration-2">
              Ron — WebBoost Partner
            </Link>
          </p>

          <h2>Herkent u dit bij uw WordPress-website?</h2>
          <p>
            WordPress is een sterk systeem en heeft miljoenen websites groot gemaakt.
            Maar naarmate een bedrijf groeit, komen dezelfde problemen terug:
          </p>
          <ul>
            <li><strong>De site wordt trager</strong> — vooral op de telefoon. Bezoekers haken af.</li>
            <li><strong>Updates en plugins kosten tijd en stress</strong> — of iets gaat kapot na een update.</li>
            <li><strong>Onderhoud en beveiliging blijven terugkomen</strong> — structureel budget en aandacht.</li>
            <li><strong>Google-posities stagneren</strong> — de mobiele ervaring en Core Web Vitals zijn niet sterk genoeg.</li>
          </ul>
          <p>
            Een migratie is dan geen technische hobby, maar een{" "}
            <strong>strategische keuze</strong>: meer aanvragen, minder gedoe, een
            website die meegroeit.
          </p>

          <h2>Wat levert de overstap u op?</h2>
          <ul>
            <li><strong>Merkbaar sneller</strong> — pagina&apos;s laden in minder dan een seconde. Minder afhakers, meer conversie.</li>
            <li><strong>Sterkere positie in Google</strong> — betere scores op de factoren die Google meet (snelheid, stabiliteit, mobiel).</li>
            <li><strong>Minder onderhoud</strong> — geen wekelijkse plugin-updates of onverwachte crashes.</li>
            <li><strong>Veiliger</strong> — geen openbare inlogpagina&apos;s die constant aangevallen worden.</li>
            <li><strong>Professionele uitstraling</strong> — maatwerk design, geen standaard thema.</li>
          </ul>
          <p>
            Next.js is de techniek achter sites van onder andere Nike, Netflix en
            Notion. U hoeft die naam niet te onthouden: u merkt vooral dat de site
            sneller en rustiger aanvoelt.
          </p>

          <h2>Uw Google-posities blijven behouden</h2>
          <p>
            De belangrijkste vraag: <em>&quot;Verlies ik mijn rankings?&quot;</em> Het antwoord
            is: <strong>nee</strong>, als de migratie goed wordt gedaan. Dit doen we standaard:
          </p>
          <ul>
            <li><strong>URL-mapping + 301-redirects</strong> — oude links blijven werken en geven hun waarde door.</li>
            <li><strong>Metadata meenemen</strong> — titles, descriptions, headings en alt-teksten verhuizen mee.</li>
            <li><strong>Schema / structured data</strong> — opnieuw en beter ingericht.</li>
            <li><strong>Direct na livegang</strong> — nieuwe sitemap indienen in Google Search Console en de crawl in de gaten houden.</li>
          </ul>
          <p>
            In de praktijk zien we vaak dat rankings na een paar weken{" "}
            <strong>stijgen</strong>, juist door de betere snelheid en schonere techniek.
          </p>

          {/* ✅ AANGEPAST: snelheid nu in tabelvorm */}
          <h2>Snelheid: voor en na</h2>
          <p>Gemiddelde resultaten na een migratie van WordPress naar Next.js:</p>
          <div className="not-prose my-6 overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_#1A1A19]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-black text-white">
                  <th className="text-left p-3 font-heading uppercase tracking-wider">Metric</th>
                  <th className="text-left p-3 font-heading uppercase tracking-wider">Voor (WordPress)</th>
                  <th className="text-left p-3 font-heading uppercase tracking-wider">Na (Next.js)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-2 border-black">
                  <td className="p-3 font-bold bg-[#FAFAFA]">Mobiele laadtijd (LCP)</td>
                  <td className="p-3">3,4s</td>
                  <td className="p-3 text-green-700 font-bold">0,8s</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="p-3 font-bold bg-[#FAFAFA]">Google PageSpeed</td>
                  <td className="p-3">52/100</td>
                  <td className="p-3 text-green-700 font-bold">95+/100</td>
                </tr>
                <tr className="border-t-2 border-black">
                  <td className="p-3 font-bold bg-[#FAFAFA]">Eerste serverreactie (TTFB)</td>
                  <td className="p-3">1,8s</td>
                  <td className="p-3 text-green-700 font-bold">0,1s</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            Lees hoe Google{" "}
            <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">
              Core Web Vitals meet
            </a>{" "}
            en waarom dit direct invloed heeft op je ranking.
          </p>

          {/* ✅ NIEUW: wanneer géén goed idee */}
          <h2>Wanneer is deze migratie géén goed idee?</h2>
          <p>Eerlijk advies hoort erbij. Een migratie is niet voor iedereen de juiste stap:</p>
          <ul>
            <li><strong>Je website is net nieuw</strong> (jonger dan 1 jaar) en presteert nog prima.</li>
            <li><strong>Je hebt een kleine statische site</strong> zonder groeiproblemen of trage laadtijden.</li>
            <li><strong>Je budget ligt onder €1.495</strong> — dan is een migratie niet realistisch.</li>
            <li><strong>Je gebruikt specifieke WordPress-plugins</strong> die essentieel zijn en niet eenvoudig te vervangen zijn.</li>
          </ul>
          <p>
            In die gevallen is het verstandiger om je WordPress-site te optimaliseren
            in plaats van te migreren. Ik zeg dat liever vooraf dan dat je onnodig investeert.
          </p>

          <h2>Het traject in vijf stappen</h2>
          <h3>1. Analyse van uw huidige site</h3>
          <p>We brengen structuur, sterke pagina&apos;s, content en technische knelpunten in kaart. U krijgt een helder migratieplan en een vaste prijs.</p>
          <h3>2. Architectuur en content</h3>
          <p>We bepalen wat behouden blijft en waar we meteen conversie verbeteren. U kiest hoe u content wilt beheren: vertrouwd (bijv. WordPress headless) of een moderner, lichter systeem.</p>
          <h3>3. Herbouw</h3>
          <p>De site wordt schoon opgebouwd. Snelheid, mobiel en design krijgen prioriteit. Geen oude ballast.</p>
          <h3>4. Redirects en livegang</h3>
          <p>Alle belangrijke URL&apos;s worden getest. Livegang op een rustig moment, daarna direct de sitemap naar Google.</p>
          <h3>5. Nazorg</h3>
          <p>De eerste weken monitoren we rankings, indexering en eventuele fouten in Search Console. Zo blijft de overstap stabiel.</p>

          <h2>Wat kost een migratie?</h2>
          <p>
            Migraties starten vanaf <strong>€1.495 excl. btw</strong>. De prijs hangt
            af van het aantal pagina&apos;s en de complexiteit. U krijgt altijd vooraf een
            vaste offerte — geen uurtje-factuurtje.
          </p>
          <p>
            Liever een complete nieuwe site met migratie van content? Bekijk ook{" "}
            <Link href="/website-laten-maken-rotterdam">website laten maken in Rotterdam</Link>{" "}
            of de <Link href="/pakketten">pakketten en prijzen</Link>. Twijfel je nog tussen blijven of overstappen? Lees{" "}
            <Link href="/nextjs-vs-wordpress">Next.js vs WordPress</Link>.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="wordpress-naar-nextjs" />
        </div>
      </article>

      <CTASection
        title="Gratis migratie-analyse aanvragen"
        subtitle="Stuur de URL van uw WordPress-site. Ik beoordeel snelheid en kansen en stuur binnen 48 uur een vrijblijvend advies — zonder verplichtingen."
        button="Vraag gratis migratie-analyse aan"
        href="/contact?intent=migratie_analyse"
      />
    </>
  );
}
