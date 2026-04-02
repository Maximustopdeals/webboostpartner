'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Star,
  Award,
  Send,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

// Metadata export moet in een aparte file voor client components
// We gebruiken een workaround door de metadata in layout.tsx te zetten

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Check internet connection
    if (!navigator.onLine) {
      setError('Je bent offline. Controleer je internetverbinding en probeer opnieuw.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setError(data.message || 'Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch (err) {
      setError('Er is iets misgegaan. Probeer het later opnieuw of neem contact op via telefoon of e-mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Laten we kennismaken. Ik kom graag bij je langs voor een kop koffie.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/31642628242?text=Hallo!%20Ik%20heb%20een%20vraag%20over%20een%20website%20voor%20mijn%20bedrijf%20in%20Rotterdam"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-[#25D366]">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-4">Snelste reactie - meestal binnen een uur</p>
                  <p className="text-blue-600 font-medium">+31 6 42628242</p>
                </CardContent>
              </Card>
            </a>

            {/* Phone */}
            <a href="tel:+31642628242" className="group">
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-blue-500">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bel direct</h3>
                  <p className="text-gray-600 mb-4">Direct contact voor dringende vragen</p>
                  <p className="text-blue-600 font-medium">+31 6 42628242</p>
                </CardContent>
              </Card>
            </a>

            {/* Email */}
            <a href="mailto:info@webboostpartner.nl" className="group">
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-gray-500">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">Voor uitgebreide vragen en offertes</p>
                  <p className="text-blue-600 font-medium">info@webboostpartner.nl</p>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Stuur een bericht</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bericht verstuurd!</h3>
                    <p className="text-gray-600">Ik neem zo snel mogelijk contact met je op.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Jouw naam"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="jouw@email.nl"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="+31 6 12345678"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Bericht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Vertel me over je project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Versturen...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Verstuur bericht</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Info Card */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Telefoon</p>
                        <a
                          href="tel:+31642628242"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          +31 6 42628242
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a
                          href="mailto:info@webboostpartner.nl"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          info@webboostpartner.nl
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Locatie</p>
                        <p className="text-gray-600">Rotterdam, Nederland</p>
                        <p className="text-sm text-gray-500">Actief in heel Rotterdam en omgeving</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Bereikbaarheid</p>
                        <p className="text-gray-600">Ma - Vr: 09:00 - 18:00</p>
                        <p className="text-sm text-gray-500">WhatsApp altijd bereikbaar</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78740.53599416493!2d4.4378256!3d51.9244208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7605f54c47d%3A0x5229bbac955e4b85!2sRotterdam!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locatie Rotterdam"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 font-medium">30 dagen geld-terug garantie</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-medium">Rotterdam & omgeving</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
              <Clock className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Binnen 1-2 weken live</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700 font-medium">15+ tevreden klanten</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
