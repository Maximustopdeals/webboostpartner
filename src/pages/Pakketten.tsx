import { Link } from 'react-router-dom';
import { 
  Check,
  X,
  Phone,
  Zap,
  Clock,
  Shield,
  TrendingUp,
  Star,
  Award
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Pakketten() {
  const startFeatures = [
    { text: '1-5 pagina\'s', included: true },
    { text: 'Contactformulier', included: true },
    { text: 'Gratis hosting', included: true },
    { text: 'Geen maandelijkse kosten', included: true },
    { text: '1 ronde feedback', included: true },
    { text: 'Mobiel-vriendelijk design', included: true },
    { text: 'Basis SEO', included: true },
    { text: 'SSL certificaat', included: true },
    { text: 'Zelf teksten wijzigen', included: false },
    { text: 'Lokale SEO optimalisatie', included: false },
    { text: '3 rondes feedback', included: false },
    { text: 'Blog functionaliteit', included: false },
  ];

  const proFeatures = [
    { text: '5-10 pagina\'s', included: true },
    { text: 'Contactformulier', included: true },
    { text: 'Gratis hosting', included: true },
    { text: 'Geen maandelijkse kosten', included: true },
    { text: '3 rondes feedback', included: true },
    { text: 'Mobiel-vriendelijk design', included: true },
    { text: 'Uitgebreide SEO', included: true },
    { text: 'SSL certificaat', included: true },
    { text: 'Zelf teksten wijzigen (CMS)', included: true },
    { text: 'Lokale SEO optimalisatie', included: true },
    { text: 'Blog functionaliteit', included: true },
    { text: 'Google Analytics integratie', included: true },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Bliksemsnel',
      description: '0.4 sec laadtijd dankzij Next.js technologie',
      color: 'text-yellow-500'
    },
    {
      icon: Clock,
      title: 'Geen gedoe',
      description: 'Geen updates nodig, altijd up-to-date',
      color: 'text-blue-500'
    },
    {
      icon: Shield,
      title: 'Veilig',
      description: 'Geen plugins die kwetsbaarheden veroorzaken',
      color: 'text-green-500'
    },
    {
      icon: TrendingUp,
      title: 'Vindbaar',
      description: 'Perfect geoptimaliseerd voor Rotterdam',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Onze Pakketten
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transparante prijzen zonder verborgen kosten. Kies het pakket dat past bij jouw onderneming.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* WebBoost Start */}
            <Card className="relative border-2 border-gray-200 hover:border-blue-400 transition-all h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">WebBoost Start</CardTitle>
                <div className="mt-2">
                  <span className="text-5xl font-bold text-blue-600">€1.500</span>
                  <span className="text-gray-500 ml-2">eenmalig</span>
                </div>
                <p className="text-gray-600 mt-2">Perfect voor ZZP'ers die beginnen</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-sm text-blue-800 font-medium mb-4 bg-blue-50 rounded-lg p-3">
                    Geschikt voor: Coach, loodgieter, schoonheidsspecialiste, kraamverzorgende
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {startFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors mt-auto"
                >
                  <Phone className="w-5 h-5" />
                  Kies dit pakket
                </Link>
              </CardContent>
            </Card>

            {/* WebBoost Pro */}
            <Card className="relative border-2 border-blue-500 shadow-xl h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                <Star className="w-4 h-4" />
                Meest gekozen
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">WebBoost Pro</CardTitle>
                <div className="mt-2">
                  <span className="text-5xl font-bold text-blue-600">€3.500</span>
                  <span className="text-gray-500 ml-2">eenmalig</span>
                </div>
                <p className="text-gray-600 mt-2">Voor groeiende ondernemers</p>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <div className="flex-grow">
                  <p className="text-sm text-blue-800 font-medium mb-4 bg-blue-50 rounded-lg p-3">
                    Geschikt voor: Makelaar, restaurant, kapsalon met boekingen, grotere ZZP'ers
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {proFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all mt-auto"
                >
                  <Phone className="w-5 h-5" />
                  Kies dit pakket
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
              Bij BEIDE pakketten inbegrepen
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <benefit.icon className={`w-6 h-6 flex-shrink-0 ${benefit.color}`} />
                  <div>
                    <p className="font-medium text-gray-900">{benefit.title}</p>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">30 dagen geld-terug</h3>
              <p className="text-gray-600 text-sm">
                Niet tevreden? Je krijgt je geld terug, geen vragen gesteld.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <Zap className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Snelle oplevering</h3>
              <p className="text-gray-600 text-sm">
                Binnen 1-2 weken staat je nieuwe website live.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <Shield className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Geen verborgen kosten</h3>
              <p className="text-gray-600 text-sm">
                Je betaalt één keer. Geen maandelijkse verrassingen.
              </p>
            </div>
          </div>

          {/* FAQ Teaser */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Nog vragen over onze pakketten?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Phone className="w-5 h-5" />
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
