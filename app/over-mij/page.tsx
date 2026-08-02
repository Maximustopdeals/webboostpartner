import { MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

function NextjsLogoCard() {
  return (
    <div className="bg-[#0A0A0A] border-2 border-black p-8 flex items-center justify-center relative z-10 min-h-[300px]">
      {/* Next.js Logo SVG */}
      <svg
        viewBox="0 0 180 180"
        className="w-48 h-48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="m" maskUnits="userSpaceOnUse">
          <circle cx="90" cy="90" r="90" fill="white"/>
        </mask>
        <g mask="url(#m)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path
            d="M149.5 157.5L69.5 60H60v60h8.5V72.5l72.5 93.5c3-1.8 5.8-3.9 8.5-6.3z"
            fill="white"
          />
          <path d="M146 60h-8v60h8V60z" fill="white"/>
        </g>
      </svg>
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">
          Powered by
        </p>
        <p className="font-heading font-extrabold uppercase text-lg text-white tracking-tight">
          Next.js
        </p>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Over mij | Ron — Next.js webbouwer Rotterdam",
  description:
    "Voormalig WordPress-webbouwer, nu Next.js specialist. Ron uit Rotterdam vertelt waarom hij stopte met WordPress en hoe hij websites bouwt die wel werken.",
  alternates: { canonical: "https://webboostpartner.nl/over-mij" },
};

export default function OverMijPage() {
  return (
    <>
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">// Over mij</p>
            <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
              Over mij — <span className="text-[#FF4500]">Next.js</span> webbouwer Rotterdam
            </h1>
            <div className="mt-6 space-y-4 text-lg sm:text-xl max-w-2xl leading-relaxed">
              <p>
                Achter iedere succesvolle website staat een ondernemer met ambitie. 
                Mijn rol is om die ambitie te vertalen naar een snelle, professionele 
                website die vertrouwen uitstraalt en klaar is voor groei.
              </p>
              <p>
                Ik ben <strong>Ron</strong>, oprichter van WebBoost Partner uit Rotterdam 
                en gespecialiseerd in hoogwaardige Next.js websites voor ZZP en MKB.
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

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 prose-brutal">
          {/* Sectie 1 — Mijn verhaal */}
          <h2>Waarom ik WebBoost Partner ben gestart</h2>

          <p>
            Door de jaren heen heb ik veel ondernemers geholpen met het bouwen en 
            verbeteren van hun website. Ik heb gewerkt met WordPress, verschillende 
            thema's, onderhoud en online optimalisaties. Die ervaring heeft mij veel 
            geleerd over wat ondernemers nodig hebben om online succesvol te zijn.
          </p>

          <p>
            Maar ik zag ook steeds hetzelfde probleem terugkomen: ondernemers 
            investeerden in een website, maar liepen daarna tegen dezelfde 
            uitdagingen aan. Websites werden langzaam, onderhoud werd ingewikkelder 
            en technische beperkingen stonden groei soms in de weg.
          </p>

          <p>
            Ik geloof dat een website niet voor problemen moet zorgen, maar juist 
            een oplossing moet zijn. Een <strong>digitaal fundament</strong> waarop 
            een ondernemer kan bouwen.
          </p>

          {/* Sectie 2 — Het moment van inzicht */}
          <h2>Het moment waarop mijn visie veranderde</h2>

          <p>
            Ik begon steeds vaker te kijken naar de vraag achter de website. Niet 
            alleen: "Hoe maken we een mooie website?" maar vooral: "Hoe helpt deze 
            website de ondernemer verder?"
          </p>

          <p>
            Een website moet meer doen dan alleen online aanwezig zijn. Hij moet 
            vertrouwen geven, bezoekers overtuigen en bijdragen aan nieuwe klanten.
          </p>

          <p>
            Daarom besloot ik mijn manier van werken opnieuw te bekijken. Niet omdat 
            ik wilde stoppen met websites bouwen, maar omdat ik websites wilde 
            bouwen die vanaf de basis beter werken.
          </p>

          {/* Sectie 3 — Wat ik nu doe */}
          <h2>Wat ik vandaag voor ondernemers doe</h2>

          <p>
            Tegenwoordig help ik ondernemers met moderne websites die zijn gebouwd 
            voor snelheid, vindbaarheid en groei.
          </p>

          <p>
            Ik werk met <strong>Next.js</strong>: een moderne technologie waarmee 
            websites snel, veilig en toekomstgericht ontwikkeld kunnen worden.
          </p>

          <p>
            Voor u betekent dat geen ingewikkelde techniek, maar een website die 
            professioneel overkomt, prettig werkt voor bezoekers en klaar is om mee 
            te groeien met uw onderneming.
          </p>

          {/* Sectie 4 — Mijn belofte */}
          <h2>Mijn belofte aan iedere klant</h2>

          <p>
            Ik geloof in duidelijke communicatie. Geen ingewikkelde technische 
            verhalen, maar eerlijk advies in begrijpelijke taal.
          </p>

          <p>
            Als iets niet de beste oplossing is, zeg ik dat. Als er een betere 
            aanpak mogelijk is, bespreek ik die. Mijn doel is niet om zoveel 
            mogelijk techniek te verkopen, maar om de juiste oplossing voor uw 
            bedrijf te bouwen.
          </p>

          <p>
            Ik behandel iedere website alsof deze voor mijn eigen bedrijf wordt 
            gebouwd: met aandacht, kwaliteit en verantwoordelijkheid.
          </p>

          {/* Sectie 5 — Waarom ik kies voor Next.js */}
          <h2>Waarom ik kies voor Next.js</h2>

          <p>
            Mijn keuze voor Next.js komt voort uit één belangrijke vraag: hoe kan 
            ik ondernemers een betere website bieden?
          </p>

          <p>
            Moderne websites moeten snel laden, veilig zijn en een sterke basis 
            hebben voor zoekmachines. Daarom werk ik met een technologie die vanaf 
            de basis is ontwikkeld voor prestaties en schaalbaarheid.
          </p>

          <p>
            Next.js geeft mij de mogelijkheid om websites te bouwen die technisch 
            sterk zijn, zonder dat de ondernemer zich hoeft bezig te houden met de 
            techniek erachter.
          </p>

          <p>
            De technologie is slechts het middel. Het doel blijft altijd hetzelfde: 
            een website bouwen die uw bedrijf helpt groeien.
          </p>

          {/* Sectie 6 — Mijn visie op moderne websites */}
          <h2>Mijn visie op moderne websites</h2>

          <p>
            Een website is tegenwoordig veel meer dan een digitaal visitekaartje. 
            Het is uw online verkoper, uw eerste kennismaking met potentiële 
            klanten en vaak het eerste moment waarop iemand beslist of uw bedrijf 
            vertrouwen verdient.
          </p>

          <p>
            Een trage website zorgt voor twijfel. Een onduidelijke website zorgt 
            ervoor dat bezoekers afhaken. Een website die niet gevonden wordt, 
            bereikt de mensen niet die juist naar uw diensten zoeken.
          </p>

          <p>
            Daarom bouw ik websites die drie dingen combineren: <strong>snelheid, 
            overtuigingskracht en vindbaarheid</strong>.
          </p>

          <p>
            Niet alleen gericht op hoe een website eruitziet, maar vooral op wat 
            deze website voor uw onderneming moet bereiken.
          </p>

          {/* Sectie 7 — Mijn werkwijze */}
          <h2>Persoonlijke begeleiding van begin tot eind</h2>

          <p>
            Bij WebBoost Partner werkt u rechtstreeks met mij. Geen accountmanager, 
            geen tussenpersonen en geen onnodige communicatielijnen.
          </p>

          <p>
            U heeft één aanspreekpunt die uw bedrijf, uw doelen en uw website 
            echt kent.
          </p>

          <p>
            Een traject bestaat uit:
          </p>

          <ul>
            <li>
              <strong>Kennismaking</strong> — we bespreken uw bedrijf, doelgroep 
              en online doelen.
            </li>
            <li>
              <strong>Strategie</strong> — we bepalen welke structuur en aanpak 
              het beste past bij uw onderneming.
            </li>
            <li>
              <strong>Design & content</strong> — een professioneel ontwerp en 
              inhoud die bezoekers overtuigt.
            </li>
            <li>
              <strong>Ontwikkeling</strong> — een snelle Next.js website met 
              aandacht voor SEO en prestaties.
            </li>
            <li>
              <strong>Lancering</strong> — inclusief technische controle, 
              analytics en SEO-basis.
            </li>
            <li>
              <strong>Nazorg</strong> — ondersteuning en verdere ontwikkeling 
              wanneer uw bedrijf groeit.
            </li>
          </ul>

          {/* Sectie 8 — Expertise */}
          <h2>Mijn expertise</h2>

          <p>
            Achter iedere succesvolle website staat een sterke technische basis. 
            Mijn kennis ligt op het snijvlak van moderne webontwikkeling, SEO en 
            conversie.
          </p>

          <ul>
            <li>
              <strong>Next.js</strong> — moderne websites gebouwd voor snelheid, 
              schaalbaarheid en prestaties.
            </li>
            <li>
              <strong>Technische SEO</strong> — structuur, metadata, schema 
              markup en optimale vindbaarheid.
            </li>
            <li>
              <strong>Lokale SEO</strong> — gericht op ondernemers die zichtbaar 
              willen zijn in hun regio.
            </li>
            <li>
              <strong>Core Web Vitals</strong> — optimalisatie voor snelheid en 
              gebruikerservaring.
            </li>
            <li>
              <strong>Conversieoptimalisatie</strong> — websites die bezoekers 
              helpen de juiste actie te nemen.
            </li>
            <li>
              <strong>Moderne CMS-oplossingen</strong> — flexibel beheer zonder 
              technische beperkingen.
            </li>
          </ul>

          <h2>Werkgebied</h2>
          <p>
            Ik werk vanuit Rotterdam, met focus op de regio. Dat betekent dat ik
            ook fysiek langs kan komen voor een kennismaking — iets dat in deze
            tijd van anonieme webbouw verrassend zeldzaam is geworden.
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

      <CTASection
        title="Laten we kennismaken."
        subtitle="Vrijblijvend, een uurtje, op locatie of online. Vertel waar u staat — ik luister."
        button="Plan kennismaking"
      />
    </>
  );
}
