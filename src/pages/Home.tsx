import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Zap,
  Award,
  Users,
  Coffee,
  Check,
  ArrowRight,
  Star,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>Lokaal webdesign bureau voor Rotterdamse ondernemers</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Website laten maken in <span className="text-blue-400">Rotterdam</span>?
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Razendsnelle websites met Next.js. Geen gedoe, geen maandelijkse kosten. 
                Gewoon een website die werkt.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-white text-sm">Al 15+ Rotterdamse ondernemers gingen je voor</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm">30 dagen geld-terug garantie</span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Neem contact op</span>
                </Link>
                <a
                  href="tel:+31642628242"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Bel direct</span>
                </a>
              </div>

              {/* Local Promise */}
              <div className="flex items-center gap-3 text-white/70">
                <Coffee className="w-5 h-5" />
                <span className="text-sm">Binnen 15 minuten bij je voor een kop koffie</span>
              </div>
            </div>

            {/* Speed Comparison */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-semibold text-lg mb-4 text-center">Snelheidsvergelijking</h3>
              
              <div className="space-y-4">
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">WordPress</span>
                    <span className="text-red-400 font-bold">3.2 sec</span>
                  </div>
                  <div className="w-full bg-red-900/50 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '80%' }} />
                  </div>
                  <p className="text-red-300 text-xs mt-2">Traag door plugins & updates</p>
                </div>

                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Next.js (WebBoostPartner)</span>
                    <span className="text-green-400 font-bold">0.4 sec</span>
                  </div>
                  <div className="w-full bg-green-900/50 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '15%' }} />
                  </div>
                  <p className="text-green-300 text-xs mt-2">Bliksemsnel, geen gedoe</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-white/70 text-sm">
                  <Zap className="w-4 h-4 inline mr-1 text-yellow-400" />
                  8x sneller = betere Google ranking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transparante prijzen, geen verrassingen
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Kies het pakket dat bij jou past
            </p>
            <Link 
              to="/pakketten"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Bekijk alle details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* WebBoost Start */}
            <Card className="relative border-2 border-gray-200 hover:border-blue-400 transition-all">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">WebBoost Start</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-blue-600">€1.500</span>
                  <span className="text-gray-500 ml-2">eenmalig</span>
                </div>
                <p className="text-gray-600 mt-2">Perfect voor ZZP'ers die beginnen</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">1-5 pagina's</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Contactformulier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gratis hosting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Geen maandelijkse kosten</span>
                  </li>
                </ul>

                <Link
                  to="/pakketten"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Bekijk details
                </Link>
              </CardContent>
            </Card>

            {/* WebBoost Pro */}
            <Card className="relative border-2 border-blue-500 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                Meest gekozen
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">WebBoost Pro</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-blue-600">€3.500</span>
                  <span className="text-gray-500 ml-2">eenmalig</span>
                </div>
                <p className="text-gray-600 mt-2">Voor groeiende ondernemers</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">5-10 pagina's</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zelf teksten wijzigen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lokale SEO optimalisatie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3 rondes feedback</span>
                  </li>
                </ul>

                <Link
                  to="/pakketten"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  Bekijk details
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Both Packages Benefits */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
              Bij BEIDE pakketten inbegrepen
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Bliksemsnel</p>
                  <p className="text-sm text-gray-600">0.4 sec laadtijd</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Geen gedoe</p>
                  <p className="text-sm text-gray-600">Geen updates nodig</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Veilig</p>
                  <p className="text-sm text-gray-600">Geen plugins</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Vindbaar</p>
                  <p className="text-sm text-gray-600">Perfect in Rotterdam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Alles wat je wilt weten
            </p>
            <Link 
              to="/faq"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Bekijk alle vragen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Moet ik zelf technische dingen doen?</h3>
              <p className="text-gray-600">Nee! Jij regelt je bedrijf, ik regel je website. Je krijgt een simpele uitleg hoe je teksten kunt aanpassen (bij het Pro pakket), maar technisch hoef je niets te doen.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Wat kost het me per maand?</h3>
              <p className="text-gray-600">€0,-. Geen hostingkosten, geen onderhoudskosten. Je betaalt één keer en klaar. Alleen je domeinnaam (€15 per jaar) is voor eigen rekening.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Hoe lang duurt het voordat mijn site live is?</h3>
              <p className="text-gray-600">Binnen 1-2 weken na akkoord staat je nieuwe site online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar voor je nieuwe website?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Laten we kennismaken. Ik kom graag bij je langs voor een kop koffie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Contact opnemen</span>
            </Link>
            <a
              href="tel:+31642628242"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Bel direct</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-sm">30 dagen geld-terug garantie</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-white text-sm">Rotterdam & omgeving</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-green-400" />
              <span className="text-white text-sm">Binnen 1-2 weken live</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
