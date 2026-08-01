import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website laten maken Rotterdam | Professionele Next.js Websites",
  description:
    "Wilt u een professionele website laten maken in Rotterdam? WebBoost Partner bouwt Next.js websites die mooi, snel én vindbaar zijn. Maatwerk vanaf €2.495.",
  alternates: { canonical: "https://webboostpartner.nl/website-laten-maken-rotterdam" },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Wat kost een Next.js website?",
    a: "Bij WebBoost Partner werk ik met drie heldere pakketten. Het Essential pakket voor ZZP'ers en starters is €2.495 (excl. btw) / €3.019 (incl. btw). Het Professional pakket voor ondernemers met ambitie is €4.495 (excl. btw) / €5.439 (incl. btw). Het Enterprise pakket voor groeiende bedrijven is vanaf €6.995 (excl. btw) / €8.464 (incl. btw) — maatwerk mogelijk. Alle pakketten zijn volledig transparant geprijsd, er zitten geen verborgen kosten in. Een persoonlijke offerte voor maatwerk is altijd mogelijk.",
  },
  {
    q: "Hoe lang duurt het traject?",
    a: "Een gemiddelde Next.js website is binnen 2 tot 4 weken live. De doorlooptijd hangt af van de hoeveelheid pagina's, of je content kant-en-klaar aanlevert, en hoe snel feedback rondkomt. Een one-pager kan binnen één week staan, een uitgebreide site met blog en lokale SEO duurt doorgaans 3 tot 4 weken. Bij webshops reken ik 4 tot 8 weken afhankelijk van het aantal producten en integraties.",
  },
  {
    q: "Kan mijn bestaande WordPress website worden overgezet naar Next.js?",
    a: "Ja, een bestaande WordPress-website kan worden overgezet naar Next.js — maar het is geen automatische migratie. Het is een herbouw waarbij content, structuur en functionaliteit opnieuw worden opgezet in een modern JavaScript-framework. De kern: WordPress is een CMS + thema, terwijl Next.js een framework is. Je vervangt het thema dus volledig, maar je kunt WordPress eventueel blijven gebruiken als headless CMS. SEO-rankings blijven behouden door zorgvuldige URL-mapping, 301-redirects en het behouden van metadata.",
  },
  {
    q: "Is SEO inbegrepen?",
    a: "Ja. Technische SEO is bij élke pagina inbegrepen: schema markup, semantische HTML, geoptimaliseerde meta tags, sitemap.xml, robots.txt, Open Graph en correcte heading-structuur. Lokale SEO voor Rotterdam (Google Business Profile koppeling, NAP-consistentie, lokale schema) zit standaard in het Professional pakket en hoger.",
  },
  {
    q: "Werk je alleen voor bedrijven in Rotterdam?",
    a: "Mijn focus ligt op Rotterdam en de directe omgeving — Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam — omdat ik geloof in persoonlijk contact en lokale expertise. Maar ik werk ook landelijk wanneer een project klikt. Een kennismakingsgesprek kan altijd op locatie of via een videocall.",
  },
  {
    q: "Wat als ik later iets wil aanpassen?",
    a: "Kleine aanpassingen (tekst, foto's) doe ik tegen een vast uurtarief óf je krijgt toegang tot een headless CMS waarin je zelf content beheert — zonder dat je code aanraakt. Bij het Enterprise pakket zit 6 maanden support inbegrepen voor doorontwikkeling.",
  },
];

export default function WebsiteRotterdamPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Website laten maken Rotterdam
          </p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Website laten<br/>maken in <span className="text-[#FF4500]">Rotterdam</span>
          </h1>
          <div className="mt-6 space-y-4 text-lg sm:text-xl max-w-3xl leading-relaxed">
            <p>
              Een professionele website laten maken die niet alleen indruk maakt, 
              maar ook nieuwe klanten oplevert? WebBoost Partner ontwikkelt snelle, 
              moderne websites voor Rotterdamse ondernemers die online beter gevonden 
              willen worden en willen groeien.
            </p>
            <p>
              Met een sterke technische basis, slimme SEO-structuur en een 
              conversiegericht ontwerp bouwen wij websites die bezoekers veranderen 
              in klanten. Geen standaard oplossing, maar een website die volledig 
              aansluit bij uw bedrijf en ambities.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom een professionele website belangrijk is</h2>
          
          <p>
            Voor veel ondernemers in Rotterdam is uw website het eerste contactmoment 
            met een potentiële klant. Nog voordat iemand belt, een offerte aanvraagt 
            of uw bedrijf bezoekt, vormt een bezoeker een eerste indruk op basis van 
            uw website.
          </p>

          <p>
            In enkele seconden bepaalt iemand of uw bedrijf professioneel, betrouwbaar 
            en geschikt genoeg is om contact mee op te nemen. Een website moet daarom 
            niet alleen mooi zijn, maar vooral effectief werken.
          </p>

          <p>
            Een professionele website helpt u met vier belangrijke doelen:
          </p>

          <ul>
            <li>
              <strong>Vertrouwen opbouwen</strong> door een professionele uitstraling, 
              duidelijke informatie en een sterke eerste indruk.
            </li>
            <li>
              <strong>Meer aanvragen genereren</strong> met een logische structuur, 
              duidelijke CTA&apos;s en een gebruiksvriendelijke ervaring.
            </li>
            <li>
              <strong>Uw merk versterken</strong> met een herkenbare uitstraling en 
              communicatie die aansluit bij uw doelgroep.
            </li>
            <li>
              <strong>Beter gevonden worden</strong> doordat zoekmachines uw website 
              technisch goed kunnen begrijpen en indexeren.
            </li>
          </ul>

          <p>
            Veel websites zijn door de jaren heen opgebouwd zonder duidelijke strategie 
            voor snelheid, vindbaarheid en conversie. Daardoor missen ondernemers 
            kansen om online nieuwe klanten te bereiken.
          </p>

          <h2>Wat krijgt u bij een website van WebBoost Partner</h2>

          <p>
            Een website laten maken is meer dan alleen een mooi ontwerp. Uw website 
            moet een <strong>digitaal fundament</strong> zijn waarmee uw bedrijf kan 
            groeien. Daarom combineren wij strategie, design, techniek en SEO om een 
            website te bouwen die bezoekers overtuigt en resultaat oplevert.
          </p>

          <p>
            Concreet krijgt u:
          </p>

          <ul>
            <li>
              <strong>Maatwerk design</strong> — geen standaard templates, maar een 
              unieke uitstraling die past bij uw bedrijf, doelgroep en merk.
            </li>
            <li>
              <strong>Responsive ontwerp</strong> — een snelle en gebruiksvriendelijke 
              ervaring op mobiel, tablet en desktop.
            </li>
            <li>
              <strong>Technische SEO als fundament</strong> — een professionele basis 
              met semantische HTML, schema markup, sitemap.xml, robots.txt en correcte 
              metadata.
            </li>
            <li>
              <strong>Uitstekende prestaties</strong> — een razendsnelle website 
              waarbij Core Web Vitals centraal staan.
            </li>
            <li>
              <strong>Conversiegerichte structuur</strong> — duidelijke navigatie, 
              sterke CTA&apos;s en vertrouwenselementen die bezoekers helpen contact 
              op te nemen.
            </li>
            <li>
              <strong>Google Analytics 4 en Search Console</strong> — correct 
              ingericht zodat u inzicht krijgt in bezoekers en resultaten.
            </li>
            <li>
              <strong>Betrouwbare contactmogelijkheden</strong> — formulieren die 
              werken en gekoppeld kunnen worden aan e-mail of CRM.
            </li>
          </ul>

          <h2>Website laten maken voor ZZP en MKB</h2>

          <p>
            WebBoost Partner helpt <strong>ZZP&apos;ers en MKB-bedrijven</strong> in 
            Rotterdam en omgeving met websites die niet alleen professioneel ogen, 
            maar ook bijdragen aan de groei van hun onderneming.
          </p>

          <p>
            Of u nu een aannemer bent in Capelle aan den IJssel, een coach in 
            Hillegersberg, een fysiotherapeut in Kralingen of een ondernemer in het 
            centrum van Rotterdam: uw website moet uw vakmanschap zichtbaar maken en 
            nieuwe klanten aantrekken.
          </p>

          <p>
            Ik bouw websites die <strong>meegroeien met uw bedrijf</strong>. Vandaag 
            een sterke basis, morgen eenvoudig uit te breiden met nieuwe diensten, 
            extra pagina&apos;s, blogs of meerdere locaties.
          </p>

          <h2>Waarom bouwen met Next.js</h2>

          <p>
            Uw website verdient een moderne technische basis. Daarom gebruikt 
            WebBoost Partner <strong>Next.js</strong>: een krachtige technologie 
            waarmee websites extreem snel, veilig en toekomstgericht gebouwd worden.
          </p>

          <p>
            Het resultaat voor u als ondernemer:
          </p>

          <ul>
            <li>
              <strong>Snellere prestaties</strong> — moderne technieken zorgen voor 
              korte laadtijden en een betere ervaring voor uw bezoekers.
            </li>
            <li>
              <strong>Sterke SEO-basis</strong> — volledige controle over metadata, 
              structuur en technische optimalisaties voor zoekmachines.
            </li>
            <li>
              <strong>Meer veiligheid</strong> — minder afhankelijkheid van losse 
              plugins en complexe onderhoudsstructuren.
            </li>
            <li>
              <strong>Toekomstbestendig</strong> — een technische basis die klaar is 
              voor verdere groei en nieuwe ontwikkelingen.
            </li>
          </ul>

          <p>
            Voor lokale ondernemers in Rotterdam betekent dit één ding: een website 
            die <strong>sneller werkt, professioneler overkomt en klaar is om online 
            meer resultaat te behalen</strong>.
          </p>

          <h2>Het traject in vier stappen</h2>
          <h3>1. Kennismaking & strategie</h3>
          <p>
            We beginnen met een vrijblijvend gesprek — bij u op locatie, bij mij in Rotterdam, of via
            videocall. Daarin bespreken we uw bedrijf, uw doelgroep, en wat de website voor u moet doen.
            Hieruit volgt een concreet voorstel met scope, doorlooptijd en investering.
          </p>
          <h3>2. Design & content</h3>
          <p>
            Op basis van uw merk en doelgroep ontwerp ik een look die werkt. Geen sjablonen, geen
            "templates met logo erin", maar een ontwerp dat is gebouwd rond uw doelen. Tegelijk denken
            we mee over content en SEO-structuur.
          </p>
          <h3>3. Development</h3>
          <p>
            Ik bouw uw site in Next.js, met technische SEO ingebakken en aandacht voor elke pixel.
            Tussentijds krijgt u een preview-link waarop u live mee kunt kijken.
          </p>
          <h3>4. Lancering & nazorg</h3>
          <p>
            We zetten de site live, koppelen Google Analytics en Search Console, en voeren een finale
            check op Core Web Vitals. Daarna ben ik beschikbaar voor doorontwikkeling.
          </p>

          <h2>Werkgebied</h2>
          <p>
            Hoewel ik landelijk werk, zit het zwaartepunt van mijn klanten in Rotterdam en de directe omgeving:
            Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam. Lokaal
            werken heeft één groot voordeel: ik begrijp uw markt, uw doelgroep en uw concurrentie.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="website-rotterdam" />
        </div>
      </article>

      <PricingSection compact />
      <CTASection
        title="Vraag een vrijblijvende offerte aan."
        subtitle="Vertel kort over uw bedrijf en wensen. U krijgt binnen 24 uur een reactie."
        button="Offerte aanvragen"
      />
    </>
  );
}
