import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ"; // ✅ NIEUW
import Link from "next/link"; // ✅ NIEUW
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Laten Maken Prijzen & Pakketten | WebBoost Partner",
  description:
    "Transparante tarieven voor een professionele Next.js website. Bekijk onze pakketten voor ZZP en MKB. Razendsnel, optimaal vindbaar en zonder verborgen kosten.",
  alternates: { canonical: "/pakketten" },
  // ✅ NIEUW: openGraph + twitter voor consistentie
  openGraph: {
    title: "Website Laten Maken Prijzen & Pakketten | WebBoost Partner",
    description:
      "Vier heldere Next.js-pakketten vanaf €1.950. Maatwerk design, 95+ PageSpeed, SEO inbegrepen. Zonder verborgen kosten.",
    url: "https://www.webboostpartner.nl/pakketten",
    siteName: "WebBoost Partner",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Prijzen & Pakketten | WebBoost Partner",
    description:
      "Vier heldere Next.js-pakketten vanaf €1.950. Maatwerk design, 95+ PageSpeed, SEO inbegrepen.",
  },
};

// ✅ NIEUW: FAQ
interface FAQItem { q: string; a: string }

const faqs: FAQItem[] = [
  {
    q: "Wat kost een website bij WebBoost Partner?",
    a: "WebBoost Partner biedt vier pakketten: Starter vanaf €1.950, Professional €3.495, Premium €5.495 en Enterprise vanaf €7.995 (alle prijzen excl. btw). De prijs hangt af van het aantal pagina's, functionaliteit en gewenste SEO-diepte. U krijgt altijd vooraf een vaste prijsopgave.",
  },
  {
    q: "Wat is het verschil tussen de pakketten?",
    a: "Starter is voor ZZP'ers die snel een professioneel online visitekaartje willen (3–5 pagina's). Professional voegt strategische landingspagina's, lokale SEO en een blogmodule toe voor MKB. Premium biedt een volledig custom platform (10–20 pagina's) met conversiepsychologie en animaties. Enterprise is voor complexe processen, webshops of dashboards met headless CMS en nazorg.",
  },
  {
    q: "Zijn er verborgen kosten?",
    a: "Nee. WebBoost Partner werkt met een vaste prijs vooraf en twee betaaltermijnen: 50% bij de start en 50% bij livegang. Onderhoud, content schrijven, logo-ontwerp en doorlopende SEO vallen buiten de pakketten en worden apart geoffreerd of op uurtarief uitgevoerd.",
  },
  {
    q: "Kan ik een pakket later uitbreiden?",
    a: "Ja. Alle websites worden gebouwd op een schone Next.js-basis met 100% eigenaarschap van de code. U kunt later eenvoudig extra pagina's, een webshop, een klantomgeving of een CMS-koppeling toevoegen — zonder opnieuw te beginnen.",
  },
  {
    q: "Is onderhoud inbegrepen?",
    a: "Nee, doorlopend onderhoud en SEO na oplevering vallen buiten de pakketten. U kunt wel een apart onderhoudscontract afsluiten of op uurtarief bijwerken. Doordat Next.js vrijwel onderhoudsvrij is, is de structurele belasting minimaal.",
  },
  {
    q: "Wat zit er bewust niet in de pakketten?",
    a: "Buiten scope vallen: het volledig schrijven of redigeren van paginateksten, het ontwerpen van een nieuw logo of huisstijl, doorlopend maandelijks SEO-onderhoud en linkbuilding, en het opzetten en beheren van betaalde advertentiecampagnes (Google Ads). Dit kan wel als aanvullend voorstel.",
  },
];

export default function PakkettenPage() {
  return (
    <>
      {/* ✅ NIEUW: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.webboostpartner.nl/pakketten#webpage",
                url: "https://www.webboostpartner.nl/pakketten",
                name: "Website Laten Maken Prijzen & Pakketten | WebBoost Partner",
                description:
                  "Transparante tarieven voor een professionele Next.js website. Vier pakketten voor ZZP en MKB, zonder verborgen kosten.",
                isPartOf: { "@id": "https://www.webboostpartner.nl/#website" },
                about: { "@id": "https://www.webboostpartner.nl/#organization" },
                author: { "@id": "https://www.webboostpartner.nl/over-mij#person" },
                inLanguage: "nl-NL",
              },
              {
                "@type": "Service",
                "@id": "https://www.webboostpartner.nl/pakketten#service",
                name: "Next.js website pakketten",
                serviceType: "Webdesign en Next.js-websiteontwikkeling",
                description:
                  "Vier pakketten voor het laten maken van een Next.js-website: Starter, Professional, Premium en Enterprise.",
                provider: { "@id": "https://www.webboostpartner.nl/#organization" },
                areaServed: [
                  { "@type": "City", name: "Rotterdam" },
                  { "@type": "Country", name: "Nederland" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Website pakketten",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      price: "1950",
                      priceCurrency: "EUR",
                      description: "Starter — 3 tot 5 pagina's, SEO-basis, 95+ PageSpeed.",
                      itemOffered: {
                        "@type": "Service",
                        name: "Starter pakket",
                        description: "Voor ZZP'ers en startende ondernemers: 3 tot 5 pagina's met solide SEO-basis.",
                      },
                    },
                    {
                      "@type": "Offer",
                      price: "3495",
                      priceCurrency: "EUR",
                      description: "Professional — landingspagina's, lokale SEO Rotterdam, blogmodule.",
                      itemOffered: {
                        "@type": "Service",
                        name: "Professional pakket",
                        description: "Voor MKB: strategische landingspagina's, lokale SEO en blogmodule.",
                      },
                    },
                    {
                      "@type": "Offer",
                      price: "5495",
                      priceCurrency: "EUR",
                      description: "Premium — 10 tot 20 pagina's, conversiepsychologie, animaties, integraties.",
                      itemOffered: {
                        "@type": "Service",
                        name: "Premium pakket",
                        description: "Voor gevestigde bedrijven: custom platform met conversiepsychologie en integraties.",
                      },
                    },
                    {
                      "@type": "Offer",
                      price: "7995",
                      priceCurrency: "EUR",
                      description: "Enterprise — vanaf €7.995. Complexe processen, webshops, dashboards, headless CMS.",
                      itemOffered: {
                        "@type": "Service",
                        name: "Enterprise pakket",
                        description: "Voor organisaties met complexe digitale processen, webshops of dashboards.",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.webboostpartner.nl/pakketten#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.webboostpartner.nl/" },
                  { "@type": "ListItem", position: 2, name: "Pakketten", item: "https://www.webboostpartner.nl/pakketten" },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://www.webboostpartner.nl/pakketten#faq",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Investeringsopbouw</p>
          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Transparante <span className="text-[#FF4500]">tarieven</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed text-[#1a1a1a] font-medium">
            Duidelijkheid vooraf, maximaal resultaat achteraf. Vier heldere Next.js pakketten afgestemd op de groeifase van jouw onderneming. Altijd zonder onverwachte kosten tussendoor.
          </p>

          {/* ✅ NIEUW: TL;DR */}
          <div className="mt-6 border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A19] max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF4500] mb-2 font-bold">Kort antwoord</p>
            <p className="text-sm sm:text-base leading-relaxed text-[#1a1a1a]">
              WebBoost Partner biedt vier Next.js-pakketten: <strong>Starter €1.950</strong>, <strong>Professional €3.495</strong>, <strong>Premium €5.495</strong> en <strong>Enterprise vanaf €7.995</strong> (excl. btw). Alle pakketten inclusief maatwerk design, 95+ PageSpeed, technische SEO en 100% eigenaarschap. Betaling in twee termijnen (50/50).
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection compact />

      {/* CONTENT SECTION */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 prose-brutal">
          {/* ✅ NIEUW: auteur-signaal */}
          <p className="text-sm font-mono uppercase tracking-wider text-[#525252] mb-6">
            Geschreven door{" "}
            <Link href="/over-mij" className="text-[#FF4500] underline decoration-2">
              Ron — WebBoost Partner
            </Link>
          </p>

          <h2>Wat zit standaard in elk pakket?</h2>
          <p>Ongeacht de omvang van je project, geloof ik dat elk digitaal fundament technisch perfect moet zijn. Daarom krijgt elke website deze basiselementen mee:</p>
          <ul>
            <li><strong>Maatwerk Next.js ontwerp</strong> — Geen dertien-in-een-dozijn sjablonen, maar een unieke uitstraling die past bij uw merkidentiteit.</li>
            <li><strong>Responsive design</strong> — Foutloze weergave en optimale gebruiksvriendelijkheid op smartphone, tablet en desktop.</li>
            <li><strong>Technische SEO-optimalisatie</strong> — Ingebouwde Google-richtlijnen zoals correcte metadata, sitemaps en gestructureerde data.</li>
            <li><strong>Bliksemsnelle laadsnelheid</strong> — Volledig geoptimaliseerd om afhakers op mobiele netwerken te voorkomen.</li>
            <li><strong>Betrouwbare contactmogelijkheden</strong> — Werkende formulieren inclusief directe e-mailnotificaties en eventuele WhatsApp-integratie.</li>
            <li><strong>Conversiegericht fundament</strong> — Logische navigatiestructuren en duidelijke knoppen die de bezoeker aanzetten tot actie.</li>
            <li><strong>Google Analytics 4 setup</strong> — Correct ingericht zodat u vanaf dag één uw bezoekersstromen nauwkeurig kunt meten.</li>
          </ul>

          <h2>Hoe kies je het juiste pakket?</h2>
          <h3>Starter — €1.950 excl. btw</h3>
          <p>Speciaal ontwikkeld voor ZZP&apos;ers en startende ondernemers die direct een serieus, professioneel online visitekaartje willen neerzetten. Dit omvat 3 tot 5 complete pagina&apos;s, een solide SEO-basis en een extreem snelle laadtijd om direct lokaal je stempel te drukken.</p>
          <h3>Professional — €3.495 excl. btw</h3>
          <p>Jouw ideale keuze als MKB-ondernemer wanneer je website actief leads en aanvragen moet genereren via zoekmachines. Dit pakket is uitgebreid met strategische landingspagina&apos;s, lokale SEO-optimalisaties gericht op de regio Rotterdam, en een flexibele blog- of nieuwsmodule voor content marketing.</p>
          <h3>Premium — €5.495 excl. btw</h3>
          <p>Voor gevestigde bedrijven die online de absolute top in hun branche willen claimen. Dit omvat een high-end, volledig custom platform (10 tot 20 pagina&apos;s), diepgaande conversiepsychologie, vloeiende animaties en naadloze integraties met jouw CRM- of online boekingssystemen.</p>
          <h3>Enterprise — vanaf €7.995 excl. btw</h3>
          <p>
            Voor organisaties met complexe digitale processen, grotere webshops, klantomgevingen of dashboards. Inclusief complete merkstrategie, een headless CMS-koppeling voor flexibel beheer, en uitgebreide ondersteuning na livegang.
            <strong className="block mt-2 text-[#FF4500]">* Maatwerk is altijd mogelijk. Vraag gerust een voorstel op maat aan.</strong>
          </p>

          <div className="bg-[#FAFAFA] border-2 border-black p-6 my-8 shadow-brutal-sm">
            <h3 className="mt-0 mb-2">💡 Direct verkopen met een webshop?</h3>
            <p className="mb-0">Indien u producten online wilt verkopen, is het Enterprise-segment de juiste start. We integreren veilige betaalsystemen (iDEAL, Mollie, Stripe), richten overzichtelijke productpagina&apos;s in en leveren een stabiel admin-dashboard waarmee u eenvoudig zelf uw voorraad beheert. Dit is schaalbaar van 10 tot honderden producten.</p>
          </div>

          <h2>Wat zit er bewust níet in?</h2>
          <p>Eerlijkheid duurt het langst. Om misverstanden te voorkomen, vallen de volgende werkzaamheden buiten de scope van de standaardpakketten:</p>
          <ul>
            <li>Het volledig schrijven of redigeren van de paginateksten (contentlevering).</li>
            <li>Het ontwerpen van een compleet nieuw logo of een uitgebreide huisstijl.</li>
            <li>Doorlopend maandelijks SEO-onderhoud en linkbuilding na oplevering.</li>
            <li>Het opzetten en beheren van betaalde advertentiecampagnes (Google Ads).</li>
          </ul>
          <p>Mocht u hier toch ondersteuning bij wensen, dan denk ik uiteraard graag met u mee via een aanvullend voorstel of een vast uurtarief.</p>

          <h2>Hoe verloopt de betaling?</h2>
          <p>Om het risico volledig transparant te verdelen, werk ik standaard in twee termijnen: 50% bij de start van het project en de resterende 50% pas wanneer de website volledig naar wens is gecontroleerd en live wordt gezet.</p>

          {/* ✅ NIEUW: interne links */}
          <p>
            Wil je eerst de techniek vergelijken? Lees{" "}
            <Link href="/nextjs-vs-wordpress">Next.js vs WordPress</Link> of bekijk{" "}
            <Link href="/website-laten-maken-rotterdam">website laten maken in Rotterdam</Link>.
            SEO als los traject? Bekijk <Link href="/seo-rotterdam">SEO Rotterdam</Link>.
          </p>

          <h2>Veelgestelde vragen</h2>
        </div>

        {/* ✅ NIEUW: FAQ gerenderd */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 mt-6">
          <FAQ items={faqs} schemaId="pakketten" />
        </div>
      </section>

      <CTASection
        title="Ontdek welk pakket bij jouw doelen aansluit."
        subtitle="Twijfel je over de juiste scope voor jouw onderneming? Plan een vrijblijvend adviesgesprek in en we kijken samen welk fundament jou het meeste rendement oplevert."
        button="Plan gratis adviesgesprek"
        href="/contact?intent=advies"
      />
    </>
  );
}
