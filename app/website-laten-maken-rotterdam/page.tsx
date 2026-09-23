import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PortfolioSection from "@/components/PortfolioSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Laten Maken Rotterdam | Vanaf €1.250 | WebBoost Partner",
  description:
    "Professionele website laten maken in Rotterdam? WebBoost Partner bouwt snelle, SEO-geoptimaliseerde websites voor ZZP & MKB. Vaste prijzen. Gratis schets binnen 24 uur.",
  keywords: [
    "website laten maken Rotterdam",
    "webdesign Rotterdam",
    "website bouwen Rotterdam",
    "nieuwe website Rotterdam",
    "website maken ZZP Rotterdam",
    "website laten maken prijs",
    "goedkope website Rotterdam",
    "professionele website Rotterdam",
  ],
  alternates: {
    canonical: "https://www.webboostpartner.nl/website-laten-maken-rotterdam",
  },
  openGraph: {
    title: "Website Laten Maken Rotterdam | Vanaf €1.250 | WebBoost Partner",
    description:
      "Snelle, SEO-geoptimaliseerde websites voor Rotterdamse ondernemers. Vaste prijzen, gratis schets binnen 24 uur. Bekijk ons werk.",
    url: "https://www.webboostpartner.nl/website-laten-maken-rotterdam",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "article",
  },
};

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Hoe lang duurt het traject?",
    a: "Een gemiddeld traject duurt 2 tot 4 weken. De exacte planning hangt af van het aantal pagina's, de hoeveelheid content en hoe snel keuzes en feedback worden aangeleverd. Een eenvoudige website kan sneller live gaan, terwijl uitgebreide websites met blogs, meerdere diensten of lokale SEO meer tijd nodig hebben.",
  },
  {
    q: "Kan mijn bestaande WordPress website worden overgezet naar Next.js?",
    a: "Ja. Uw WordPress website kan worden vernieuwd naar Next.js. Dit gebeurt niet door simpelweg een knop om te zetten, maar door de website opnieuw op te bouwen met behoud van content, structuur en SEO-waarde. Tijdens de migratie worden URL's, metadata en redirects meegenomen zodat uw vindbaarheid behouden blijft.",
  },
  {
    q: "Is SEO inbegrepen?",
    a: "Ja. Iedere website wordt technisch SEO-proof gebouwd: correcte structuur, metadata, schema markup, sitemap.xml, robots.txt, Open Graph en een logische heading-structuur. Voor lokale ondernemers in Rotterdam kunnen aanvullende lokale SEO-optimalisaties worden ingericht.",
  },
  {
    q: "Werk je alleen voor bedrijven in Rotterdam?",
    a: "WebBoost Partner richt zich voornamelijk op ondernemers in Rotterdam en omgeving: Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam. Een kennismakingsgesprek kan op locatie of via videocall.",
  },
  {
    q: "Wat als ik later iets wil aanpassen?",
    a: "Uw website wordt gebouwd met het oog op groei. Nieuwe pagina's, diensten of functionaliteit kunnen eenvoudig worden toegevoegd. Kleine aanpassingen kunnen tegen een vast uurtarief worden uitgevoerd. Bij het Enterprise pakket zit 6 maanden support inbegrepen.",
  },
  {
    q: "Waarom kiezen voor Next.js in plaats van WordPress?",
    a: "Veel WordPress websites worden na verloop van tijd zwaar door thema's en plugins. Next.js biedt een moderne technische basis waarbij snelheid, veiligheid en prestaties centraal staan. Het resultaat is een website die sneller laadt, beter scoort in Google en minder onderhoud vraagt.",
  },
  {
    q: "Kan ik zelf mijn website aanpassen?",
    a: "Ja. Afhankelijk van uw wensen kan een CMS worden gekoppeld waarmee u zelf teksten, afbeeldingen of pagina's kunt beheren. Voor grotere wijzigingen kunt u altijd terugvallen op WebBoost Partner.",
  },
];

export default function WebsiteRotterdamPage() {
  return (
    <>
      {/* Schema Markup: LocalBusiness + BreadcrumbList + WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.webboostpartner.nl/website-laten-maken-rotterdam#webpage",
                url: "https://www.webboostpartner.nl/website-laten-maken-rotterdam",
                name: "Website Laten Maken Rotterdam | WebBoost Partner",
                isPartOf: {
                  "@id": "https://www.webboostpartner.nl/#website",
                },
                about: {
                  "@id": "https://www.webboostpartner.nl/#organization",
                },
                breadcrumb: {
                  "@id": "https://www.webboostpartner.nl/website-laten-maken-rotterdam#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.webboostpartner.nl/website-laten-maken-rotterdam#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.webboostpartner.nl/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Website laten maken Rotterdam",
                    item: "https://www.webboostpartner.nl/website-laten-maken-rotterdam",
                  },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.webboostpartner.nl/#localbusiness",
                name: "WebBoost Partner",
                description:
                  "Webdesign bureau in Rotterdam. Professionele websites voor ZZP en MKB.",
                url: "https://www.webboostpartner.nl/website-laten-maken-rotterdam",
                telephone: "+31642628242",
                email: "info@webboostpartner.nl",
                priceRange: "€",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Neeltje Griffijnstraat 12",
                  addressLocality: "Rotterdam",
                  postalCode: "3065 KD",
                  addressCountry: "NL",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "51.9225",
                  longitude: "4.47917",
                },
                areaServed: [
                  { "@type": "City", name: "Rotterdam" },
                  { "@type": "City", name: "Capelle aan den IJssel" },
                  { "@type": "City", name: "Krimpen aan den IJssel" },
                  { "@type": "City", name: "Ridderkerk" },
                  { "@type": "City", name: "Barendrecht" },
                  { "@type": "City", name: "Schiedam" },
                ],
                serviceType: [
                  "Webdesign",
                  "Website ontwikkeling",
                  "SEO",
                  "Next.js development",
                ],
                openingHours: ["Mo,Tu,We,Th,Fr 09:00-18:00"],
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Website laten maken Rotterdam
          </p>

          <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-5xl sm:text-7xl">
            Website laten
            <br />
            maken in <span className="text-[#FF4500]">Rotterdam</span>
          </h1>

          <div className="mt-6 space-y-4 text-lg sm:text-xl max-w-3xl leading-relaxed">
            <p>
              Een website die professioneel oogt, snel laadt en nieuwe klanten oplevert.
              WebBoost Partner bouwt moderne Next.js websites voor Rotterdamse ondernemers
              die online willen groeien.
            </p>

            <p>
              Geen standaard templates, maar een website die past bij uw bedrijf, doelgroep
              en ambities. Met een sterke technische basis, slimme SEO-structuur en een
              conversiegericht ontwerp.
            </p>
          </div>

          {/* Trust-bar */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono uppercase tracking-wider text-[#525252]">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              95+ PageSpeed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              SEO inbegrepen
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              Vaste prijs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              Gratis schets binnen 24 uur
            </li>
          </ul>

          {/* Dubbele CTA */}
          <div className="mt-9 flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/contact?intent=schets"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Vraag een gratis schets aan <ArrowRight size={18} />
            </Link>
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Bekijk pakketten
            </Link>
          </div>

          {/* Subtiele uitleg onder CTA */}
          <p className="mt-4 text-sm text-[#525252]">
            Binnen 24 uur ziet u hoe uw nieuwe website eruit kan zien — zonder verplichtingen.
          </p>
        </div>
      </section>

      {/* PORTFOLIO */}
      <PortfolioSection />

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
            <li>
              <strong>Vertrouwen opbouwen</strong> door een professionele uitstraling.
            </li>
            <li>
              <strong>Meer aanvragen genereren</strong> met duidelijke CTA's.
            </li>
            <li>
              <strong>Uw merk versterken</strong> met een herkenbare uitstraling.
            </li>
            <li>
              <strong>Beter gevonden worden</strong> dankzij een sterke technische basis.
            </li>
          </ul>

          <h2>Wat krijgt u bij een website van WebBoost Partner</h2>

          <p>
            Een website moet een digitaal fundament zijn waarmee uw bedrijf kan groeien.
            Daarom combineren wij strategie, design, techniek en SEO.
          </p>

          <ul>
            <li>
              <strong>Maatwerk design</strong> — geen templates, maar een unieke uitstraling.
            </li>
            <li>
              <strong>Responsive ontwerp</strong> — perfect op mobiel, tablet en desktop.
            </li>
            <li>
              <strong>Technische SEO</strong> — correcte structuur, metadata en schema markup.
            </li>
            <li>
              <strong>Uitstekende prestaties</strong> — razendsnel en Core Web Vitals-proof.
            </li>
            <li>
              <strong>Conversiegerichte structuur</strong> — duidelijke navigatie en CTA's.
            </li>
            <li>
              <strong>Google Analytics 4 & Search Console</strong> — correct ingericht.
            </li>
            <li>
              <strong>Betrouwbare contactmogelijkheden</strong> — formulieren die werken.
            </li>
          </ul>

          <h2>Website laten maken voor ZZP en MKB</h2>

          <p>
            WebBoost Partner helpt ZZP'ers en MKB-bedrijven in Rotterdam en omgeving
            met websites die professioneel ogen en bijdragen aan groei.
          </p>

          <p>
            Of u nu een aannemer bent in Capelle aan den IJssel, een coach in Hillegersberg,
            een fysiotherapeut in Kralingen of een ondernemer in het centrum: uw website
            moet uw vakmanschap zichtbaar maken.
          </p>

          <p>
            Vandaag een sterke basis, morgen eenvoudig uit te breiden met nieuwe diensten,
            extra pagina's of meerdere locaties.
          </p>

          <h2>Waarom bouwen met Next.js</h2>

          <p>
            Next.js biedt een moderne technische basis waarmee websites extreem snel,
            veilig en toekomstgericht gebouwd worden.
          </p>

          <ul>
            <li>
              <strong>Snellere prestaties</strong> — korte laadtijden.
            </li>
            <li>
              <strong>Sterke SEO-basis</strong> — volledige controle over metadata.
            </li>
            <li>
              <strong>Meer veiligheid</strong> — minder afhankelijkheid van plugins.
            </li>
            <li>
              <strong>Toekomstbestendig</strong> — klaar voor groei.
            </li>
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

          {/* WAT KOST HET — ACTUELE PRIJZEN UIT SCREENSHOT */}
          <h2>Wat kost een website laten maken in Rotterdam?</h2>

          <p>
            De investering hangt af van uw wensen. Een professionele website op maat
            start bij een vast bedrag dat vooraf duidelijk is — geen verrassingen achteraf.
          </p>

          <p>Onze pakketten zijn opgebouwd voor verschillende behoeften:</p>

          <ul>
            <li>
              <strong>Starter — vanaf €1.250</strong> voor ZZP'ers en starters die een professionele
              website nodig hebben om serieus online te gaan.
            </li>
            <li>
              <strong>Professional — vanaf €1.950</strong> voor MKB-bedrijven die willen groeien met
              SEO, meerdere diensten en conversiegerichte pagina's. Dit is ons meest gekozen pakket.
            </li>
            <li>
              <strong>Premium — vanaf €2.950</strong> voor bedrijven die online structureel willen groeien
              met uitgebreide functionaliteit en de beste waarde.
            </li>
            <li>
              <strong>Enterprise — op offerte</strong> voor organisaties met complexe digitale behoeften,
              support en doorlopende optimalisatie.
            </li>
          </ul>

          <p>
            Wilt u een exacte prijs voor uw situatie? Vraag een offerte aan — u ontvangt
            binnen 24 uur een helder voorstel met vaste prijs.
          </p>

          <p>
            <Link
              href="/pakketten"
              className="inline-flex items-center gap-2 font-heading font-bold uppercase text-sm tracking-widest text-[#FF4500] hover:underline"
            >
              Bekijk alle pakketten en prijzen <ArrowRight size={16} />
            </Link>
          </p>

          {/* WERKGEBIED */}
          <h2>Werkgebied</h2>

          <p>
            Hoewel ik landelijk werk, zit het zwaartepunt van mijn klanten in Rotterdam
            en de directe omgeving: Capelle aan den IJssel, Krimpen aan den IJssel,
            Ridderkerk, Barendrecht en Schiedam. Lokaal werken heeft één groot voordeel:
            ik begrijp uw markt, uw doelgroep en uw concurrentie.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="website-rotterdam" />
        </div>
      </article>

      {/* CTA */}
      <CTASection
        title="Vraag een gratis schets aan."
        subtitle="Binnen 24 uur ziet u hoe uw nieuwe website eruit kan zien. Zonder verplichtingen, zonder verkoopgesprek."
        button="Vraag gratis schets aan"
        href="/contact?intent=schets"
      />
    </>
  );
}
