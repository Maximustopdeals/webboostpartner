import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Core Web Vitals verbeteren | Snellere website, betere vindbaarheid",
  description:
    "Een snelle website zorgt voor meer klanten. Ontdek hoe Core Web Vitals werken, waarom ze belangrijk zijn en hoe uw website sneller en gebruiksvriendelijker wordt.",
  alternates: { canonical: "https://webboostpartner.nl/core-web-vitals" },
};

export default function CoreWebVitalsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Performance</p>

          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Core Web Vitals<br />
            <span className="text-[#FF4500]">verbeteren</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Een snelle website zorgt voor meer klanten. Google gebruikt Core Web Vitals om te bepalen
            welke websites prettig werken voor bezoekers. Hoe beter uw website scoort, hoe hoger u
            kunt eindigen in Google — en hoe meer bezoekers blijven hangen.
          </p>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-5">
          {[
            {
              k: "LCP",
              n: "< 2.5s",
              v: "Hoe snel het belangrijkste onderdeel van uw pagina zichtbaar is."
            },
            {
              k: "INP",
              n: "< 200ms",
              v: "Hoe snel uw website reageert wanneer iemand klikt of typt."
            },
            {
              k: "CLS",
              n: "< 0.1",
              v: "Hoe stabiel de pagina blijft tijdens het laden — zonder verspringende elementen."
            }
          ].map((m) => (
            <div
              key={m.k}
              className="border-2 border-black bg-[#FAFAFA] p-8 hover:bg-black hover:text-white transition-colors group"
            >
              <p className="font-mono uppercase text-xs tracking-widest text-[#FF4500] mb-2">
                Goede score
              </p>
              <p className="font-heading font-extrabold text-5xl mb-1">{m.k}</p>
              <p className="font-heading font-bold text-2xl mb-4 text-[#FF4500]">{m.n}</p>
              <p className="text-sm">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">

          <h2>Wat zijn Core Web Vitals?</h2>
          <p>
            Core Web Vitals zijn drie eenvoudige metingen die laten zien hoe snel en prettig uw
            website werkt voor bezoekers. Geen technische termen — gewoon de basis van een goede
            online ervaring:
          </p>

          <ul>
            <li><strong>LCP</strong>: hoe snel het belangrijkste onderdeel van de pagina verschijnt.</li>
            <li><strong>INP</strong>: hoe snel uw website reageert op klikken en typen.</li>
            <li><strong>CLS</strong>: of de pagina rustig blijft staan zonder te verspringen.</li>
          </ul>

          <p>
            Websites die snel laden en stabiel blijven, scoren beter in Google en zorgen voor meer
            aanvragen, telefoontjes en offerteverzoeken.
          </p>

          <h2>Waarom is dit belangrijk voor uw bedrijf?</h2>
          <p>
            Bezoekers zijn ongeduldig. Als een website langzaam is, haperend reageert of verspringt
            tijdens het laden, haken mensen af — vaak binnen één seconde.
          </p>

          <p>Goede Core Web Vitals zorgen voor:</p>

          <ul>
            <li><strong>Minder afhakers</strong> — bezoekers blijven langer op uw site.</li>
            <li><strong>Meer conversie</strong> — snelle websites overtuigen beter.</li>
            <li><strong>Betere Google‑posities</strong> — snelheid is een rankingfactor.</li>
            <li><strong>Lagere advertentiekosten</strong> — snelle pagina’s scoren beter in Google Ads.</li>
          </ul>

          <h2>Waarom veel websites moeite hebben</h2>
          <p>
            Veel websites worden na verloop van tijd trager door thema’s, plugins, scripts en
            verouderde techniek. Dat is geen fout — het is een gevolg van hoe traditionele systemen
            werken.
          </p>

          <p>
            Denk aan:
          </p>

          <ul>
            <li>grote afbeeldingen die niet geoptimaliseerd zijn</li>
            <li>te veel scripts die tegelijk geladen worden</li>
            <li>verspringende elementen tijdens het laden</li>
            <li>trage hosting of gedeelde servers</li>
          </ul>

          <p>
            Dit maakt het lastig om écht goede prestaties te halen zonder een modernere technische
            basis.
          </p>

          <h2>Hoe Next.js betere scores haalt</h2>
          <p>
            Next.js is gebouwd voor snelheid. Het levert pagina’s kant‑en‑klaar aan de browser,
            zonder dat er eerst allerlei scripts of database‑processen moeten draaien.
          </p>

          <p>Dat betekent:</p>

          <ul>
            <li><strong>Snelle laadtijden</strong> — vaak onder één seconde.</li>
            <li><strong>Stabiele pagina’s</strong> — geen verspringende elementen.</li>
            <li><strong>Direct zichtbare content</strong> — ook op mobiel.</li>
            <li><strong>Moderne beeldoptimalisatie</strong> — automatisch in het juiste formaat.</li>
          </ul>

          <p>
            Het resultaat: websites die standaard rond de <strong>95–100</strong> scoren in PageSpeed
            Insights.
          </p>

          <h2>Wat levert dit concreet op?</h2>
          <p>Bij ondernemers die overstappen naar een snellere website zien we vaak:</p>

          <ul>
            <li>15–40% minder afhakers</li>
            <li>meer pagina’s per sessie</li>
            <li>hogere conversie op mobiel</li>
            <li>betere posities binnen 4–8 weken</li>
            <li>lagere advertentiekosten</li>
          </ul>

          <p>
            Snelheid is geen luxe — het is een fundament. Een snelle website maakt al uw andere
            marketinginspanningen sterker.
          </p>
        </div>
      </article>

      <CTASection
        title="Laat uw website testen."
        subtitle="Stuur uw URL en ontvang een gratis Core Web Vitals analyse met concrete verbeterpunten."
        button="Test mijn site"
      />
    </>
  );
}
