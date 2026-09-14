import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import PortfolioSection from "@/components/PortfolioSection";
import type { Metadata } from "next";

function NextjsLogoCard() {
  return (
    <div className="bg-[#0A0A0A] border-2 border-black p-8 flex items-center justify-center relative z-10 min-h-[300px]">
      <svg viewBox="0 0 180 180" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
        <mask id="m" maskUnits="userSpaceOnUse">
          <circle cx="90" cy="90" r="90" fill="white"/>
        </mask>
        <g mask="url(#m)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.5 157.5L69.5 60H60v60h8.5V72.5l72.5 93.5c3-1.8 5.8-3.9 8.5-6.3z" fill="white"/>
          <path d="M146 60h-8v60h8V60z" fill="white"/>
        </g>
      </svg>
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">Gebouwd met</p>
        <p className="font-heading font-extrabold uppercase text-lg text-white tracking-tight">Next.js</p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Over mij | Ron — Next.js webbouwer Rotterdam",
  description:
    "Ron uit Rotterdam — Next.js specialist voor ZZP & MKB. Snelle websites, sterke SEO en conversiegericht ontwerp. Geen WordPress-problemen, maar moderne techniek die werkt.",
  alternates: { canonical: "https://webboostpartner.nl/over-mij" },
};

export default function OverMijPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Over mij</p>
            <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
              Over mij — <span className="text-[#FF4500]">Next.js</span> webbouwer Rotterdam
            </h1>

            <div className="mt-6 space-y-4 text-lg sm:text-xl max-w-2xl leading-relaxed">
              <p>
                Ik ben <strong>Ron</strong>, oprichter van WebBoost Partner. 
                Ik bouw Next.js websites die binnen 1 seconde laden, beter scoren in Google 
                en ondernemers helpen groeien.
              </p>

              <p>
                Wat begon als hobby naast mijn baan, groeide uit tot een specialisme. 
                Inmiddels heb ik meerdere Next.js projecten gebouwd voor echte ondernemers — 
                van schoonmaakbedrijven tot rijscholen en zorgprofessionals.
              </p>

              <p>
                Ik werk bewust kleinschalig en persoonlijk. Geen grote bureaus, geen accountmanagers — 
                u werkt rechtstreeks met mij. Duidelijk, eerlijk en zonder gedoe.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-sm ml-auto">
              <div className="bg-white border-2 border-black p-2 relative z-10">
                <NextjsLogoCard />
                <div className="px-3 py-3 border-t-2 border-black mt-2">
                  <p className="font-heading font-bold uppercase text-sm">Ron · Founder</p>
                  <p className="font-mono text-xs text-[#525252] flex items-center gap-1 mt-1">
                    <MapPin size={12} /> Rotterdam, NL
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#FF4500] border-2 border-black -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* USP BLOK */}
      <section className="bg-white py-20 border-y-2 border-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "100/100 PageSpeed",
              desc: "Sneller dan 98% van alle websites.",
            },
            {
              title: "Technische SEO inbegrepen",
              desc: "Direct zichtbaar in Google.",
            },
            {
              title: "Maatwerk Next.js ontwerp",
              desc: "Geen templates — pure branding.",
            },
          ].map((item, i) => (
            <div key={i} className="border-2 border-black bg-[#FAFAFA] p-6 shadow-brutal">
              <Sparkles className="text-[#FF4500] mb-3" size={22} />
              <h3 className="font-heading font-black uppercase text-xl mb-2">{item.title}</h3>
              <p className="text-[#525252]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          <h2>Waarom ik WebBoost Partner ben gestart</h2>

          <p>
            Jarenlang bouwde ik WordPress‑websites. Maar ik zag ondernemers steeds 
            tegen dezelfde problemen aanlopen: trage laadtijden, onderhoud, 
            plug‑ins die vastliepen en SEO‑beperkingen.
          </p>

          <p>
            Ondernemers verdienen een website die niet voor problemen zorgt, maar 
            juist een oplossing is. Een digitaal fundament dat vertrouwen geeft en 
            klaar is voor groei.
          </p>

          <h2>Waarom Next.js?</h2>

          <p>
            Next.js is snel, veilig en gebouwd voor prestaties. Het geeft mij de 
            vrijheid om websites te bouwen die technisch sterk zijn, zonder dat 
            ondernemers zich bezig hoeven te houden met techniek.
          </p>

          <p>
            Voor u betekent dat: een website die professioneel oogt, prettig werkt 
            voor bezoekers en beter scoort in Google.
          </p>

          <h2>Mijn werkwijze</h2>

          <ul>
            <li><strong>Kennismaking</strong> — uw doelen en doelgroep.</li>
            <li><strong>Strategie</strong> — structuur en aanpak.</li>
            <li><strong>Design</strong> — overtuigend en professioneel.</li>
            <li><strong>Ontwikkeling</strong> — snelle Next.js website.</li>
            <li><strong>Lancering</strong> — SEO‑basis, analytics, controle.</li>
            <li><strong>Nazorg</strong> — ondersteuning en groei.</li>
          </ul>

          <h2>Werkgebied</h2>
          <p>
            Ik werk vanuit Rotterdam en kom graag langs voor een kennismaking. 
            Persoonlijk contact staat centraal.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-8 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["Rotterdam","Capelle aan den IJssel","Krimpen aan den IJssel","Ridderkerk","Barendrecht","Schiedam"].map((c: string, index: number) => (
              <div key={index} className="border-2 border-black bg-[#FAFAFA] p-4 text-center hover:bg-[#FF4500] hover:text-white transition-colors">
                <p className="font-heading font-bold uppercase text-sm tracking-tight">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* PORTFOLIO BLOK */}
      <PortfolioSection />

      {/* CTA */}
      <CTASection
        title="Laten we kennismaken."
        subtitle="Vrijblijvend, een uurtje, op locatie of online. Vertel waar u staat — ik luister."
        button="Plan kennismaking"
      />
    </>
  );
}
