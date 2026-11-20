import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Vrijblijvende Website Quickscan & Advies | WebBoost Partner",
  description:
    "Neem direct contact op met WebBoost Partner in Rotterdam voor een gratis website scan of persoonlijk advies over jouw overstap naar Next.js. Binnen 24 uur een reactie direct van Ron.",
  alternates: { canonical: "/contact" },
};

interface ContactCardProps {
  icon: React.ComponentType<{ size: number; strokeWidth?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
}

function ContactCard({ icon: Icon, label, children }: ContactCardProps) {
  return (
    <div className="bg-background border border-border-subtle p-6 rounded-sm shadow-sm hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 grid place-items-center bg-brand/10 text-brand rounded-full shrink-0">
          <Icon size={22} strokeWidth={2} />
        </div>
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-foreground-muted font-semibold mb-1.5">
            {label}
          </p>
          <div className="text-foreground font-sans">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand font-bold mb-6">
            Vrijblijvend Advies
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-8">
            Laten we <span className="text-brand italic">kennismaken</span>.
          </h1>

          <p className="text-lg sm:text-xl max-w-3xl leading-relaxed text-foreground-muted font-sans mb-10">
            Wil je weten waar jouw website momenteel online kansen laat liggen, of overweeg je een strategische upgrade naar Next.js? Stuur een bericht. Je ontvangt <strong className="text-foreground font-semibold">binnen 24 uur</strong> een persoonlijk en inhoudelijk antwoord direct van mij (Ron). Geen geautomatiseerde funnels, wel eerlijk advies.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="bg-background-secondary py-24 sm:py-32 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* LINKERKOLOM: Directe contactgegevens */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-4">
                Rechtstreeks contact
              </h2>
              <p className="text-foreground-muted font-sans leading-relaxed">
                Heb je een korte vraag of stem je zaken liever direct telefonisch af? 
                Ik sta je graag persoonlijk te woord.
              </p>
            </div>

            <div className="space-y-4">
              <ContactCard icon={Phone} label="Telefoon">
                <a
                  href="tel:+31642628242"
                  className="hover:text-brand font-medium transition-colors text-lg"
                  data-testid="contact-phone"
                >
                  06‑42628242
                </a>
              </ContactCard>

              <ContactCard icon={Mail} label="E-mail">
                <a
                  href="mailto:info@webboostpartner.nl"
                  className="hover:text-brand font-medium break-all transition-colors text-lg"
                  data-testid="contact-email"
                >
                  info@webboostpartner.nl
                </a>
              </ContactCard>

              <ContactCard icon={MapPin} label="Regio Rotterdam">
                <span className="font-medium text-lg">Rotterdam, NL</span>
                <p className="text-sm text-foreground-muted mt-2 leading-relaxed">
                  Ik kom graag bij u langs op locatie in Rotterdam, Capelle aan den IJssel, Barendrecht, Schiedam, Ridderkerk of Krimpen aan den IJssel.
                </p>
              </ContactCard>

              <ContactCard icon={Clock} label="Persoonlijke reactie">
                <span className="font-medium text-lg">Binnen 24 uur</span>
                <p className="text-sm text-foreground-muted mt-2">Elke werkdag snel en direct antwoord.</p>
              </ContactCard>
            </div>
          </div>

          {/* RECHTERKOLOM: Het dynamische contactformulier */}
          <div className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="bg-background border border-border-subtle p-8 rounded-sm shadow-soft">
                  <p className="font-sans text-sm text-foreground-muted">Formulier laden...</p>
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
