import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website laten maken Rotterdam | Professionele Next.js Websites",
  description:
    "Een professionele website laten maken in Rotterdam? WebBoost Partner bouwt snelle, moderne Next.js websites die scoren in Google en nieuwe klanten opleveren.",
  alternates: { canonical: "https://webboostpartner.nl/website-laten-maken-rotterdam" },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Hoe lang duurt het traject?",
    a: "Een gemiddeld traject duurt 2 tot 4 weken. De exacte planning hangt af van het aantal pagina’s, de hoeveelheid content en hoe snel keuzes en feedback worden aangeleverd. Een eenvoudige website kan sneller live gaan, terwijl uitgebreide websites met blogs, meerdere diensten of lokale SEO meer tijd nodig hebben.",
  },
  {
    q: "Kan mijn bestaande WordPress website worden overgezet naar Next.js?",
    a: "Ja. Uw WordPress website kan worden vernieuwd naar Next.js. Dit gebeurt niet door simpelweg een knop om te zetten, maar door de website opnieuw op te bouwen met behoud van content, structuur en SEO‑waarde. Tijdens de migratie worden URL’s, metadata en redirects meegenomen zodat uw vindbaarheid behouden blijft.",
  },
  {
    q: "Is SEO inbegrepen?",
    a: "Ja. Iedere website wordt technisch SEO‑proof gebouwd: correcte structuur, metadata, schema markup, sitemap.xml, robots.txt, Open Graph en een logische heading‑structuur. Voor lokale ondernemers in Rotterdam kunnen aanvullende lokale SEO‑optimalisaties worden ingericht.",
  },
  {
    q: "Werk je alleen voor bedrijven in Rotterdam?",
    a: "WebBoost Partner richt zich voornamelijk op ondernemers in Rotterdam en omgeving: Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam. Een kennismakingsgesprek kan op locatie of via videocall.",
  },
  {
    q: "Wat als ik later iets wil aanpassen?",
    a: "Uw website wordt gebouwd met het oog op groei. Nieuwe pagina’s, diensten of functionaliteit kunnen eenvoudig worden toegevoegd. Kleine aanpassingen kunnen tegen een vast uurtarief worden uitgevoerd. Bij het Enterprise pakket zit 6 maanden support inbegrepen.",
  },
  {
    q: "Waarom kiezen voor Next.js in plaats van WordPress?",
    a: "Veel WordPress websites worden na verloop van tijd zwaar door thema’s en plugins. Next.js biedt een moderne technische basis waarbij snelheid, veiligheid en prestaties centraal staan. Het resultaat is een website die sneller laadt, beter scoort in Google en minder onderhoud vraagt.",
  },
  {
    q: "Kan ik zelf mijn website aanpassen?",
    a: "Ja. Afhankelijk van uw wensen kan een CMS worden gekoppeld waarmee u zelf teksten, afbeeldingen of pagina’s kunt beheren. Voor grotere wijzigingen kunt u altijd terugvallen op WebBoost Partner.",
  },
];

export default function WebsiteRotterdamPage() {
  return (
    <>
      {/* HERO */}
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
              Een website die professioneel oogt, snel laadt en nieuwe klanten oplevert. 
              WebBoost Partner bouwt moderne Next.js websites voor Rotterdamse ondernemers 
              die online willen groeien.
            </p>

            <p>
              Geen standaard templates, maar een website die past bij uw bedrijf, doelgroep 
              en ambities. Met een sterke technische basis, slimme SEO‑structuur en een 
              conversiegericht ontwerp.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">

          <h2>Waarom een professionele website belangrijk is</h2>

          <p>
            Uw website is vaak het eerste contactmoment met een potentiële klant. 
            Nog voordat iemand belt of een offerte aanvraagt, vormt een bezoeker een 
            eerste indruk op basis van uw website.
          </p>

          <p>
            In enkele seconden bepaalt iemand of uw bedrijf professioneel, betrouwbaar 
            en geschikt genoeg is om contact mee op te nemen. Daarom moet een website 
            niet alleen mooi zijn, maar vooral effectief werken.
          </p>

          <p>Een professionele website helpt u met:</p>

          <ul>
            <li><strong>Vertrouwen opbouwen</strong> door een professionele uitstraling.</li>
            <li><strong>Meer aanvragen genereren</strong> met duidelijke CTA’s.</li>
            <li><strong>Uw merk versterken</strong> met een herkenbare uitstraling.</li>
            <li><strong>Beter gevonden worden</strong> dankzij een sterke technische basis.</li>
          </ul>

          <h2>Wat krijgt u bij een website van WebBoost Partner</h2>

          <p>
            Een website moet een digitaal fundament zijn waarmee uw bedrijf kan groeien. 
            Daarom combineren wij strategie, design, techniek en SEO.
          </p>

          <ul>
            <li><strong>Maatwerk design</strong> — geen templates, maar een unieke uitstraling.</li>
            <li><strong>Responsive ontwerp</strong> — perfect op mobiel, tablet en desktop.</li>
            <li><strong>Technische SEO</strong> — correcte structuur, metadata en schema markup.</li>
            <li><strong>Uitstekende prestaties</strong> — razendsnel en Core Web Vitals‑proof.</li>
            <li><strong>Conversiegerichte structuur</strong> — duidelijke navigatie en CTA’s.</li>
            <li><strong>Google Analytics 4 & Search Console</strong> — correct ingericht.</li>
            <li><strong>Betrouwbare contactmogelijkheden</strong> — formulieren die werken.</li>
          </ul>

          <h2>Website laten maken voor ZZP en MKB</h2>

          <p>
            WebBoost Partner helpt ZZP’ers en MKB‑bedrijven in Rotterdam en omgeving 
            met websites die professioneel ogen en bijdragen aan groei.
          </p>

          <p>
            Of u nu een aannemer bent in Capelle aan den IJssel, een coach in Hillegersberg, 
            een fysiotherapeut in Kralingen of een ondernemer in het centrum: uw website 
            moet uw vakmanschap zichtbaar maken.
          </p>

          <p>
            Vandaag een sterke basis, morgen eenvoudig uit te breiden met nieuwe diensten, 
            extra pagina’s of meerdere locaties.
          </p>

          <h2>Waarom bouwen met Next.js</h2>

          <p>
            Next.js biedt een moderne technische basis waarmee websites extreem snel, 
            veilig en toekomstgericht gebouwd worden.
          </p>

          <ul>
            <li><strong>Snellere prestaties</strong> — korte laadtijden.</li>
            <li><strong>Sterke SEO‑basis</strong> — volledige controle over metadata.</li>
            <li><strong>Meer veiligheid</strong> — minder afhankelijkheid van plugins.</li>
            <li><strong>Toekomstbestendig</strong> — klaar voor groei.</li>
          </ul>

          <p>
            Voor Rotterdamse ondernemers betekent dit: een website die sneller werkt, 
            professioneler oogt en klaar is om online meer resultaat te behalen.
          </p>

          <h2>Het traject in vier stappen</h2>

          <h3>1. Kennismaking & strategie</h3>
          <p>
            We bespreken uw bedrijf, doelgroep en doelen. U krijgt een duidelijk voorstel 
            met aanpak, planning en investering.
          </p>

          <h3>2. Design & content</h3>
          <p>
            Een professioneel ontwerp dat past bij uw merk en doelgroep. Geen templates, 
            maar een unieke uitstraling die vertrouwen opbouwt.
          </p>

          <h3>3. Ontwikkeling & optimalisatie</h3>
          <p>
            Uw website wordt gebouwd met Next.js. Tijdens de ontwikkeling letten we op 
            gebruikservaring, SEO en prestaties.
          </p>

          <h3>4. Lancering & nazorg</h3>
          <p>
            Na een uitgebreide controle zetten we uw website live. Ook daarna kunt u 
            terecht voor uitbreidingen en verbeteringen.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="website-rotterdam" />
        </div>
      </article>

      <CTASection
        title="Vraag een vrijblijvende offerte aan."
        subtitle="Vertel kort over uw bedrijf en wensen. U krijgt binnen 24 uur een reactie."
        button="Offerte aanvragen"
      />
    </>
  );
}
