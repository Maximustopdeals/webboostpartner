import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js vs WordPress | Welke past bij jouw bedrijf? | WebBoost Partner",
  description:
    "Eerlijke vergelijking: WordPress of een moderne website? Snelheid, vindbaarheid, onderhoud en kosten. Ontdek wat het beste past bij de groei van jouw bedrijf.",
  alternates: { canonical: "/nextjs-vs-wordpress" },
  keywords: ["Next.js vs WordPress", "WordPress alternatief", "WordPress of Next.js", "moderne website vs WordPress", "trage WordPress", "website snelheid"],
  openGraph: {
    title: "Next.js vs WordPress | Welke past bij jouw bedrijf?",
    description: "Objectieve vergelijking op snelheid, SEO, onderhoud en veiligheid. Zonder jargon gericht op resultaat voor jouw onderneming.",
    url: "https://www.webboostpartner.nl/nextjs-vs-wordpress",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js vs WordPress | Welke past bij jouw bedrijf?",
    description: "Snelheid, vindbaarheid, onderhoud en kosten, helder vergeleken. Zonder technisch jargon.",
  },
};

interface FAQItem { q: string; a: string }

const faqs: FAQItem[] = [
  {
    q: "Is Next.js beter voor SEO dan WordPress?",
    a: "Next.js biedt standaard technische SEO: schone semantische HTML, snelle Core Web Vitals en volledige controle over metadata. WordPress kan ook goed scoren, maar is afhankelijk van plugins (Yoast, RankMath) en hosting. Voor wie snelheid en vindbaarheid belangrijk vindt, heeft Next.js de betere uitgangspositie.",
  },
  {
    q: "Kan ik zelf content aanpassen in een Next.js-website?",
    a: "Ja. We koppelen een gebruiksvriendelijk CMS (bijv. Sanity of headless WordPress). U past teksten, afbeeldingen en blogs zelf aan — zonder plugin-updates of technische risico's.",
  },
  {
    q: "Wat kost een overstap van WordPress naar Next.js?",
    a: "Een migratie start bij WebBoost Partner vanaf €1.495 excl. btw. De prijs hangt af van het aantal pagina's en de complexiteit. U krijgt altijd vooraf een vaste offerte.",
  },
  {
    q: "Verlies ik mijn Google-posities bij een overstap?",
    a: "Nee, mits de migratie zorgvuldig wordt uitgevoerd. Bestaande URL's, metadata en interne links worden in kaart gebracht en waar nodig voorzien van 301-redirects. In de praktijk stijgen websites vaak in ranking door de betere laadsnelheid.",
  },
  {
    q: "Wanneer is WordPress de betere keuze?",
    a: "WordPress is een goede keuze als je snel en voordelig online wilt, specifieke plugins nodig hebt die je al kent, of alles zelf wilt beheren in een vertrouwde admin-omgeving. Voor eenvoudige sites zonder groeiproblemen is WordPress prima.",
  },
];

export default function NextjsVsWordpressPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.webboostpartner.nl/nextjs-vs-wordpress#webpage",
                url: "https://www.webboostpartner.nl/nextjs-vs-wordpress",
                name: "Next.js vs WordPress | Welke past bij jouw bedrijf?",
                description: "Eerlijke vergelijking tussen WordPress en een moderne website op snelheid, SEO, onderhoud en veiligheid.",
                isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
                about: { "@id": "https://www.webboostpartner.nl/#organization" },
                author: { "@id": "https://www.webboostpartner.nl/over-mij#person" },
                inLanguage: "nl-NL",
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/nextjs-vs-wordpress#faq",
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
            Next.js vs WordPress
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
            Next.js <span className="text-brand italic">vs</span> WordPress
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl leading-relaxed text-foreground-muted font-sans mb-10">
            Twee bewezen manieren om een website te bouwen, elk met eigen sterke
            punten. Geen technisch verhaal, wel een heldere vergelijking: wat levert
            het op voor <strong className="text-foreground font-semibold">snelheid, vindbaarheid, onderhoud en groei</strong> van
            jouw bedrijf?
          </p>

          {/* TL;DR */}
          <div className="bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle max-w-3xl mb-10">
            <p className="font-sans text-xs uppercase tracking-widest text-brand font-bold mb-3">Kort antwoord</p>
            <p className="text-base leading-relaxed text-foreground-muted font-sans">
              <strong className="text-foreground font-semibold">Next.js</strong> is sneller, veiliger en onderhoudsarmer dan WordPress. <strong className="text-foreground font-semibold">WordPress</strong> is flexibeler en goedkoper om te starten. Voor ZZP en MKB in Rotterdam die snelheid en vindbaarheid belangrijk vinden, is Next.js meestal de betere keuze. Voor eenvoudige sites zonder groeiproblemen blijft WordPress prima.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/contact?intent=quickscan"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-brand-hover transition-all duration-300"
            >
              Vraag gratis website-scan aan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SIDE-BY-SIDE */}
      <section className="bg-background-secondary py-24 sm:py-32 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {/* WordPress Card */}
          <div className="bg-background border border-border-subtle p-8 sm:p-10 rounded-sm shadow-soft">
            <p className="font-sans text-xs uppercase tracking-widest text-foreground-muted font-semibold mb-3">WordPress</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-5">De bekende standaard</h2>
            <p className="text-foreground-muted leading-relaxed font-sans">
              WordPress drijft miljoenen websites aan. Het is laagdrempelig, flexibel
              en vertrouwd. Ideaal om snel online te gaan en zelf content te beheren
              in een omgeving die je al kent.
            </p>
          </div>
          
          {/* Next.js Card */}
          <div className="bg-foreground text-white p-8 sm:p-10 rounded-sm shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full pointer-events-none" />
            <p className="font-sans text-xs uppercase tracking-widest text-brand font-semibold mb-3">Moderne website (Next.js)</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-5">De snelle upgrade</h2>
            <p className="leading-relaxed text-gray-300 font-sans">
              Een moderne website laadt sneller, heeft minder onderhoud nodig en scoort
              sterker in Google. Dezelfde techniek die grote merken gebruiken vertaald
              naar een praktische oplossing voor ZZP en MKB.
            </p>
          </div>
        </div>
      </section>

      {/* VERGELIJKINGSTABEL */}
      <section className="bg-background py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8 text-center">
            Next.js vs WordPress in één tabel
          </h2>
          <div className="overflow-x-auto border border-border-subtle rounded-sm shadow-soft">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="bg-background-secondary text-foreground border-b border-border-subtle">
                  <th className="text-left p-4 sm:p-5 font-semibold uppercase tracking-wider text-xs">Criterium</th>
                  <th className="text-left p-4 sm:p-5 font-semibold uppercase tracking-wider text-xs">WordPress</th>
                  <th className="text-left p-4 sm:p-5 font-semibold uppercase tracking-wider text-xs text-brand">Next.js</th>
                </tr>
              </thead>
              <tbody className="text-foreground-muted">
                <tr className="border-b border-border-subtle hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Snelheid</td>
                  <td className="p-4 sm:p-5">Afhankelijk van hosting, thema en plugins</td>
                  <td className="p-4 sm:p-5">Standaard 95+ PageSpeed, &lt;1s laadtijd</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">SEO</td>
                  <td className="p-4 sm:p-5">Via plugins (Yoast/RankMath)</td>
                  <td className="p-4 sm:p-5">Technisch in de kern ingebouwd</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Onderhoud</td>
                  <td className="p-4 sm:p-5">Doorlopende plugin-/thema-updates</td>
                  <td className="p-4 sm:p-5">Vrijwel onderhoudsvrij</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Veiligheid</td>
                  <td className="p-4 sm:p-5">Populair doelwit; actief beveiligen nodig</td>
                  <td className="p-4 sm:p-5">Kleiner aanvalsoppervlak</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Kosten start</td>
                  <td className="p-4 sm:p-5">Lager</td>
                  <td className="p-4 sm:p-5">Hogere initiële investering</td>
                </tr>
                <tr className="border-b border-border-subtle hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Eigenaarschap</td>
                  <td className="p-4 sm:p-5">Afhankelijk van hosting/plugins</td>
                  <td className="p-4 sm:p-5">Volledige Git-repository, geen lock-in</td>
                </tr>
                <tr className="hover:bg-background-secondary/30 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-foreground bg-background-secondary/50">Schaalbaarheid</td>
                  <td className="p-4 sm:p-5">Beperkt bij groei</td>
                  <td className="p-4 sm:p-5">Gebouwd voor groei</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONTENT / ARTIKEL */}
      <article className="bg-background-secondary py-24 sm:py-32 border-t border-border-subtle">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <p className="text-sm font-sans text-foreground-muted mb-10">
            Geschreven door{" "}
            <Link href="/over-mij" className="text-brand font-medium underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              Ron — WebBoost Partner
            </Link>
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Waar gaat het écht om?</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Niet om de naam van de techniek, maar om wat jij merkt als ondernemer:
            hoe snel laadt de site op de telefoon, hoe makkelijk vindbaar ben je in
            Google, en hoeveel tijd en stress kost het onderhoud?
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Snelheid en aanvragen</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Elke seconde extra laadtijd kost bezoekers. Beide systemen kúnnen snel
            zijn maar de uitgangspositie verschilt:
          </p>
          <ul className="space-y-4 mb-6 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">WordPress</strong> — Snelheid hangt af van hosting, thema en plugins. Een schone site kan prima presteren; met veel plugins wordt het vaak zwaarder.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Moderne website</strong> — Snelheid zit standaard in de bouw. Pagina&apos;s laden meestal in minder dan een seconde op mobiel, zonder extra &quot;snelheidsplugins&quot;.</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Lees hoe Google{" "}
            <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              Core Web Vitals meet
            </a>{" "}
            en waarom dat uitmaakt voor je positie.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Vindbaarheid in Google</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">Google beloont sites die snel en stabiel zijn, vooral op mobiel:</p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">WordPress</strong> — SEO doe je vaak via plugins (Yoast, RankMath). Dat werkt goed, mits de basis niet te zwaar is.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Moderne website</strong> — Technische SEO zit in de kern: schone code, sterke metadata, uitstekende PageSpeed-scores zonder extra plugins.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Veiligheid</h2>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">WordPress</strong> — Populair, dus vaker doelwit. Met goede hosting, updates en beveiliging is het prima te beveiligen, maar dat vraagt wel doorlopende aandacht.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Moderne website</strong> — Geen openbare inlog aan de voorkant en minder &quot;bewegende onderdelen&quot;. Minder aanvalsoppervlak, minder updates.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Onderhoud en tijd</h2>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">WordPress</strong> — Regelmatige updates van plugins, thema en kern. Nodig voor veiligheid, maar kost tijd (of een onderhoudscontract).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span><strong className="text-foreground font-semibold">Moderne website</strong> — Technisch vrijwel onderhoudsvrij. Eenmaal live blijft de site stabiel; jij richt je op content en klanten.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Wanneer past WordPress beter?</h2>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Je wilt snel en voordelig online met een beproefd systeem.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Je hebt specifieke plugins nodig die je al kent.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Je wilt alles zelf in een vertrouwde admin-omgeving kunnen aanpassen.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Wanneer past een moderne website beter?</h2>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Snelheid, mobiele ervaring en Google-posities zijn cruciaal voor nieuwe klanten.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Je wilt een uniek design zonder de beperkingen van standaard templates.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Je zoekt minder onderhoud, meer stabiliteit en een site die meegroeit met je bedrijf.</span>
            </li>
          </ul>

          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Voor veel ZZP&apos;ers en MKB-bedrijven in Rotterdam is een moderne website
            een slimme volgende stap, vooral als de huidige WordPress-site traag
            voelt of te veel onderhoud vraagt. Het belangrijkste blijft: kies het
            fundament dat past bij jouw doelen nu.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Volgende stap</h2>
          <p className="text-foreground-muted leading-relaxed mb-12 text-lg">
            Twijfel je tussen blijven op WordPress of overstappen? Bekijk{" "}
            <Link href="/wordpress-naar-nextjs" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              WordPress naar Next.js migratie
            </Link>{" "}
            of vraag een gratis scan aan. Ik bekijk je huidige site en geef eerlijk
            advies — ook als WordPress voor jou de betere keuze is.
          </p>

          <div className="pt-12 border-t border-border-subtle">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Veelgestelde vragen</h2>
            <FAQ items={faqs} schemaId="nextjs-vs-wordpress" />
          </div>
        </div>
      </article>

      <CTASection
        title="Ontdek welk fundament bij jouw doelen past"
        subtitle="Vraag een gratis website-scan aan. Ik bekijk je huidige site handmatig en stuur binnen 48 uur een persoonlijk advies — zonder verplichtingen."
        button="Vraag gratis website-scan aan"
        href="/contact?intent=quickscan"
      />
    </>
  );
}
