import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Laten Maken Prijzen & Pakketten | WebBoost Partner",
  description:
    "Transparante tarieven voor een professionele Next.js website. Bekijk onze pakketten voor ZZP en MKB. Razendsnel, optimaal vindbaar en zonder verborgen kosten.",
  alternates: { canonical: "https://webboostpartner.nl/pakketten" },
};

export default function PakkettenPage() {
  return (
    <>
      {/* HERO: Transparante en waardegerichte positionering */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Investeringsopbouw</p>

          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Transparante <span className="text-[#FF4500]">tarieven</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed text-[#1a1a1a] font-medium">
            Duidelijkheid vooraf, maximaal resultaat achteraf. Vier heldere Next.js pakketten afgestemd op de groeifase van jouw onderneming. Altijd zonder onverwachte kosten tussendoor.
          </p>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection compact />

      {/* CONTENT SECTION: Volledig geoptimaliseerd naar de Clean High-End strategie */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 prose-brutal">

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
          <p>
            Speciaal ontwikkeld voor ZZP'ers en startende ondernemers die direct een serieus, professioneel online visitekaartje willen neerzetten. Dit omvat 3 tot 5 complete pagina's, een solide SEO-basis en een extreem snelle laadtijd om direct lokaal je stempel te drukken.
          </p>

          <h3>Professional — €3.495 excl. btw</h3>
          <p>
            Jouw ideale keuze als MKB-ondernemer wanneer je website actief leads en aanvragen moet genereren via zoekmachines. Dit pakket is uitgebreid met strategische landingspagina's, lokale SEO-optimalisaties gericht op de regio Rotterdam, en een flexibele blog- of nieuwsmodule voor content marketing.
          </p>

          <h3>Premium — €5.495 excl. btw</h3>
          <p>
            Voor gevestigde bedrijven die online de absolute top in hun branche willen claimen. Dit omvat een high-end, volledig custom platform (10 tot 20 pagina's), diepgaande conversiepsychologie, vloeiende animaties en naadloze integraties met jouw CRM- of online boekingssystemen.
          </p>

          <h3>Enterprise — vanaf €7.995 excl. btw</h3>
          <p>
            Voor organisaties met complexe digitale processen, grotere webshops, klantomgevingen of dashboards. Inclusief complete merkstrategie, een headless CMS-koppeling voor flexibel beheer, en uitgebreide ondersteuning na livegang.
            <strong className="block mt-2 text-[#FF4500]">
              * Maatwerk is altijd mogelijk. Vraag gerust een voorstel op maat aan.
            </strong>
          </p>

          <div className="bg-[#FAFAFA] border-2 border-black p-6 my-8 shadow-brutal-sm">
            <h3 className="mt-0 mb-2">💡 Direct verkopen met een webshop?</h3>
            <p className="mb-0">
              Indien u producten online wilt verkopen, is het Enterprise-segment de juiste start. We integreren veilige betaalsystemen (iDEAL, Mollie, Stripe), richten overzichtelijke productpagina's in en leveren een stabiel admin-dashboard waarmee u eenvoudig zelf uw voorraad beheert. Dit is schaalbaar van 10 tot honderden producten.
            </p>
          </div>

          <h2>Wat zit er bewust níet in?</h2>
          <p>Eerlijkheid duurt het langst. Om misverstanden te voorkomen, vallen de volgende werkzaamheden buiten de scope van de standaardpakketten:</p>

          <ul>
            <li>Het volledig schrijven of redigeren van de paginateksten (contentlevering).</li>
            <li>Het ontwerpen van een compleet nieuw logo of een uitgebreide huisstijl.</li>
            <li>Doorlopend maandelijks SEO-onderhoud en linkbuilding na oplevering.</li>
            <li>Het opzetten en beheren van betaalde advertantiecampagnes (Google Ads).</li>
          </ul>
          <p>
            Mocht u hier toch ondersteuning bij wensen, dan denk ik uiteraard graag met u mee via een aanvullend voorstel of een vast uurtarief.
          </p>

          <h2>Hoe verloopt de betaling?</h2>
          <p>
            Om het risico volledig transparant te verdelen, werk ik standaard in twee termijnen: 50% bij de start van het project en de resterende 50% pas wanneer de website volledig naar wens is gecontroleerd en live wordt gezet.
          </p>
        </div>
      </section>

      {/* CTA SECTION: Direct gericht op advies i.p.v. harde verkoop */}
      <CTASection
        title="Ontdek welk pakket bij jouw doelen aansluit."
        subtitle="Twijfel je over de juiste scope voor jouw onderneming? Plan een vrijblijvend adviesgesprek in en we kijken samen welk fundament jou het meeste rendement oplevert."
        button="Plan gratis adviesgesprek"
        href="/contact?intent=advies"
      />
    </>
  );
}
