import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  button?: string;
  href?: string;
}

export default function CTASection({
  title = "Klaar om de verborgen kansen van jouw website te ontdekken?",
  subtitle = "Vraag een gratis website & SEO Quickscan aan. Ik bekijk je website handmatig en stuur je binnen 48 uur een persoonlijk advies. 100% vrijblijvend, geen verkoopgesprek.",
  button = "Vraag gratis Quickscan aan",
  href = "/contact?intent=quickscan",
}: CTASectionProps) {
  return (
    <section className="bg-black text-white py-20 sm:py-28 border-y-2 border-black relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 border-8 border-[#FF4500] rotate-12" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 border-8 border-white -rotate-12" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative">
        <h2 className="font-heading font-extrabold uppercase text-4xl sm:text-6xl tracking-tighter leading-[0.95] mb-5">
          {title}
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mb-8 leading-relaxed">{subtitle}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-[#FF4500] text-white font-heading font-bold uppercase tracking-wider border-2 border-white px-8 py-4 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#FF4500] transition-all"
          data-testid="cta-button"
        >
          {button} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
