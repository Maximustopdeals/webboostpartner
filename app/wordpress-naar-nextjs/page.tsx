import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress naar Next.js migratie | Sneller, veiliger & SEO‑vriendelijk",
  description:
    "Overstappen van WordPress naar Next.js zonder rankings te verliezen. Snellere laadtijden, minder onderhoud en een moderne technische basis.",
  alternates: { canonical: "https://webboostpartner.nl/wordpress-naar-nextjs" },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Verlies ik mijn Google‑posities?",
    a: "Nee. Bij een zorgvuldige migratie blijven posities behouden. URL‑structuur, metadata en redirects worden één‑op‑één meegenomen. Vaak stijgen posities zelfs door betere snelheid en structuur.",
  },
  {
    q: "Wat gebeurt er met mijn content?",
    a: "Alle teksten, afbeeldingen, blogs en pagina’s worden netjes overgezet. U kunt zelfs uw vertrouwde WordPress‑omgeving blijven gebruiken als headless CMS.",
  },
  {
    q: "Hoe lang duurt een migratie?",
    a: "Voor een gemiddelde MKB‑site duurt een migratie 2 tot 4 weken. Grotere sites of webshops duren langer.",
  },
  {
    q: "Wat kost een migratie?",
    a: "Migraties starten vanaf €1.495. De exacte prijs hangt af van het aantal pagina’s, functionaliteit en gewenste uitbreidingen.",
  },
  {
    q: "Behoud ik mijn admin‑omgeving?",
    a: "Ja. U kunt WordPress blijven gebruiken als backend, of overstappen naar een modern CMS zoals Sanity of Contentful.",
  },
];

export default function WordPressNaarNextjsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Migratie</p>

          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            WordPress naar <span className="text-[#FF4500]">Next.js</span> migratie
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Uw website werkt, maar voelt traag, verouderd of vraagt veel onderhoud?  
            Een overstap naar Next.js geeft uw site een frisse start: <strong>sneller, veiliger en beter vindbaar</strong> — zonder dat u uw Google‑posities verliest.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">

          <h2>Waarom ondernemers overstappen</h2>
          <p>
            Veel ondernemers hebben jaren plezier gehad van hun WordPress‑website.  
            Maar na verloop van tijd ontstaan herkenbare uitdagingen:
          </p>

          <ul>
            <li><strong>De website wordt trager</strong> door groeiende plugins en thema’s.</li>
            <li><strong>Updates zorgen voor stress</strong> of onverwachte foutmeldingen.</li>
            <li><strong>Onderhoud kost tijd en geld</strong> — vaak maandelijks.</li>
            <li><strong>Google‑posities dalen</strong> door slechtere prestaties.</li>
            <li><strong>De uitstraling voelt gedateerd</strong> en lastig te moderniseren.</li>
          </ul>

          <p>
            In zulke situaties is een migratie naar Next.js geen “technische keuze”,  
            maar een <strong>strategische investering</strong> in snelheid, betrouwbaarheid en groei.
          </p>

          <h2>Wat levert een migratie op?</h2>
          <ul>
            <li><strong>Snellere website</strong> — vaak 2 tot 4× sneller dan voorheen.</li>
            <li><strong>Betere vindbaarheid</strong> door sterke Core Web Vitals.</li>
            <li><strong>Minder onderhoud</strong> — geen plugin‑updates of breekbare thema’s.</li>
            <li><strong>Moderne uitstraling</strong> die past bij uw bedrijf.</li>
            <li><strong>Veiligere basis</strong> zonder kwetsbare login‑pagina’s.</li>
          </ul>

          <h2>SEO behouden tijdens migratie</h2>
          <p>
            De grootste zorg is vaak: “Verlies ik mijn posities in Google?”  
            Het antwoord: <strong>nee</strong>, mits de migratie zorgvuldig gebeurt.
          </p>

          <p>Dit is wat ik standaard doe:</p>

          <ul>
            <li><strong>URL‑mapping</strong> — bestaande URL’s blijven identiek of krijgen een perfecte 301‑redirect.</li>
            <li><strong>Metadata meenemen</strong> — titles, descriptions, headings en alt‑teksten blijven behouden.</li>
            <li><strong>Structured data verbeteren</strong> — vaak een upgrade ten opzichte van de oude site.</li>
            <li><strong>Sitemap indienen</strong> — direct na livegang bij Google Search Console.</li>
          </ul>

          <p>
            In de praktijk zien we dat websites na 2–4 weken vaak <strong>stijgen</strong>  
            door betere prestaties en een modernere structuur.
          </p>

          <h2>Snelheidswinst in de praktijk</h2>
          <p>Enkele voorbeelden uit recente migraties:</p>

          <ul>
            <li>LCP: 3.4s → <strong>0.8s</strong></li>
            <li>PageSpeed: 52 → <strong>98</strong></li>
            <li>TTFB: 1.8s → <strong>0.1s</strong></li>
          </ul>

          <p>
            Snellere websites zorgen voor meer vertrouwen, hogere conversie en betere SEO‑resultaten.
          </p>

          <h2>Hoe verloopt een migratie?</h2>

          <h3>1. Analyse</h3>
          <p>
            Ik bekijk uw huidige website: structuur, content, prestaties en SEO.  
            U ontvangt een helder migratieplan.
          </p>

          <h3>2. Nieuwe structuur</h3>
          <p>
            We bepalen wat behouden blijft, wat verbeterd wordt en wat vernieuwd wordt.  
            Indien gewenst blijft WordPress als backend bestaan.
          </p>

          <h3>3. Herbouw in Next.js</h3>
          <p>
            De website wordt opnieuw opgebouwd — een kans om direct design, snelheid en SEO te verbeteren.
          </p>

          <h3>4. Redirects & livegang</h3>
          <p>
            Alle oude URL’s worden gecontroleerd en gemapt.  
            Na livegang wordt de sitemap ingediend en monitoring gestart.
          </p>

          <h3>5. Monitoring</h3>
          <p>
            De eerste weken monitoren we rankings, crawl‑errors en prestaties.  
            U ontvangt een overzicht van de resultaten.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="migratie" />
        </div>
      </article>

      <CTASection
        title="Gratis migratie‑analyse"
        subtitle="Stuur de URL van uw huidige WordPress‑site en ontvang binnen 48 uur een vrijblijvend advies."
        button="Migratie analyse"
      />
    </>
  );
}
