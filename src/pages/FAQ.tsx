import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone, Euro, Wrench, Clock, MapPin, Shield } from 'lucide-react';

export function FAQ() {
  const faqCategories = [
    {
      id: 'prijzen',
      title: 'Prijzen',
      icon: Euro,
      questions: [
        {
          question: 'Wat kost het me per maand?',
          answer: '€0,-. Geen hostingkosten, geen onderhoudskosten. Je betaalt één keer en klaar. Alleen je domeinnaam (€15 per jaar) is voor eigen rekening.'
        },
        {
          question: 'Zijn er verborgen kosten?',
          answer: 'Nee, absoluut niet. De prijs die je ziet is de prijs die je betaalt. Geen setup kosten, geen maandelijkse fees, geen verrassingen achteraf.'
        },
        {
          question: 'Kan ik in termijnen betalen?',
          answer: 'Ja, dat is mogelijk. We kunnen een betaalplan afspreken in overleg. Neem contact op om de mogelijkheden te bespreken.'
        }
      ]
    },
    {
      id: 'techniek',
      title: 'Techniek',
      icon: Wrench,
      questions: [
        {
          question: 'Moet ik zelf technische dingen doen?',
          answer: 'Nee! Jij regelt je bedrijf, ik regel je website. Je krijgt een simpele uitleg hoe je teksten kunt aanpassen (bij het Pro pakket), maar technisch hoef je niets te doen.'
        },
        {
          question: 'Wat is Next.js en waarom is het beter?',
          answer: 'Next.js is een modern framework waarmee websites razendsnel laden (0.4 sec vs 3.2 sec voor WordPress). Het is veiliger, beter voor Google, en vereist geen constante updates zoals WordPress.'
        },
        {
          question: 'Kan ik mijn bestaande domeinnaam gebruiken?',
          answer: 'Ja, zeker! Ik help je graag om je bestaande domeinnaam te koppelen aan je nieuwe website. Dit is gratis en wordt volledig door mij geregeld.'
        },
        {
          question: 'Is mijn site goed vindbaar in Google?',
          answer: 'Ja! Next.js sites scoren standaard hoog vanwege de snelheid en technische optimalisatie. Het Pro pakket heeft extra lokale SEO voor Rotterdam, zodat je beter gevonden wordt in jouw regio.'
        }
      ]
    },
    {
      id: 'tijdlijn',
      title: 'Tijdlijn',
      icon: Clock,
      questions: [
        {
          question: 'Hoe lang duurt het voordat mijn site live is?',
          answer: 'Binnen 1-2 weken na akkoord staat je nieuwe site online. Dit hangt af van hoe snel je de benodigde informatie aanlevert (teksten, foto\'s, etc.).'
        },
        {
          question: 'Wat heb ik nodig om te starten?',
          answer: 'Je hebt alleen je bedrijfsinformatie, eventuele teksten en foto\'s nodig. Verder regel ik alles. Heb je nog geen teksten? Geen probleem, ik help je graag.'
        },
        {
          question: 'Wat als ik later meer pagina\'s wil?',
          answer: 'Geen probleem! Ik bouw je site zo dat uitbreiden makkelijk is. We spreken een meerprijs af afhankelijk van wat je nodig hebt.'
        }
      ]
    },
    {
      id: 'onderhoud',
      title: 'Onderhoud',
      icon: Shield,
      questions: [
        {
          question: 'Moet ik updates doen?',
          answer: 'Nee! In tegenstelling tot WordPress hoef je bij Next.js nooit updates te doen. Je site blijft altijd veilig en up-to-date zonder dat je er iets voor hoeft te doen.'
        },
        {
          question: 'Ik heb nu een WordPress site, wat gebeurt daarmee?',
          answer: 'Ik zet \'m voor je klaar in een beveiligde omgeving (voor als je oude bestanden nodig hebt) en je nieuwe site gaat live. Je oude site blijft toegankelijk als backup.'
        },
        {
          question: 'Wat als er iets misgaat met mijn site?',
          answer: 'Je kunt me altijd bereiken via WhatsApp of telefoon. Ik los problemen snel op. Omdat Next.js zo stabiel is, komt dit vrijwel nooit voor.'
        }
      ]
    },
    {
      id: 'rotterdam',
      title: 'Rotterdam',
      icon: MapPin,
      questions: [
        {
          question: 'Kan ik je gewoon bellen of appen?',
          answer: 'Jazeker! Bel of WhatsApp me op +31 6 42628242. Ik zit in Rotterdam, dus ik kom ook gewoon langs voor overleg of een kop koffie.'
        },
        {
          question: 'Bedien je alleen Rotterdam?',
          answer: 'Hoewel ik gevestigd ben in Rotterdam, help ik ondernemers in de hele regio. Ik kom graag bij je langs, ook als je iets verder weg zit.'
        }
      ]
    },
    {
      id: 'garantie',
      title: 'Garantie',
      icon: Shield,
      questions: [
        {
          question: 'Heb ik garantie op mijn website?',
          answer: 'Ja! Ik bied 30 dagen geld-terug garantie. Ben je niet tevreden? Je krijgt je geld terug, geen vragen gesteld. Daarnaast krijg je levenslange ondersteuning voor technische problemen.'
        }
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Veelgestelde Vragen
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Alles wat je wilt weten over onze websites, prijzen en werkwijze.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.id} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={category.id + '-' + index} 
                    value={category.id + '-' + index}
                    className="border border-gray-200 rounded-lg mb-3 px-4 data-[state=open]:border-blue-300"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-blue-600 py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Staat je vraag er niet tussen?
          </h2>
          <p className="text-gray-600 mb-8">
            Geen probleem! Neem contact op. Ik reageer meestal binnen een uur.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Neem contact op</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
