import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Laten Maken Prijzen & Pakketten | WebBoost Partner",
  description:
    "Transparante tarieven voor een professionele Next.js website. Bekijk onze pakketten voor ZZP en MKB. Razendsnel, optimaal vindbaar en zonder verborgen kosten.",
  alternates: { canonical: "/pakketten" },
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
      {/* JSON-LD Schema */}
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
      <section className="bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-6">
            Investeringsopbouw
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
            Transparante <span className="text-brand italic">tarieven</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-foreground-muted font-sans mb-10">
            Duidelijkheid vooraf, maximaal resultaat achteraf. Vier heldere Next.js pakketten afgestemd op de groeifase van jouw onderneming. Altijd zonder onverwachte kosten tussendoor.
          </p>

          {/* TL;DR */}
          <div className="bg-background-secondary p-6 sm:p-8 rounded-sm border border-border-subtle max-w-3xl mx-auto text-left">
            <p className="font-sans text-xs uppercase tracking-widest text-brand font-bold mb-3">Kort antwoord</p>
            <p className="text-base leading-relaxed text-foreground-muted font-sans">
              WebBoost Partner biedt vier Next.js-pakketten: <strong className="text-foreground font-semibold">Starter €1.950</strong>, <strong className="text-foreground font-semibold">Professional €3.495</strong>, <strong className="text-foreground font-semibold">Premium €5.495</strong> en <strong className="text-foreground font-semibold">Enterprise vanaf €7.995</strong> (excl. btw). Alle pakketten inclusief maatwerk design, 95+ PageSpeed, technische SEO en 100% eigenaarschap. Betaling in twee termijnen (50/50).
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <div className="bg-background-secondary border-y border-border-subtle">
        <PricingSection compact />
      </div>

      {/* CONTENT SECTION */}
      <section className="bg-background py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <p className="text-sm font-sans text-foreground-muted mb-10">
            Geschreven door{" "}
            <Link href="/over-mij" className="text-brand font-medium underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">
              Ron — WebBoost Partner
            </Link>
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Wat zit standaard in elk pakket?</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Ongeacht de omvang van je project, geloof ik dat elk digitaal fundament technisch perfect moet zijn. Daarom krijgt elke website deze basiselementen mee:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            {[
              { t: "Maatwerk Next.js ontwerp", d: "Geen dertien-in-een-dozijn sjablonen, maar een unieke uitstraling die past bij uw merkidentiteit." },
              { t: "Responsive design", d: "Foutloze weergave en optimale gebruiksvriendelijkheid op smartphone, tablet en desktop." },
              { t: "Technische SEO-optimalisatie", d: "Ingebouwde Google-richtlijnen zoals correcte metadata, sitemaps en gestructureerde data." },
              { t: "Bliksemsnelle laadsnelheid", d: "Volledig geoptimaliseerd om afhakers op mobiele netwerken te voorkomen." },
              { t: "Betrouwbare contactmogelijkheden", d: "Werkende formulieren inclusief directe e-mailnotificaties en eventuele WhatsApp-integratie." },
              { t: "Conversiegericht fundament", d: "Logische navigatiestructuren en duidelijke knoppen die de bezoeker aanzetten tot actie." },
              { t: "Google Analytics 4 setup", d: "Correct ingericht zodat u vanaf dag één uw bezoekersstromen nauwkeurig kunt meten." }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="text-brand shrink-0 mt-1" size={20} />
                <span><strong className="text-foreground font-semibold">{item.t}</strong> — {item.d}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-16 mb-6">Hoe kies je het juiste pakket?</h2>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-3">Starter — €1.950 excl. btw</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Speciaal ontwikkeld voor ZZP&apos;ers en startende ondernemers die direct een serieus, professioneel online visitekaartje willen neerzetten. Dit omvat 3 tot 5 complete pagina&apos;s, een solide SEO-basis en een extreem snelle laadtijd om direct lokaal je stempel te drukken.
          </p>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-3">Professional — €3.495 excl. btw</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Jouw ideale keuze als MKB-ondernemer wanneer je website actief leads en aanvragen moet genereren via zoekmachines. Dit pakket is uitgebreid met strategische landingspagina&apos;s, lokale SEO-optimalisaties gericht op de regio Rotterdam, en een flexibele blog- of nieuwsmodule voor content marketing.
          </p>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-3">Premium — €5.495 excl. btw</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Voor gevestigde bedrijven die online de absolute top in hun branche willen claimen. Dit omvat een high-end, volledig custom platform (10 tot 20 pagina&apos;s), diepgaande conversiepsychologie, vloeiende animaties en naadloze integraties met jouw CRM- of online boekingssystemen.
          </p>
          
          <h3 className="font-serif text-2xl text-foreground mt-8 mb-3">Enterprise — vanaf €7.995 excl. btw</h3>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Voor organisaties met complexe digitale processen, grotere webshops, klantomgevingen of dashboards. Inclusief complete merkstrategie, een headless CMS-koppeling voor flexibel beheer, en uitgebreide ondersteuning na livegang.
          </p>
          <p className="text-brand font-medium mb-8">
            * Maatwerk is altijd mogelijk. Vraag gerust een voorstel op maat aan.
          </p>

          {/* Callout box */}
          <div className="bg-background-secondary border-l-4 border-brand p-6 sm:p-8 my-10 rounded-r-sm">
            <h3 className="font-serif text-2xl text-foreground mb-3 flex items-center gap-2">
              <ShoppingBag className="text-brand" size={24} /> Direct verkopen met een webshop?
            </h3>
            <p className="text-foreground-muted leading-relaxed text-lg">
              Indien u producten online wilt verkopen, is het Enterprise-segment de juiste start. We integreren veilige betaalsystemen (iDEAL, Mollie, Stripe), richten overzichtelijke productpagina&apos;s in en leveren een stabiel admin-dashboard waarmee u eenvoudig zelf uw voorraad beheert. Dit is schaalbaar van 10 tot honderden producten.
            </p>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Wat zit er bewust níet in?</h2>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Eerlijkheid duurt het langst. Om misverstanden te voorkomen, vallen de volgende werkzaamheden buiten de scope van de standaardpakketten:
          </p>
          <ul className="space-y-4 mb-8 text-foreground-muted text-lg">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Het volledig schrijven of redigeren van de paginateksten (contentlevering).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Het ontwerpen van een compleet nieuw logo of een uitgebreide huisstijl.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Doorlopend maandelijks SEO-onderhoud en linkbuilding na oplevering.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
              <span>Het opzetten en beheren van betaalde advertentiecampagnes (Google Ads).</span>
            </li>
          </ul>
          <p className="text-foreground-muted leading-relaxed mb-6 text-lg">
            Mocht u hier toch ondersteuning bij wensen, dan denk ik uiteraard graag met u mee via een aanvullend voorstel of een vast uurtarief.
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-12 mb-6">Hoe verloopt de betaling?</h2>
          <p className="text-foreground-muted leading-relaxed mb-10 text-lg">
            Om het risico volledig transparant te verdelen, werk ik standaard in twee termijnen: 50% bij de start van het project en de resterende 50% pas wanneer de website volledig naar wens is gecontroleerd en live wordt gezet.
          </p>

          <p className="text-foreground-muted leading-relaxed mb-12 text-lg">
            Wil je eerst de techniek vergelijken? Lees{" "}
            <Link href="/nextjs-vs-wordpress" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">Next.js vs WordPress</Link> of bekijk{" "}
            <Link href="/website-laten-maken-rotterdam" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">website laten maken in Rotterdam</Link>.
            SEO als los traject? Bekijk <Link href="/seo-rotterdam" className="text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand transition-colors">SEO Rotterdam</Link>.
          </p>

          <div className="pt-12 border-t border-border-subtle mt-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">Veelgestelde vragen</h2>
            <FAQ items={faqs} schemaId="pakketten" />
          </div>
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
