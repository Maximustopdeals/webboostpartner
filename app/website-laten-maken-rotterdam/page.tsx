import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website laten maken Rotterdam | Professionele Next.js Websites",
  description:
    "Wilt u een professionele website laten maken in Rotterdam? WebBoost Partner bouwt Next.js websites die mooi, snel én vindbaar zijn. Maatwerk vanaf €3.495.",
  alternates: { canonical: "https://webboostpartner.nl/website-laten-maken-rotterdam" },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Wat kost een website laten maken met Next.js?",
    a: "Bij WebBoost Partner werk ik met drie transparante pakketten die aansluiten bij verschillende soorten ondernemers. Het Essential pakket voor ZZP'ers en starters begint vanaf €3.495 excl. btw. Voor ondernemers die meer willen groeien is er het Professional pakket vanaf €5.495 excl. btw. Groeiende bedrijven kunnen kiezen voor het Enterprise pakket vanaf €8.495 excl. btw. Alle websites worden volledig op maat ontwikkeld. U weet vooraf precies waar u aan toe bent: geen verborgen kosten en geen verrassingen achteraf. Voor specifieke wensen maak ik graag een persoonlijk voorstel.",
  },
  {
    q: "Hoe lang duurt het traject?",
    a: "Een gemiddeld traject duurt ongeveer 2 tot 4 weken. De exacte planning hangt af van het aantal pagina's, de hoeveelheid content en hoe snel keuzes en feedback worden aangeleverd. Tijdens het traject blijft u betrokken en krijgt u inzicht in de voortgang. Een eenvoudige website kan sneller live gaan, terwijl uitgebreide websites met bijvoorbeeld blogs, meerdere diensten of lokale SEO meer tijd nodig hebben.",
  },
  {
    q: "Kan mijn bestaande WordPress website worden overgezet naar Next.js?",
    a: "Ja, een bestaande WordPress website kan worden vernieuwd naar Next.js. Dit gebeurt niet door simpelweg een knop om te zetten, maar door de website opnieuw op te bouwen met behoud van belangrijke onderdelen zoals content, structuur en SEO-waarde. Voor de overstap maken we een zorgvuldige migratie waarbij URL's, metadata en redirects worden meegenomen. Hierdoor blijft uw opgebouwde vindbaarheid behouden en krijgt u een modernere, snellere website.",
  },
  {
    q: "Is SEO inbegrepen?",
    a: "Ja. Iedere website wordt technisch SEO-proof gebouwd. Dit betekent onder andere een correcte structuur, metadata, schema markup, sitemap.xml, robots.txt, Open Graph en een logische heading-structuur. Voor lokale ondernemers in Rotterdam kunnen aanvullende lokale SEO-optimalisaties worden ingericht, zoals Google Business Profile optimalisatie, lokale structured data en verbeterde regionale vindbaarheid.",
  },
  {
    q: "Werk je alleen voor bedrijven in Rotterdam?",
    a: "WebBoost Partner richt zich voornamelijk op ondernemers in Rotterdam en omgeving, zoals Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam. Door lokaal betrokken te zijn, begrijp ik beter welke uitdagingen ondernemers hebben en hoe zij zich online kunnen onderscheiden. Een kennismakingsgesprek kan altijd op locatie of via een videocall.",
  },
  {
    q: "Wat als ik later iets wil aanpassen?",
    a: "Uw website wordt gebouwd met het oog op groei. Wilt u later nieuwe pagina's toevoegen, een dienst uitbreiden of functionaliteit toevoegen? Dan kan de website eenvoudig worden doorontwikkeld. Kleine aanpassingen zoals tekst- of beeldwijzigingen kunnen worden uitgevoerd tegen een vast uurtarief. Voor grotere doorontwikkelingen maak ik graag een persoonlijk voorstel. Bij het Enterprise pakket zit 6 maanden support inbegrepen voor doorontwikkeling.",
  },
  {
    q: "Waarom kiezen voor Next.js in plaats van WordPress?",
    a: "WordPress kan voor veel situaties een goede oplossing zijn, maar veel websites worden na verloop van tijd zwaar door thema's en plugins. Next.js biedt een moderne technische basis waarbij snelheid, veiligheid en prestaties centraal staan. Het resultaat is een website die sneller laadt, beter scoort in Google en minder onderhoud vraagt. Voor bedrijven die een snelle, professionele en toekomstgerichte website willen, is Next.js een krachtige keuze.",
  },
  {
    q: "Kan ik zelf mijn website aanpassen?",
    a: "Ja. Afhankelijk van uw wensen kan een CMS worden gekoppeld waarmee u zelf teksten, afbeeldingen of pagina's kunt aanpassen zonder technische kennis. U krijgt dan een gebruiksvriendelijke omgeving waarin u eenvoudig content kunt beheren. Voor grotere wijzigingen of uitbreidingen kunt u altijd terugvallen op WebBoost Partner. Zo combineert u flexibiliteit met professionele ondersteuning.",
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
          
          <p>
            Een professionele website ontstaat niet zomaar. Daarom werken we met een 
            duidelijk proces waarin strategie, ontwerp, techniek en optimalisatie 
            samenkomen.
          </p>

          <h3>1. Kennismaking & strategie</h3>
          <p>
            We starten met een vrijblijvend gesprek bij u op locatie, bij mij in 
            Rotterdam of via videocall. We bespreken uw bedrijf, doelgroep, doelen 
            en wat uw website moet bereiken.
          </p>
          <p>
            Daarnaast kijken we naar uw huidige online positie, uw concurrentie en 
            welke kansen er liggen om meer bezoekers om te zetten naar klanten.
          </p>
          <p>
            Op basis daarvan ontvangt u een duidelijk voorstel met de aanpak, 
            planning en investering.
          </p>

          <h3>2. Design & content</h3>
          <p>
            Op basis van uw merk, doelgroep en commerciële doelen ontwikkelen we een 
            professioneel ontwerp dat past bij uw onderneming.
          </p>
          <p>
            Geen standaard templates of een website met alleen uw logo erin, maar een 
            unieke uitstraling die vertrouwen opbouwt en bezoekers helpt de juiste 
            actie te nemen.
          </p>
          <p>
            Ook denken we mee over de inhoud, structuur en SEO-opbouw van uw website.
          </p>

          <h3>3. Ontwikkeling & optimalisatie</h3>
          <p>
            Uw website wordt gebouwd met <strong>Next.js</strong>: een moderne 
            technologie die zorgt voor snelheid, veiligheid en een sterke technische 
            basis.
          </p>
          <p>
            Tijdens de ontwikkeling letten we op gebruikservaring, technische SEO, 
            prestaties en een perfecte werking op mobiel, tablet en desktop.
          </p>
          <p>
            U krijgt tussentijds toegang tot een preview-link zodat u live kunt 
            meekijken en feedback kunt geven.
          </p>

          <h3>4. Lancering & nazorg</h3>
          <p>
            Na een uitgebreide controle zetten we uw website live. We koppelen 
            Google Analytics en Search Console en controleren belangrijke prestaties 
            zoals Core Web Vitals.
          </p>
          <p>
            Ook na de lancering kunt u bij WebBoost Partner terecht voor uitbreidingen, 
            verbeteringen en verdere groei van uw website.
          </p>

          <h2>Werkgebied</h2>
          <p>
            Hoewel WebBoost Partner landelijk werkt, ligt de focus op Rotterdam en de 
            directe omgeving: Capelle aan den IJssel, Krimpen aan den IJssel, 
            Ridderkerk, Barendrecht en Schiedam.
          </p>
          <p>
            Door lokaal betrokken te zijn, begrijp ik beter welke uitdagingen 
            ondernemers hebben, welke doelgroep zij willen bereiken en hoe zij zich 
            online kunnen onderscheiden van concurrenten.
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
