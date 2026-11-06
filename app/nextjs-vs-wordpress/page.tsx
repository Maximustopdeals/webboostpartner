import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js vs WordPress | Welke past bij jouw bedrijf? | WebBoost Partner",
  description:
    "Eerlijke vergelijking: WordPress of een moderne website? Snelheid, vindbaarheid, onderhoud en kosten. Ontdek wat het beste past bij de groei van jouw bedrijf.",
  alternates: { canonical: "/nextjs-vs-wordpress" },
  keywords: [
    "Next.js vs WordPress",
    "WordPress alternatief",
    "WordPress of Next.js",
    "moderne website vs WordPress",
    "trage WordPress",
    "website snelheid",
  ],
  openGraph: {
    title: "Next.js vs WordPress | Welke past bij jouw bedrijf?",
    description:
      "Objectieve vergelijking op snelheid, SEO, onderhoud en veiligheid. Zonder jargon gericht op resultaat voor jouw onderneming.",
    url: "https://www.webboostpartner.nl/nextjs-vs-wordpress",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js vs WordPress | Welke past bij jouw bedrijf?",
    description:
      "Snelheid, vindbaarheid, onderhoud en kosten, helder vergeleken. Zonder technisch jargon.",
  },
};

export default function NextjsVsWordpressPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.webboostpartner.nl/nextjs-vs-wordpress#webpage",
            url: "https://www.webboostpartner.nl/nextjs-vs-wordpress",
            name: "Next.js vs WordPress | Welke past bij jouw bedrijf?",
            description:
              "Eerlijke vergelijking tussen WordPress en een moderne website op snelheid, SEO, onderhoud en veiligheid.",
            isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
            about: { "@id": "https://www.webboostpartner.nl/#organization" },
            inLanguage: "nl-NL",
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Next.js vs WordPress
          </p>

          <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl max-w-none">
            Next.js <span className="text-[#FF4500]">vs</span> WordPress
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed font-semibold">
            Twee bewezen manieren om een website te bouwen, elk met eigen sterke
            punten. Geen technisch verhaal, wel een heldere vergelijking: wat levert
            het op voor <strong>snelheid, vindbaarheid, onderhoud en groei</strong> van
            jouw bedrijf?
          </p>

          <div className="mt-9">
            <Link
              href="/contact?intent=quickscan"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Vraag gratis website-scan aan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SIDE-BY-SIDE */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-6">
          <div className="border-2 border-black p-8 bg-[#FAFAFA] shadow-brutal-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">
              WordPress
            </p>
            <h2 className="font-heading font-extrabold uppercase text-3xl sm:text-4xl mb-4">
              De bekende
              <br />
              standaard
            </h2>
            <p className="text-[#1a1a1a] leading-relaxed">
              WordPress drijft miljoenen websites aan. Het is laagdrempelig, flexibel
              en vertrouwd. Ideaal om snel online te gaan en zelf content te beheren
              in een omgeving die je al kent.
            </p>
          </div>

          <div className="border-2 border-black p-8 bg-black text-white shadow-brutal">
            <p className="font-mono text-xs uppercase tracking-widest text-[#FF4500] mb-2">
              Moderne website (Next.js)
            </p>
            <h2 className="font-heading font-extrabold uppercase text-3xl sm:text-4xl mb-4">
              De snelle
              <br />
              upgrade
            </h2>
            <p className="leading-relaxed text-gray-200">
              Een moderne website laadt sneller, heeft minder onderhoud nodig en scoort
              sterker in Google. Dezelfde techniek die grote merken gebruiken vertaald
              naar een praktische oplossing voor ZZP en MKB.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waar gaat het écht om?</h2>
          <p>
            Niet om de naam van de techniek, maar om wat jij merkt als ondernemer:
            hoe snel laadt de site op de telefoon, hoe makkelijk vindbaar ben je in
            Google, en hoeveel tijd en stress kost het onderhoud?
          </p>

          <h2>Snelheid en aanvragen</h2>
          <p>
            Elke seconde extra laadtijd kost bezoekers. Beide systemen kúnnen snel
            zijn maar de uitgangspositie verschilt:
          </p>
          <ul>
            <li>
              <strong>WordPress</strong> — Snelheid hangt af van hosting, thema en
              plugins. Een schone site kan prima presteren; met veel plugins wordt
              het vaak zwaarder.
            </li>
            <li>
              <strong>Moderne website</strong> — Snelheid zit standaard in de
              bouw. Pagina’s laden meestal in minder dan een seconde op mobiel,
              zonder extra “snelheidsplugins”.
            </li>
          </ul>

          <h2>Vindbaarheid in Google</h2>
          <p>Google beloont sites die snel en stabiel zijn, vooral op mobiel:</p>
          <ul>
            <li>
              <strong>WordPress</strong> — SEO doe je vaak via plugins (Yoast,
              RankMath). Dat werkt goed, mits de basis niet te zwaar is.
            </li>
            <li>
              <strong>Moderne website</strong> — Technische SEO zit in de kern:
              schone code, sterke metadata, uitstekende PageSpeed-scores zonder
              extra plugins.
            </li>
          </ul>

          <h2>Veiligheid</h2>
          <ul>
            <li>
              <strong>WordPress</strong> — Populair, dus vaker doelwit. Met goede
              hosting, updates en beveiliging is het prima te beveiligen dat
              vraagt wel doorlopende aandacht.
            </li>
            <li>
              <strong>Moderne website</strong> — Geen openbare inlog aan de
              voorkant en minder “bewegende onderdelen”. Minder aanvalsoppervlak,
              minder updates.
            </li>
          </ul>

          <h2>Onderhoud en tijd</h2>
          <ul>
            <li>
              <strong>WordPress</strong> — Regelmatige updates van plugins, thema
              en kern. Nodig voor veiligheid, maar kost tijd (of een
              onderhoudscontract).
            </li>
            <li>
              <strong>Moderne website</strong> — Technisch vrijwel
              onderhoudsvrij. Eenmaal live blijft de site stabiel; jij richt je op
              content en klanten.
            </li>
          </ul>

          <h2>Wanneer past WordPress beter?</h2>
          <ul>
            <li>Je wilt snel en voordelig online met een beproefd systeem.</li>
            <li>Je hebt specifieke plugins nodig die je al kent.</li>
            <li>
              Je wilt alles zelf in een vertrouwde admin-omgeving kunnen
              aanpassen.
            </li>
          </ul>

          <h2>Wanneer past een moderne website beter?</h2>
          <ul>
            <li>
              Snelheid, mobiele ervaring en Google-posities zijn cruciaal voor
              nieuwe klanten.
            </li>
            <li>
              Je wilt een uniek design zonder de beperkingen van standaard
              templates.
            </li>
            <li>
              Je zoekt minder onderhoud, meer stabiliteit en een site die meegroeit
              met je bedrijf.
            </li>
          </ul>

          <p>
            Voor veel ZZP’ers en MKB-bedrijven in Rotterdam is een moderne website
            een slimme volgende stap vooral als de huidige WordPress-site traag
            voelt of te veel onderhoud vraagt. Het belangrijkste blijft: kies het
            fundament dat past bij jouw doelen nu.
          </p>

          <h2>Volgende stap</h2>
          <p>
            Twijfel je tussen blijven op WordPress of overstappen? Bekijk{" "}
            <Link href="/wordpress-naar-nextjs">
              WordPress naar Next.js migratie
            </Link>{" "}
            of vraag een gratis scan aan. Ik bekijk je huidige site en geef eerlijk
            advies ook als WordPress voor jou de betere keuze is.
          </p>
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
