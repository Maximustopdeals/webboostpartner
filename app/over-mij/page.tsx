import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Mij - WebBoostPartner',
  description:
    'Leer meer over WebBoostPartner. Van WordPress naar Next.js. Waarom ik bouw wat echt werkt, zonder gedoe en maandelijkse kosten.',
  alternates: {
    canonical: 'https://www.webboostpartner.nl/over-mij/',
  },
};

export default function OverMij() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Over mij</h1>
          <p className="text-xl text-white/80">
            Sommige dingen kun je alleen zien als je er even vanaf stapt.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Ik heb jarenlang gewerkt met WordPress. Divi-thema&apos;s, plugins, updates, onderhoud.
              Het was wat ik deed. En ik deed het goed. Maar ergens, tussen het oplossen van een
              kapotte plugin en het uitleggen aan een klant waarom hun website weer traag was, begon
              er iets te knagen.
            </p>

            <p className="text-2xl font-semibold text-blue-900 mb-16">Dit is niet hoe het hoort.</p>

            {/* Het moment van inzicht */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Het moment van inzicht</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ik keek naar mijn klanten. Naar de rekeningen die ze betaalden voor onderhoud aan
              systemen die ze niet begrepen. Naar de uren die ik stopte in het repareren van iets
              dat eigenlijk al kapot was voordat het begon. En ik realiseerde me: ik was onderdeel
              geworden van iets waar ik niet in geloofde.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">Dus ik stopte.</p>
            <p className="text-gray-700 leading-relaxed mb-16">
              Niet omdat ik niet meer wilde bouwen. Integendeel. Ik wilde alleen bouwen wat echt
              werkt.
            </p>

            {/* Wat ik nu doe */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Wat ik nu doe, doe ik anders</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tegenwoordig werk ik met Next.js. Hetzelfde framework dat Netflix, Uber en Nike
              gebruiken. Mijn code staat op GitHub, mijn websites draaien op Vercel. Geen plugins
              die stukgaan. Geen updates die mislukken. Geen trage laadtijden die bezoekers
              wegjagen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Alleen schone code. Snelle websites. En de zekerheid dat wat ik bouw, blijft werken.
            </p>
            <p className="text-gray-700 leading-relaxed mb-16">
              Mijn eerste project met deze stack? Mijn eigen website. Ik wilde eerst zien of het
              werkte. Of het echt beter was. Het was niet alleen beter — het was zoals het altijd
              had moeten zijn.
            </p>

            {/* Mijn belofte */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mijn belofte aan jou</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wanneer we samenwerken, krijg je geen ingewikkelde systemen waar je afhankelijk van
              bent. Je krijgt een website die van jou is. Letterlijk. De code staat op GitHub, jij
              hebt de sleutels. Wil je later met iemand anders verder? Geen probleem. Er is geen
              slot op de deur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Je betaalt één keer. Geen maandelijkse abonnementen, geen verborgen kosten, geen
              verrassingen. Alleen een duidelijke prijs voor iets dat werkt.
            </p>
            <p className="text-gray-700 leading-relaxed mb-16">
              En als je me nodig hebt? Je belt of mailt. Zoals het hoort. Ik gebruik geen social
              media — niet omdat ik er niets van begrijp, maar omdat ik mijn tijd liever steek in
              bouwen en mijn klanten tevreden houden.
            </p>

            {/* Hoe we samenwerken */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hoe we samenwerken</h2>

            <div className="space-y-8 mb-16">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Kennismaken</h3>
                <p className="text-gray-700">
                  We bespreken wat je nodig hebt. Geen verplichtingen, gewoon een gesprek. Daarna
                  krijg je een heldere offerte.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Bouwen</h3>
                <p className="text-gray-700">
                  Ik werk transparant. Je ziet regelmatig een voorbeeld, geeft feedback wanneer je
                  wilt. Bij het Pro-pakket plannen we drie gestructureerde feedbackrondes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Opleveren</h3>
                <p className="text-gray-700">
                  Je website gaat live. Gratis hosting via Vercel. Jouw eigen domein. En als je
                  wilt: een eenvoudig CMS zodat je zelf teksten kunt wijzigen zonder technische
                  kennis.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Nazorg</h3>
                <p className="text-gray-700">
                  Veertien dagen na oplevering pas ik nog gratis kleine dingen aan. En daarna ben
                  ik gewoon bereikbaar. Voor vragen, advies, of gewoon om te sparren.
                </p>
              </div>
            </div>

            {/* Wat je van mij kunt verwachten */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wat je van mij kunt verwachten
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ik praat geen technisch jargon. Ik leg uit wat je moet weten, in gewoon Nederlands. Ik
              ben direct — als iets niet kan, zeg ik dat. Als er een betere manier is, vertel ik
              die.
            </p>
            <p className="text-gray-700 leading-relaxed mb-16">
              En ik bouw alsof het voor mezelf is. Want dat is het enige wat ik weet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Laten we kennismaken
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Geen verplichtingen. Gewoon een gesprek om te zien wat je nodig hebt en of ik je kan
            helpen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Contact opnemen</span>
            </Link>
            <a
              href="mailto:info@webboostpartner.nl"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Mail me</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
