import { MapPin, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
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
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">Aangedreven door</p>
        <p className="font-heading font-extrabold uppercase text-lg text-white tracking-tight">Next.js</p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Over WebBoost Partner | Webdesign Rotterdam & Omgeving",
  description:
    "Ontdek de visie achter WebBoost Partner. Wij bouwen moderne, conversiegerichte websites voor ambitieuze ZZP'ers en MKB-bedrijven. Uw specialist voor webdesign Rotterdam en website laten maken in Rotterdam.",
  alternates: { canonical: "https://webboostpartner.nl/over-mij" },
};

export default function OverMijPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
              // Persoonlijk & Direct
            </p>
            <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
              De visie achter <span className="text-[#FF4500]">WebBoost</span> Partner
            </h1>

            <div className="mt-6 space-y-4 text-lg sm:text-xl max-w-2xl leading-relaxed text-[#1a1a1a]">
              <p>
                WebBoost Partner is opgericht met één helder doel: Rotterdamse ondernemers helpen aan een modern digitaal fundament dat niet alleen online hun vakmanschap laat zien, maar ook daadwerkelijk <strong>nieuwe klanten oplevert</strong>.
              </p>

              <p>
                Wat begon als een passie voor digitaal vakmanschap, groeide uit tot een scherp specialisme. Inmiddels hebben we met succes maatwerk platforms mogen realiseren voor uiteenlopende lokale ondernemers, van rijscholen en zorgprofessionals tot schoonmaakbedrijven.
              </p>

              <p>
                We werken bewust kleinschalig en persoonlijk. Geen grote, anonieme projectteams of accountmanagers, <strong>u schakelt altijd rechtstreeks met de specialist achter het merk</strong>. Wel zo duidelijk, eerlijk en zonder gedoe.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-sm ml-auto">
              <div className="bg-white border-2 border-black p-2 relative z-10">
                <NextjsLogoCard />
                <div className="px-3 py-3 border-t-2 border-black mt-2">
                  <p className="font-heading font-bold uppercase text-sm">WebBoost Partner</p>
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
              title: "Resultaatgericht design",
              desc: "Elke pixel staat in het teken van het overtuigen van uw bezoeker.",
            },
            {
              title: "Sterke online vindbaarheid",
              desc: "Uw website is vanaf de lancering perfect ingericht om gevonden te worden in Google.",
            },
            {
              title: "Toekomstbestendige techniek",
              desc: "Bliksemsnel op mobiel, extreem veilig en gebouwd om met uw ambities mee te groeien.",
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
          <h2>Waarom WebBoost Partner is gestart</h2>

          <p>
            In de afgelopen jaren zijn er met veel plezier talloze websites gebouwd op bestaande systemen. Dat is een prima start, maar naarmate de eisen van Google en de verwachtingen van online consumenten stegen, zagen ondernemers zich vaker geconfronteerd met dezelfde uitdagingen: laadtijden die stagneerden door onnodige ballast en complex maandelijks onderhoud om de veiligheid te garanderen.
          </p>

          <p>
            Wij geloven dat een website geen bron van constante zorgen moet zijn, maar juist een <strong>rendabele oplossing</strong>. Ondernemers verdienen een digitaal fundament dat blindelings vertrouwen geeft en direct klaar is om serieuze online groei te ondersteunen. Of het nu gaat om <strong>webdesign Rotterdam</strong> of daarbuiten.
          </p>

          <h2>Onze moderne aanpak</h2>

          <p>
            Wij bouwen websites op een moderne, schone technische basis waarbij ongeëvenaarde snelheid en stabiliteit centraal staan. Omdat pagina's direct en kant-en-klaar aan de browser worden geleverd, ervaart uw bezoeker geen enkele vertraging.
          </p>

          <p>
            Voor u betekent dit simpelweg: een website die direct professioneel oogt, prettig en foutloos werkt voor uw potentiële klanten, en maximaal presteert in de zoekresultaten van Google. Zo zorgen we ervoor dat <strong>website laten maken in Rotterdam</strong> niet alleen mooi is, maar ook direct klanten oplevert.
          </p>

          <h2>Onze werkwijze</h2>

          <ul>
            <li><strong>1. Kennismaking & Strategie:</strong> We bespreken uw bedrijf, uw unieke vakmanschap en brengen uw doelgroep helder in kaart.</li>
            <li><strong>2. Structuur & Design:</strong> Een uniek, op maat gemaakt ontwerp dat past bij uw huisstijl en volledig is ingericht op conversie.</li>
            <li><strong>3. Ontwikkeling & Optimalisatie:</strong> De website wordt strak opgebouwd, inclusief de integratie van alle noodzakelijke Google-richtlijnen.</li>
            <li><strong>4. Lancering & Support:</strong> Na een uitgebreide kwaliteitscontrole zetten we de site live en zorgen we dat Google uw website direct kan vinden.</li>
          </ul>

          <h2>Werkgebied</h2>
          <p>
            Hoewel we landelijk projecten realiseren, ligt het zwaartepunt van onze samenwerkingen heel bewust in Rotterdam en de directe omgeving. Lokaal en persoonlijk schakelen werkt in onze ervaring het prettigst: we begrijpen uw regio, uw markt en uw lokale concurrentie. Dit maakt ons de ideale partner voor <strong>webdesign Rotterdam</strong>.
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

      {/* UITGELICHTE PROJECTEN */}
      <section className="bg-[#FAFAFA] border-y-2 border-black py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-3">
                // Recent Werk
              </p>
              <h2 className="font-heading font-black uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95] text-black">
                Een greep uit ons <span className="text-[#FF4500]">portfolio</span>.
              </h2>
            </div>
            <Link 
              href="/portfolio"
              className="inline-flex items-center justify-center bg-white text-black font-heading font-bold uppercase text-xs tracking-wider border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_#1A1A19] whitespace-nowrap"
            >
              Bekijk alle projecten
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard 
                key={project.slug} 
                project={project} 
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Laten we kennismaken."
        subtitle="Vrijblijvend een uurtje sparren op locatie of online? Vertel ons waar u staat met uw onderneming, we luisteren."
        button="Plan adviesgesprek"
        href="/contact?intent=advies"
      />
    </>
  );
}
