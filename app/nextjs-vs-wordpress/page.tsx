import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js vs WordPress | De beste keuze voor jouw website",
  description:
    "Eerlijke vergelijking tussen WordPress en Next.js op laadsnelheid, SEO, veiligheid en onderhoud. Ontdek welk fundament past bij de groei van jouw bedrijf.",
  alternates: { canonical: "https://webboostpartner.nl/nextjs-vs-wordpress" },
};

export default function NextjsVsWordpressPage() {
  return (
    <>
      {/* HERO: Toegankelijk en objectief, maar direct richting de ROI-focus */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Strategische Vergelijking</p>

          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Next.js <span className="text-[#FF4500]">vs</span> WordPress
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed text-[#1a1a1a] font-medium">
            Twee bewezen technologieën, elk met een eigen kracht. Dit is een objectieve vergelijking zonder traditionele systemen af te kraken. We kijken puur naar de resultaten voor jouw onderneming en wanneer een upgrade rendabel is.
          </p>
        </div>
      </section>

      {/* SIDE-BY-SIDE: Strakke positionering van beide systemen */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-6">

          {/* WordPress */}
          <div className="border-2 border-black p-8 bg-[#FAFAFA] shadow-brutal-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">WordPress</p>
            <h2 className="font-heading font-extrabold uppercase text-4xl mb-4">De Wereldwijde<br/>Standaard</h2>

            <p className="text-[#1a1a1a] leading-relaxed">
              WordPress drijft miljoenen prachtige, goed werkende websites aan. Het is de ideale, laagdrempelige oplossing om snel een online aanwezigheid op te starten. Dankzij de vertrouwde backend en enorme flexibiliteit is het al jaren een betrouwbaar fundament voor veel ondernemers.
            </p>
          </div>

          {/* Next.js */}
          <div className="border-2 border-black p-8 bg-black text-white shadow-brutal">
            <p className="font-mono text-xs uppercase tracking-widest text-[#FF4500] mb-2">Next.js</p>
            <h2 className="font-heading font-extrabold uppercase text-4xl mb-4">De Premium<br/>Upgrade</h2>

            <p className="leading-relaxed text-gray-200">
              Next.js is een modern React‑framework gebouwd voor maximale prestaties. Het is de technologie achter grote platforms zoals Nike en Netflix. Next.js is een bewuste, strategische investering voor bedrijven die de absolute top in hun markt eisen qua snelheid, veiligheid en lokale Google-rankings.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT: Diepgaande vergelijking geschreven naar klantvoordeel in plaats van pure techniek */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">

          <h2>Wat is WordPress?</h2>
          <p>
            WordPress is een open‑source Content Management Systeem (CMS). De kracht ligt in de enorme bibliotheek aan plugins en thema's, waardoor veel functionaliteiten direct out-of-the-box beschikbaar zijn. Voor ondernemers die snel willen schakelen, zelf veel basiscontent beheren en een flexibel allround systeem zoeken, is en blijft WordPress een uitstekende keuze.
          </p>

          <h2>Wat is Next.js?</h2>
          <p>
            Next.js levert pagina’s kant‑en‑klaar en statisch aan de browser van de bezoeker. Er hoeven geen zware database-processen te draaien op het moment dat iemand klikt. Dit resulteert in een website die direct laadt en foutloos functioneert, wat leidt tot een superieure gebruikerservaring en maximale conversie.
          </p>

          <h2>Laadsnelheid & Conversie</h2>
          <p>
            Een snelle website zorgt direct voor minder afhakers en meer aanvragen. Hoewel beide systemen geoptimaliseerd kunnen worden, is de technische architectuur fundamenteel anders:
          </p>
          <ul>
            <li><strong>WordPress</strong> — De snelheid valt of staat met de kwaliteit van de hosting, de complexiteit van het thema en het aantal actieve plugins. Een schone WordPress-site kan prima presteren.</li>
            <li><strong>Next.js</strong> — Snelheid zit ingebakken in het DNA. Pagina's laden in de regel in minder dan een seconde op mobiel, omdat de browser geen overtollige ballast of scripts hoeft in te laden.</li>
          </ul>

          <h2>SEO & Vindbaarheid</h2>
          <p>
            Google stelt steeds strengere eisen aan hoe soepel een website functioneert. Dit beïnvloedt je positie in de zoekresultaten:
          </p>
          <ul>
            <li><strong>WordPress</strong> — SEO-optimalisatie verloopt meestal via plugins zoals Yoast of RankMath. Dit levert goede resultaten op, mits de code van het onderliggende thema niet te zwaar is.</li>
            <li><strong>Next.js</strong> — Technische SEO is direct geïntegreerd in de core code via de Metadata API. Zonder extra plugins heeft de site een directe voorsprong bij het behalen van de maximale score binnen Google PageSpeed Insights.</li>
          </ul>

          <h2>Veiligheid & Stabiliteit</h2>
          <p>
            Het beschermen van je bedrijfsgegevens en klantgegevens is cruciaal:
          </p>
          <ul>
            <li><strong>WordPress</strong> — Door de enorme populariteit is het een vaker gezocht doelwit. Met premium hosting, sterke beveiligingsplugins en structureel onderhoud is een WordPress-site echter uitstekend te beveiligen.</li>
            <li><strong>Next.js</strong> — Omdat Next.js websites statisch gegenereerd worden, is er geen openbare database of login-omgeving direct aan de voorkant gekoppeld. Dit verkleint het risico op hackpogingen of plugin-gerelateerde crashes tot een absoluut minimum.</li>
          </ul>

          <h2>Onderhoud & Tijd</h2>
          <p>
            De tijd die je maandelijks kwijt bent aan het beheren van je website verschilt sterk:
          </p>
          <ul>
            <li><strong>WordPress</strong> — Vraagt om regelmatige controle. Plugins, thema's en het core systeem moeten up-to-date gehouden worden om comptabiliteit en veiligheid te garanderen.</li>
            <li><strong>Next.js</strong> — Vrijwel onderhoudsvrij op technisch vlak. Eenmaal gelanceerd blijft de website stabiel en snel online draaien, zonder dat je wekelijks updates hoeft te controleren.</li>
          </ul>

          <h2>Wanneer kies je voor WordPress?</h2>
          <p>Het traditionele CMS past het beste bij jouw situatie als:</p>
          <ul>
            <li>Je snel live wilt gaan met een beproefd systeem en een toegankelijk budget.</li>
            <li>Je direct gebruik wilt maken van specifieke, bestaande plugins voor je bedrijfsvoering.</li>
            <li>Je volledig zelfstandig alle content en lay-outs wilt kunnen aanpassen in een vertrouwde admin-omgeving.</li>
          </ul>

          <h2>Wanneer kies je voor Next.js?</h2>
          <p>De overstap naar het moderne React-framework is de juiste beslissing als:</p>
          <ul>
            <li>Maximale snelheid, kortere laadtijden en een hoge lokale Google-ranking cruciaal zijn voor het werven van je klanten.</li>
            <li>Je op zoek bent naar een uniek design op maat, zonder de beperkingen of ballast van standaard templates.</li>
            <li>Je kiest voor een stabiel, onderhoudsarm en veilig digitaal platform dat probleemloos meegroeit met jouw MKB-onderneming.</li>
          </ul>

          <p>
            Voor veel dienstverleners, ZZP'ers en MKB-bedrijven in de regio Rotterdam is Next.js een slimme, toekomstgerichte investering. Maar het belangrijkste is dat het fundament aansluit bij wat jouw bedrijf op dit moment nodig heeft om online te groeien.
          </p>
        </div>
      </article>

      {/* CTA SECTION: Direct gericht op de gratis Quickscan-waarde */}
      <CTASection
        title="Ontdek welk fundament bij jouw groeidoelen past"
        subtitle="Vraag een gratis website Quickscan aan. Ik bekijk je huidige website handmatig en stuur je binnen 48 uur een persoonlijk advies over waar je winst kunt behalen."
        button="Vraag gratis website scan aan"
        href="/contact?intent=quickscan"
      />
    </>
  );
}
