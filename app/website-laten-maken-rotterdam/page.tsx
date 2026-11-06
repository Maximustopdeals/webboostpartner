import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Laten Maken Rotterdam | Vanaf €1.950 | Next.js | WebBoost Partner",
  description:
    "Website laten maken in Rotterdam? WebBoost Partner bouwt razendsnelle Next.js websites (95+ PageSpeed) voor ZZP & MKB. Vaste prijs, SEO inbegrepen, gratis adviesgesprek.",
  keywords: [
    "website laten maken Rotterdam",
    "webdesign Rotterdam",
    "website bouwen Rotterdam",
    "nieuwe website Rotterdam",
    "website maken ZZP Rotterdam",
    "professionele website Rotterdam",
    "Next.js website Rotterdam",
    "webdesign bureau Rotterdam",
  ],
  alternates: {
    canonical: "/website-laten-maken-rotterdam",
  },
  openGraph: {
    title: "Website Laten Maken Rotterdam | Vanaf €1.950 | WebBoost Partner",
    description:
      "Razendsnelle Next.js websites voor ZZP & MKB in Rotterdam. 95+ PageSpeed, SEO inbegrepen, vaste prijs. Vraag gratis adviesgesprek aan.",
    url: "https://www.webboostpartner.nl/website-laten-maken-rotterdam",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Website laten maken Rotterdam — WebBoost Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Rotterdam | Vanaf €1.950",
    description:
      "Razendsnelle Next.js websites met 95+ PageSpeed. SEO inbegrepen, vaste prijs, lokaal in Rotterdam.",
    images: ["/og.jpg"],
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
    q: "Kan mijn bestaande WordPress website worden vernieuwd?",
    a: "Ja. Uw WordPress website kan worden vernieuwd naar een moderne, snelle website. Dit gebeurt niet door simpelweg een knop om te zetten, maar door de website opnieuw op te bouwen met behoud van content, structuur en vindbaarheid in Google. Tijdens de migratie worden links en pagina's netjes meegenomen zodat uw huidige posities behouden blijven.",
  },
  {
    q: "Is SEO inbegrepen?",
    a: "Ja. Iedere website wordt technisch perfect opgebouwd: een correcte structuur, heldere pagina's, snelle laadtijden en een logische opbouw. Voor lokale ondernemers in Rotterdam zorgen we er aanvullend voor dat u goed gevonden wordt op lokale zoekwoorden zoals webdesign Rotterdam.",
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
    q: "Waarom een moderne technische basis in plaats van WordPress?",
    a: "WordPress is voor veel bedrijven een uitstekende start. Naarmate een website groeit, kunnen losse onderdelen en plugins de prestaties echter beïnvloeden. Een moderne technische basis zorgt voor optimale snelheid, veiligheid en prestaties. Het resultaat is een website die sneller laadt, beter scoort in Google en minder onderhoud vraagt.",
  },
  {
    q: "Kan ik zelf mijn website aanpassen?",
    a: "Ja. Afhankelijk van uw wensen kan een beheersysteem worden gekoppeld waarmee u zelf teksten, afbeeldingen of pagina's kunt beheren. Voor grotere wijzigingen kunt u altijd terugvallen op WebBoost Partner.",
  },
];

export default function WebsiteRotterdamPage() {
  return (
    <>
      {/* Schema Markup: WebPage + Breadcrumb + Service + LocalBusiness */}
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
                name: "Website Laten Maken Rotterdam | Vanaf €1.950 | WebBoost Partner",
                description:
                  "Website laten maken in Rotterdam? Razendsnelle Next.js websites met 95+ PageSpeed, SEO inbegrepen en vaste prijs. Voor ZZP en MKB.",
                isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
                about: { "@id": "https://www.webboostpartner.nl/#organization" },
                breadcrumb: {
                  "@id": "https://www.webboostpartner.nl/website-laten-maken-rotterdam#breadcrumb",
                },
                inLanguage: "nl-NL",
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
                "@type": "Service",
                "@id": "https://www.webboostpartner.nl/website-laten-maken-rotterdam#service",
                name: "Website laten maken Rotterdam",
                description:
                  "Professionele Next.js websites laten maken in Rotterdam. Inclusief design, ontwikkeling, technische SEO en 95+ PageSpeed score. Vaste prijzen vanaf €1.950.",
                provider: { "@id": "https://www.webboostpartner.nl/#organization" },
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
                  "Next.js development",
                  "Technische SEO",
                ],
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "EUR",
                  lowPrice: "1950",
                  highPrice: "7995",
                  offerCount: "4",
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://www.webboostpartner.nl/#organization",
                name: "WebBoost Partner",
                description:
                  "Next.js specialist en webdesign bureau in Rotterdam. Razendsnelle websites voor ZZP en MKB.",
                url: "https://www.webboostpartner.nl",
                telephone: "+31642628242",
                email: "info@webboostpartner.nl",
                priceRange: "€€",
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

          <h1 className="font-heading font-black uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl max-w-none">
            Website laten maken in <span className="text-[#FF4500]">Rotterdam</span>
          </h1>

          <p className="mt-6 text-xl max-w-3xl leading-relaxed font-semibold">
            Op zoek naar <strong>webdesign Rotterdam</strong> dat écht klanten oplevert? 
            WebBoost Partner bouwt razendsnelle Next.js websites die binnen 2 seconden laden, 
            beter scoren in Google en bezoekers omzetten in aanvragen. Geen templates, geen verrassingen — 
            wel een vaste prijs en een website die meegroeit met uw bedrijf.
          </p>

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
              Vaste prijs vanaf €1.950
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00B050] rounded-full" />
              Gratis adviesgesprek
            </li>
          </ul>

          {/* Dubbele CTA */}
          <div className="mt-9 flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/contact?intent=advies"
              className="inline-flex items-center justify-center gap-2 bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Vraag vrijblijvend adviesgesprek aan <ArrowRight size={18} />
            </Link>
            <Link
              href="/pakketten"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-heading font-bold uppercase tracking-wider border-2 border-black px-8 py-4 hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-brutal-sm transition-all"
            >
              Bekijk pakketten & prijzen
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO VERWIJZING */}
      <section className="bg-[#FAFAFA] py-20 sm:py-28 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
              // Recent werk
            </p>
            <h2 className="font-heading font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[0.95]">
              Websites die<br />presteren.
            </h2>
          </div>
          <div className="lg:col-span-7 prose-brutal">
            <p>
              Van lokale dienstverleners tot high-end projecten: elke website die wij bouwen 
              laadt razendsnel, scoort sterk in Google en is gericht op het genereren van aanvragen. 
              Bekijk recente cases en zie zelf het verschil.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 mt-6 bg-[#FF4500] text-black px-8 py-4 font-heading font-bold uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors border-2 border-black hover:-translate-y-1 hover:shadow-brutal-sm"
            >
              Bekijk recente projecten <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom een professionele website het verschil maakt</h2>

          <p>
            Uw website is vaak het eerste (en soms enige) contactmoment met een potentiële klant. 
            In minder dan drie seconden bepaalt iemand of uw bedrijf betrouwbaar en professioneel genoeg is 
            om contact mee op te nemen.
          </p>

          <p>
            Een trage of onduidelijke website kost u aanvragen. Een snelle, conversiegerichte website 
            levert ze op. Goed <strong>webdesign Rotterdam</strong> is daarom geen kostenpost, 
            maar een investering die direct bijdraagt aan meer leads en omzet.
          </p>

          <p>Met een sterke website:</p>

          <ul>
            <li>
              <strong>Bouwt u vertrouwen</strong> — bezoekers voelen direct dat u serieus bent.
            </li>
            <li>
              <strong>Genereert u meer aanvragen</strong> — duidelijke call-to-actions en een logische structuur.
            </li>
            <li>
              <strong>Wordt u beter gevonden</strong> — sterke technische SEO en lokale vindbaarheid.
            </li>
            <li>
              <strong>Bespaart u tijd</strong> — minder onderhoud, geen plugin-problemen, stabiele prestaties.
            </li>
          </ul>

          <h2>Wat u krijgt bij WebBoost Partner</h2>

          <p>
            Elke website die wij bouwen is een compleet digitaal fundament: strategie, design, 
            techniek en vindbaarheid in één. Geen half werk, geen open eindjes.
          </p>

          <ul>
            <li>
              <strong>Maatwerk design</strong> — geen templates, maar een unieke uitstraling die past bij uw merk en doelgroep.
            </li>
            <li>
              <strong>95+ PageSpeed score</strong> — pagina’s laden in minder dan 2 seconden, ook op mobiel.
            </li>
            <li>
              <strong>Technische SEO inbegrepen</strong> — schema markup, semantische HTML, sitemap en Core Web Vitals optimaal.
            </li>
            <li>
              <strong>Conversiegerichte structuur</strong> — elke pagina en knop is gericht op het genereren van aanvragen.
            </li>
            <li>
              <strong>Volledig responsief</strong> — perfecte weergave op telefoon, tablet en desktop.
            </li>
            <li>
              <strong>Vaste prijs vooraf</strong> — u weet precies waar u aan toe bent, zonder verrassingen achteraf.
            </li>
            <li>
              <strong>Direct contact met de bouwer</strong> — u werkt met Ron, niet met accountmanagers of freelancers.
            </li>
          </ul>

          <h2>Website laten maken voor ZZP’ers en MKB in Rotterdam</h2>

          <p>
            WebBoost Partner werkt vooral voor ondernemers in Rotterdam en de directe omgeving. 
            Of u nu een aannemer bent in Capelle aan den IJssel, een coach in Hillegersberg, 
            een fysiotherapeut in Kralingen of een dienstverlener in het centrum: uw website 
            moet uw vakmanschap zichtbaar maken en nieuwe klanten opleveren.
          </p>

          <p>
            Wij bouwen websites die vandaag sterk staan én morgen eenvoudig uit te breiden zijn 
            met nieuwe diensten, extra pagina’s of meerdere locaties. Zo groeit uw online aanwezigheid 
            mee met uw bedrijf.
          </p>

          <h2>Waarom Next.js in plaats van WordPress?</h2>

          <p>
            Veel websites starten op WordPress. Dat werkt prima — tot de plugins, updates en 
            beveiligingsproblemen de overhand nemen. Next.js (het framework achter sites van 
            onder andere Nike, Netflix en Notion) biedt een moderne, schone technische basis:
          </p>

          <ul>
            <li>
              <strong>Sneller</strong> — geen overbodige code of trage plugins.
            </li>
            <li>
              <strong>Veiliger</strong> — minder aanvalsoppervlak, geen kwetsbare plugins.
            </li>
            <li>
              <strong>Beter voor Google</strong> — volledige controle over snelheid en structuur.
            </li>
            <li>
              <strong>Toekomstbestendig</strong> — klaar voor groei zonder technische schuld.
            </li>
          </ul>

          <p>
            Voor Rotterdamse ondernemers betekent dit: een website die sneller laadt, 
            professioneler oogt en structureel meer resultaat oplevert. Dat is het verschil 
            met gemiddeld <strong>webdesign Rotterdam</strong>.
          </p>

          <h2>Het traject in vier stappen</h2>

          <h3>1. Kennismaking & strategie</h3>
          <p>
            We bespreken uw bedrijf, doelgroep en doelen. U krijgt een helder voorstel 
            met aanpak, planning en vaste investering — zonder verplichtingen.
          </p>

          <h3>2. Design & content</h3>
          <p>
            Een professioneel ontwerp dat past bij uw merk. Geen templates, 
            maar een unieke uitstraling die vertrouwen opbouwt en bezoekers overtuigt.
          </p>

          <h3>3. Ontwikkeling & optimalisatie</h3>
          <p>
            Uw website wordt gebouwd op een razendsnelle Next.js-basis. 
            We optimaliseren voor snelheid, gebruiksvriendelijkheid en vindbaarheid.
          </p>

          <h3>4. Lancering & nazorg</h3>
          <p>
            Na grondige controle gaat de site live. Ook daarna kunt u bij mij terecht 
            voor uitbreidingen, verbeteringen of vragen.
          </p>

          {/* WAT KOST HET */}
          <h2>Wat kost een website laten maken in Rotterdam?</h2>

          <p>
            U krijgt altijd een vaste prijs vooraf. Geen verrassingen, geen uurtje-factuurtje. 
            De investering hangt af van de omvang en uw ambities:
          </p>

          <ul>
            <li>
              <strong>Starter — €1.950</strong><br />
              Voor ZZP’ers en starters die serieus online willen. Professionele website, 
              snelle laadtijd en SEO-basis.
            </li>
            <li>
              <strong>Professional — €3.495</strong> <em>(meest gekozen)</em><br />
              Voor MKB-bedrijven die willen groeien. Meerdere dienstenpagina’s, sterkere SEO 
              en conversiegerichte structuur.
            </li>
            <li>
              <strong>Premium — €5.495</strong><br />
              Voor bedrijven die online structureel willen groeien. Uitgebreide functionaliteit 
              en maximale waarde.
            </li>
            <li>
              <strong>Enterprise — vanaf €7.995</strong><br />
              Voor organisaties met complexe eisen, doorlopende support en optimalisatie.
            </li>
          </ul>

          <p>
            Wilt u een exacte prijs voor uw situatie? Vraag een offerte aan. 
            U ontvangt binnen 48 uur een helder voorstel met vaste prijs.
          </p>

          <p>
            <Link
              href="/pakketten"
              className="inline-flex items-center gap-2 font-heading font-bold uppercase text-sm tracking-widest text-[#FF4500] hover:underline"
            >
              Bekijk alle pakketten en prijzen <ArrowRight size={16} />
            </Link>
          </p>

          {/* CTA NA PRIJZEN */}
          <div className="mt-10 p-6 border-2 border-black bg-[#FAFAFA]">
            <p className="font-heading font-bold uppercase text-lg mb-4">
              Klaar om te starten?
            </p>
            <p className="text-sm text-[#525252] mb-6">
              Plan een vrijblijvend adviesgesprek. Ik bekijk uw huidige situatie 
              en laat binnen 48 uur zien waar de kansen liggen.
            </p>
            <Link
              href="/contact?intent=advies"
              className="inline-flex items-center gap-2 bg-[#FF4500] text-black font-heading font-bold uppercase text-sm tracking-widest px-6 py-3 border-2 border-black hover:bg-black hover:text-white hover:-translate-y-1 transition-all"
            >
              Plan gratis adviesgesprek <ArrowRight size={16} />
            </Link>
          </div>

          {/* WERKGEBIED */}
          <h2>Werkgebied: Rotterdam en omgeving</h2>

          <p>
            Het zwaartepunt van mijn klanten ligt in Rotterdam en de directe omgeving: 
            Capelle aan den IJssel, Krimpen aan den IJssel, Ridderkerk, Barendrecht en Schiedam. 
            Lokaal werken heeft één groot voordeel: ik begrijp uw markt, uw doelgroep 
            en uw concurrentie. Kennismaken kan op locatie of via videocall.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="website-rotterdam" />
        </div>
      </article>

      {/* CTA */}
      <CTASection
        title="Klaar voor een website die klanten oplevert?"
        subtitle="Plan een gratis adviesgesprek. Ik bekijk uw situatie en stuur binnen 48 uur een heldere, vrijblijvende analyse — zonder verplichtingen."
        button="Plan gratis adviesgesprek"
        href="/contact?intent=advies"
      />
    </>
  );
}
