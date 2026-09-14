import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js vs WordPress | Welke past bij jouw website in 2026?",
  description:
    "Next.js vs WordPress: een eerlijke vergelijking op snelheid, SEO, veiligheid en onderhoud. Ontdek welke oplossing het beste aansluit bij jouw bedrijf.",
  alternates: { canonical: "https://webboostpartner.nl/nextjs-vs-wordpress" },
};

export default function NextjsVsWordpressPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Vergelijking</p>

          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Next.js <span className="text-[#FF4500]">vs</span> WordPress
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Twee populaire platforms, ieder met een eigen kracht.  
            Dit is een eerlijke vergelijking — geen voorkeur, geen afkraken — maar een helder overzicht van wat beide systemen kunnen en wanneer ze het beste passen.
          </p>
        </div>
      </section>

      {/* SIDE-BY-SIDE */}
      <section className="bg-white py-16 sm:py-24 border-y-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-6">

          {/* WordPress */}
          <div className="border-2 border-black p-8 bg-[#FAFAFA]">
            <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-2">WordPress</p>
            <h2 className="font-heading font-extrabold uppercase text-4xl mb-4">CMS<br/>+ Thema’s</h2>

            <p className="text-[#1a1a1a] leading-relaxed">
              WordPress is het meest gebruikte CMS ter wereld. Het is toegankelijk, flexibel en biedt een enorme bibliotheek aan thema’s en plugins.  
              Voor veel ondernemers is het een laagdrempelige manier om snel een website te starten, met een vertrouwde backend en veel uitbreidingsmogelijkheden.
            </p>
          </div>

          {/* Next.js */}
          <div className="border-2 border-black p-8 bg-black text-white shadow-brutal-orange">
            <p className="font-mono text-xs uppercase tracking-widest text-[#FF4500] mb-2">Next.js</p>
            <h2 className="font-heading font-extrabold uppercase text-4xl mb-4">Framework<br/>+ Code</h2>

            <p className="leading-relaxed">
              Next.js is een modern React‑framework ontwikkeld door Vercel.  
              Het richt zich op snelheid, SEO, veiligheid en een professionele gebruikerservaring.  
              Het vraagt om een ontwikkelaar, maar levert een website die technisch sterk is en lang meegaat.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">

          <h2>Wat is WordPress?</h2>
          <p>
            WordPress is een open‑source CMS dat draait op PHP en een database.  
            Het biedt een vertrouwde backend, duizenden plugins en een ecosysteem dat geschikt is voor blogs, bedrijfswebsites en webshops.
          </p>
          <p>
            De kracht van WordPress zit in de flexibiliteit: veel functionaliteit is beschikbaar zonder maatwerk.  
            Voor ondernemers die zelf content willen beheren of snel willen starten, is WordPress een logische keuze.
          </p>

          <h2>Wat is Next.js?</h2>
          <p>
            Next.js is een React‑framework dat pagina’s vooraf rendert of server‑side levert.  
            Hierdoor worden websites extreem snel geladen en direct goed gelezen door zoekmachines.
          </p>
          <p>
            Grote bedrijven zoals Nike, Netflix en TikTok gebruiken Next.js vanwege de prestaties, schaalbaarheid en moderne architectuur.
          </p>

          <h2>Snelheid</h2>
          <p>
            Snelheid is een belangrijke factor voor gebruikservaring én SEO.  
            Beide systemen kunnen snel zijn, maar de technische basis verschilt:
          </p>

          <ul>
            <li><strong>WordPress</strong> — snelheid hangt af van thema’s, plugins en hosting. Met een licht thema en goede hosting kan WordPress prima presteren.</li>
            <li><strong>Next.js</strong> — pagina’s worden vooraf gerenderd of via edge‑servers geleverd, wat zorgt voor zeer korte laadtijden.</li>
          </ul>

          <p>
            Voor ondernemers die maximale prestaties willen, biedt Next.js een voorsprong door de moderne architectuur.
          </p>

          <h2>SEO</h2>
          <p>
            Beide systemen kunnen goed scoren in Google, maar de aanpak verschilt:
          </p>

          <ul>
            <li><strong>WordPress</strong> — SEO wordt vaak geregeld via plugins zoals Yoast of RankMath. Dit werkt goed, mits het thema en de hosting sterk zijn.</li>
            <li><strong>Next.js</strong> — SEO is ingebouwd via de Metadata API. Titles, descriptions en structured data worden direct in code ingesteld.</li>
          </ul>

          <p>
            Voor ondernemers die technische SEO belangrijk vinden, biedt Next.js meer controle en minder afhankelijkheid van plugins.
          </p>

          <h2>Veiligheid</h2>
          <p>
            Veiligheid is een belangrijk onderdeel van elke website:
          </p>

          <ul>
            <li><strong>WordPress</strong> — door het grote ecosysteem is het belangrijk om updates en beveiliging serieus te nemen. Met goede hosting en onderhoud is WordPress veilig.</li>
            <li><strong>Next.js</strong> — statische of server‑side gegenereerde pagina’s hebben geen publieke login‑omgeving, wat het aanvalsoppervlak verkleint.</li>
          </ul>

          <p>
            Beide systemen kunnen veilig zijn, mits ze goed worden beheerd en onderhouden.
          </p>

          <h2>Onderhoud</h2>
          <p>
            Onderhoud verschilt per platform:
          </p>

          <ul>
            <li><strong>WordPress</strong> — thema’s, plugins en core updates vragen regelmatig onderhoud.</li>
            <li><strong>Next.js</strong> — weinig onderhoud, vooral afhankelijk van hosting en framework‑updates.</li>
          </ul>

          <p>
            Voor ondernemers die weinig tijd willen besteden aan onderhoud, kan Next.js aantrekkelijk zijn.
          </p>

          <h2>Wanneer kiezen voor WordPress?</h2>
          <p>Kies WordPress als:</p>

          <ul>
            <li>U zelf veel content wilt beheren via een vertrouwde backend.</li>
            <li>U functionaliteit nodig heeft die beschikbaar is als plugin.</li>
            <li>U een beperkt budget heeft en snel wilt starten.</li>
            <li>U een CMS zoekt dat meerdere gebruikers ondersteunt.</li>
          </ul>

          <h2>Wanneer kiezen voor Next.js?</h2>
          <p>Kies Next.js als:</p>

          <ul>
            <li>Snelheid en SEO belangrijk zijn voor uw bedrijf.</li>
            <li>U een moderne, schaalbare website wilt die jaren meegaat.</li>
            <li>U een professionele uitstraling wilt zonder afhankelijkheid van thema’s.</li>
            <li>U later een headless CMS wilt koppelen voor flexibel beheer.</li>
          </ul>

          <p>
            Voor veel Rotterdamse ondernemers — ZZP, MKB, dienstverleners, coaches, bouwbedrijven — is Next.js een toekomstgerichte keuze.  
            Maar beide systemen kunnen uitstekend werken, afhankelijk van uw situatie.
          </p>
        </div>
      </article>

      <CTASection
        title="Welke oplossing past bij uw bedrijf?"
        subtitle="Tijdens een vrijblijvend gesprek bekijken we samen wat het beste aansluit bij uw doelen."
        button="Plan een gesprek"
      />
    </>
  );
}
