import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Vrijblijvende Website Quickscan & Advies | WebBoost Partner",
  description:
    "Neem direct contact op met WebBoost Partner in Rotterdam voor een gratis website scan of onafhankelijk advies over uw overstap naar Next.js. Binnen 24 uur een persoonlijk antwoord.",
  alternates: { canonical: "https://webboostpartner.nl/contact" },
};

interface ContactCardProps {
  icon: React.ComponentType<{ size: number; strokeWidth?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
}

function ContactCard({ icon: Icon, label, children }: ContactCardProps) {
  return (
    <div className="border-2 border-black bg-white p-5 hover:shadow-brutal-sm hover:-translate-y-1 transition-all">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 grid place-items-center bg-[#FF4500] text-white border-2 border-black shrink-0">
          <Icon size={20} strokeWidth={2.5} />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#525252] mb-1">
            {label}
          </p>
          <div className="text-[#1a1a1a]">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO: Gericht op drempelverlaging en de Quickscan */}
      <section className="bg-[#FAFAFA] border-b-2 border-black py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF4500] mb-4">
            // Vrijblijvend Advies
          </p>

          <h1 className="font-heading font-black uppercase tracking-tighter leading-[0.9] text-5xl sm:text-7xl">
            Laten we <span className="text-[#FF4500]">kennismaken</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-3xl leading-relaxed text-[#1a1a1a] font-medium">
            Wil je weten waar jouw website momenteel online kansen laat liggen, of overweeg je een strategische upgrade naar Next.js? Stuur een bericht. Je ontvangt <strong>binnen 24 uur</strong> een persoonlijk en inhoudelijk antwoord direct van mij (Ron). Geen geautomatiseerde funnels, wel eerlijk advies.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid lg:grid-cols-5 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-heading font-extrabold uppercase text-2xl mb-2">
                Rechtstreeks contact
              </h2>
              <p className="text-[#525252]">
                Heb je een korte vraag of stem je zaken liever direct telefonisch af?
              </p>
            </div>

            <div className="space-y-4">
              <ContactCard icon={Phone} label="Telefoon">
                <a
                  href="tel:+31642628242"
                  className="hover:text-[#FF4500] font-semibold transition-colors"
                  data-testid="contact-phone"
                >
                  06‑42628242
                </a>
              </ContactCard>

              <ContactCard icon={Mail} label="E-mail">
                <a
                  href="mailto:info@webboostpartner.nl"
                  className="hover:text-[#FF4500] font-semibold break-all transition-colors"
                  data-testid="contact-email"
                >
                  info@webboostpartner.nl
                </a>
              </ContactCard>

              <ContactCard icon={MapPin} label="Regio Rotterdam">
                <span className="font-semibold">Rotterdam, NL</span>
                <p className="text-sm text-[#525252] mt-1 leading-relaxed">
                  Ik kom graag bij u langs op locatie in Rotterdam, Capelle aan den IJssel, Barendrecht, Schiedam, Ridderkerk of Krimpen aan den IJssel.
                </p>
              </ContactCard>

              <ContactCard icon={Clock} label="Persoonlijke reactie">
                <span className="font-semibold">Binnen 24 uur</span>
                <p className="text-sm text-[#525252] mt-1">Elke werkdag snel en direct antwoord.</p>
              </ContactCard>
            </div>
          </div>

          {/* RIGHT SIDE — Formulier met verplichte Suspense wrapper */}
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="border-2 border-black bg-white p-8 shadow-brutal">
                  <p className="font-mono text-sm text-[#525252]">Formulier laden...</p>
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
