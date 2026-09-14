import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Pakketten | Starter €1.250 · Professional €1.950 · Premium €2.950 · Enterprise",
  description:
    "Heldere Next.js pakketten — van Starter voor ZZP'ers tot Premium voor bedrijven die willen groeien. Razendsnel, SEO‑technisch sterk en gebouwd voor maximale conversie.",
  alternates: { canonical: "https://webboostpartner.nl/pakketten" },
};

export default function PakkettenPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Pakketten</p>

          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Website <span className="text-[#FF4500]">pakketten</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Vier pakketten — van <strong>Starter</strong> voor ZZP&apos;ers tot 
            <strong> Premium</strong> voor bedrijven die willen groeien. 
            <strong> Geen verborgen kosten</strong>, wel snelheid, SEO en een website die scoort.
          </p>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection compact />

      {/* CONTENT SECTION */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 prose-brutal">

          <h2>Wat zit standaard in elk pakket?</h2>
          <p>Ongeacht welk pakket u kiest, krijgt u dezelfde fundamenten:</p>

          <ul>
            <li><strong>Maatwerk Next.js website</strong> — geen sjablonen, wel een design dat bij uw merk past.</li>
            <li><strong>Responsive ontwerp</strong> — perfect op mobiel, tablet en desktop.</li>
            <li><strong>Technische SEO</strong> — schema, sitemap, robots, OG-tags.</li>
            <li><strong>Core Web Vitals optimalisatie</strong> — sneller dan 90% van de concurrentie.</li>
            <li><strong>Contactformulier</strong> — werkend, met e-mailnotificatie.</li>
            <li><strong>Google Analytics 4</strong> — correct geconfigureerd.</li>
            <li><strong>Search Console setup</strong> — sitemap ingediend, eigendom geverifieerd.</li>
            <li><strong>SSL & hosting</strong> — eerste jaar inbegrepen.</li>
          </ul>

          <h2>Hoe kies ik het juiste pakket?</h2>

          <h3>Starter — vanaf €1.250</h3>
          <p>
            Ideaal voor ZZP&apos;ers en starters die snel een professionele online aanwezigheid nodig hebben.
            3–5 pagina&apos;s, basis SEO en een razendsnelle website die binnen 1 seconde laadt.
          </p>

          <h3>Professional — vanaf €1.950</h3>
          <p>
            Voor ondernemers die willen groeien en lokaal beter gevonden willen worden.
            Inclusief lokale SEO Rotterdam, landingspagina&apos;s, blogmodule en extra conversie‑optimalisatie.
          </p>

          <h3>Premium — vanaf €2.950</h3>
          <p>
            Voor bedrijven die maximale zichtbaarheid willen. High‑end ontwerp, technische SEO, 
            animaties, CRM‑integraties, dashboards en een laadtijd onder 0.8s.
          </p>

          <h3>Enterprise — offerte</h3>
          <p>
            Voor maatwerkprojecten, webshops, portals, dashboards en complexe integraties.
            Volledige strategie, headless CMS, schaalbare webshopfunctionaliteit en doorlopende ondersteuning.
            <strong className="block mt-2 text-[#FF4500]">
              Vanaf prijs — maatwerk mogelijk. Vraag een offerte op maat aan.
            </strong>
          </p>

          <div className="bg-[#FAFAFA] border-2 border-black p-6 my-8">
            <h3 className="mt-0 mb-2">💡 Webshop functionaliteit?</h3>
            <p className="mb-0">
              Het Enterprise pakket is de juiste keuze voor webshops. Denk aan productpagina&apos;s,
              iDEAL / Mollie / Stripe integratie, voorraadbeheer, ordersysteem en een admin dashboard.
              Vanaf 10 producten — schaalbaar tot honderden producten.
            </p>
          </div>

          <h2>Wat zit er níet in?</h2>
          <p>Eerlijk is eerlijk. Niet alles past in een pakket. Buiten scope (maar bespreekbaar):</p>

          <ul>
            <li>Content schrijven voor alle pagina&apos;s.</li>
            <li>Logo en huisstijl ontwerp.</li>
            <li>Maandelijks SEO‑onderhoud.</li>
            <li>Doorlopende advertentiecampagnes.</li>
            <li>Custom backend functionaliteit buiten de standaard.</li>
          </ul>

          <p>
            Voor alles wat buiten scope valt, geldt: ik denk graag mee. Soms is een ander pakket beter,
            soms een vaste prijsafspraak voor extra werk.
          </p>

          <h2>Hoe verloopt de betaling?</h2>
          <p>
            Standaard werk ik met twee termijnen: 50% bij start, 50% bij oplevering.
            Voor grotere projecten (Enterprise) is een derde termijn bij milestone bespreekbaar.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Vraag een offerte aan."
        subtitle="Niet zeker welk pakket bij u past? Stuur een berichtje, we bespreken het samen."
        button="Offerte aanvragen"
      />
    </>
  );
}
