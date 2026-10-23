import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress naar Next.js Migratie | Behoud je Google Rankings",
  description:
    "Veilig overstappen van WordPress naar Next.js zonder verlies van SEO-posities. Ervaar bliksemsnelle laadtijden, minder onderhoud en een stabiele techniek.",
  alternates: { canonical: "https://webboostpartner.nl/wordpress-naar-nextjs" },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Verlies ik mijn posities in Google tijdens de migratie?",
    a: "Nee, mits de migratie zorgvuldig en strategisch wordt uitgevoerd. Bestaande URL-structuren, metadata en interne linkbuilding worden nauwkeurig in kaart gebracht. Waar nodig richten we waterdichte 301-redirects in. In de praktijk stijgen websites vaak in ranking na een migratie dankzij de drastisch verbeterde laadsnelheid en schone code."
  },
  {
    q: "Wat gebeurt er met mijn bestaande teksten, blogs en afbeeldingen?",
    a: "Al uw waardevolle content wordt volledig en veilig overgezet. U heeft hierin twee keuzes: uw vertrouwde WordPress-omgeving behouden en gebruiken als een 'headless' CMS (zodat u werkt zoals u gewend bent), of overstappen naar een modern, onderhoudsarm content-systeem zoals Sanity of GitHub."
  },
  {
    q: "Hoe lang duurt een gemiddeld migratietraject?",
    a: "Voor een gemiddelde MKB-bedrijfswebsite duurt het migratietraject 2 tot 4 weken. Grotere platforms met complexe functionaliteiten, op maat gemaakte plug-ins of uitgebreide webshops vergen een specifieke doorlooptijd die we vooraf helder afstemmen."
  },
  {
    q: "Wat is de investering voor een website-migratie?",
    a: "Onze migratietrajecten starten vanaf € 1.495 excl. btw. De exacte investering is afhankelijk van de complexiteit van uw huidige site en eventuele gewenste uitbreidingen in design of functionaliteit. U ontvangt vooraf altijd een vaste, transparante prijsopgave."
  },
  {
    q: "Kan ik na de migratie zelf nog eenvoudig content aanpassen?",
    a: "Absoluut. We koppelen een gebruiksvriendelijk Content Management Systeem (CMS) naar keuze. Hierdoor kunt u, net als in WordPress, eenvoudig teksten wijzigen, portfolio-items toevoegen of nieuwe blogs publiceren, maar dan zonder de bijbehorende plug-in-updates of technische risico's."
  }
];

export default function WordPressNaarNextjsPage() {
  return (
    <>
      {/* HERO: Professionele en oplossingsgerichte insteek */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Premium Upgrade</p>

          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            WordPress naar <span className="text-[#FF4500]">Next.js</span> migratie
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed text-[#1a1a1a] font-medium">
            Uw huidige website functioneert, maar voelt op mobiel traag aan, stagneert in vindbaarheid of vraagt maandelijks om intensief onderhoud? Een migratie naar Next.js biedt uw online business een krachtige stap voorwaarts: **sneller, veiliger en maximaal vindbaar** — met volledig behoud van uw opgebouwde Google-autoriteit.
          </p>
        </div>
      </section>

      {/* CONTENT: Balans tussen techniek en commercieel klantvoordeel */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">

          <h2>Waarom ondernemers kiezen voor een upgrade</h2>
          <p>
            WordPress is een fantastisch systeem dat het internet groot heeft gemaakt en wereldwijd miljoenen stabiele websites aandrijft. Echter, naarmate een onderneming groeit en de online concurrentie toeneemt, ontstaan vaak herkenbare uitdagingen binnen traditionele CMS-structuren:
          </p>

          <ul>
            <li><strong>De laadsnelheid neemt af</strong> door een opeenstapeling van plug-ins en zware thema-scripts.</li>
            <li><strong>Wekelijkse updates zorgen voor stress</strong> of onverwachte comptabiliteitsfouten in de lay-out.</li>
            <li><strong>Technisch onderhoud kost structureel tijd</strong> en budget om veiligheidsrisico's te minimaliseren.</li>
            <li><strong>Lokale Google-posities stagneren</strong> omdat de mobiele gebruikerservaring niet optimaal scoort op de Core Web Vitals.</li>
          </ul>

          <p>
            In deze groeifase is een migratie naar Next.js geen puur 'technische beslissing', maar een **doelgerichte, strategische investering** in de conversie, betrouwbaarheid en schaalbaarheid van uw bedrijf.
          </p>

          <h2>Wat levert deze migratie concreet op?</h2>
          <ul>
            <li><strong>Ongeëvenaarde snelheid</strong> — Pagina's reageren direct, wat afhakers voorkomt en de conversie verhoogt.</li>
            <li><strong>Optimale Google-voorsprong</strong> — Directe aansluiting bij de strengste mobiele richtlijnen van zoekmachines.</li>
            <li><strong>Zorgeloze stabiliteit</strong> — Geen breekbare plug-in-afhankelijkheden of onverwachte servercrashes meer.</li>
            <li><strong>High-end uitstraling</strong> — Een volledig uniek maatwerkontwerp dat naadloos aansluit bij uw marktpositie.</li>
            <li><strong>Maximale veiligheid</strong> — Een statisch gegenereerd platform zonder kwetsbare openbare inlogomgevingen.</li>
          </ul>

          <h2>SEO-waarde en posities gegarandeerd behouden</h2>
          <p>
            De meest gestelde vraag bij een overstap is logischerwijs: *“Verlies ik mijn opgebouwde posities in Google?”* Het antwoord is helder: **nee**, mits het migratieproces technisch perfect wordt beheerd. 
          </p>

          <p>Ons gestroomlijnde migratieproces omvat standaard:</p>

          <ul>
            <li><strong>Exacte URL-mapping</strong> — Bestaande linkstructuren blijven behouden of worden via zorgvuldige 301-redirects overgedragen.</li>
            <li><strong>Volledige metadata-overdracht</strong> — Headings (H1-H6), titles, meta-descriptions en alt-teksten verhuizen foutloos mee.</li>
            <li><strong>Structured data optimalisatie</strong> — We upgraden direct uw schema markups voor een betere indexering.</li>
            <li><strong>Directe Search Console verificatie</strong> — Uw nieuwe sitemap wordt direct bij livegang ingediend voor een snelle crawl.</li>
          </ul>

          <h2>Snelheidswinst in de praktijk</h2>
          <p>De gemiddelde resultaten na een WordPress naar Next.js migratie spreken voor zich:</p>

          <ul>
            <li>Mobiele laadtijd (LCP): 3.4s → <strong className="text-green-600">0.8s</strong></li>
            <li>Google PageSpeed Score: 52/100 → <strong className="text-green-600">95+/100</strong></li>
            <li>Eerste reactietijd (TTFB): 1.8s → <strong className="text-green-600">0.1s</strong></li>
          </ul>

          <h2>Het migratietraject in vijf heldere stappen</h2>

          <h3>1. Technische SEO-analyse</h3>
          <p>
            We brengen uw huidige website volledig in kaart. We analyseren de structuur, de best presterende SEO-pagina's en alle actieve koppelingen. U ontvangt een transparant migratieplan.
          </p>

          <h3>2. Architectuur & Content-strategie</h3>
          <p>
            We bepalen welke data behouden blijft en waar we direct conversieverbeteringen doorvoeren. U kiest uw gewenste beheeromgeving: WordPress als headless backend, of een overstap naar een modern en onderhoudsarm systeem.
          </p>

          <h3>3. Herbouw in Next.js</h3>
          <p>
            Uw website wordt vanaf de basis schoon opgebouwd in code. Dit is hét moment waarop we de mobiele prestaties, de UX-flow en het design naar een high-end niveau tillen.
          </p>

          <h3>4. Redirect-controle & Livegang</h3>
          <p>
            Alle URL-paden worden rigoureus getest en klaargezet. De livegang vindt plaats op een rustig moment, direct gevolgd door de indiening van uw nieuwe sitemap bij Google.
          </p>

          <h3>5. Post-lancering Monitoring</h3>
          <p>
            Tijdens de eerste weken na livegang monitoren we uw rankings, crawl-statistieken en indexeringen nauwgezet via Search Console om een stabiele en stijgende lijn te garanderen.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="migratie-faq" />
        </div>
      </article>

      {/* CTA SECTION: Laagdrempelig en direct gericht op de Quickscan-waarde */}
      <CTASection
        title="Ontvang een gratis migratie-analyse"
        subtitle="Deel de URL van uw huidige WordPress-website. Ik beoordeel uw mobiele prestaties handmatig en stuur u binnen 48 uur een vrijblijvend advies over de groeikansen."
        button="Vraag gratis migratie-analyse aan"
        href="/contact?intent=migratie_analyse"
      />
    </>
  );
}
