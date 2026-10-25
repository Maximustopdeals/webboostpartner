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
    <section 
      className="bg-[#0A0A0A] text-white py-24 sm:py-32 border-y-2 border-black relative overflow-hidden" 
      data-testid="cta-section"
    >
      {/* Subtiele achtergrond patronen */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[30rem] h-[30rem] border-[12px] border-[#FF4500] rotate-12" />
        <div className="absolute -bottom-32 -left-16 w-[25rem] h-[25rem] border-[12px] border-white -rotate-12" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        <h2 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 text-balance">
          {title.split(' ').map((word, index) => {
            // ✅ FIX: text-[#FF4500] -> text-orange-accessible
            if (index < 3) {
              return <span key={index} className="text-orange-accessible">{word} </span>;
            }
            return <span key={index}>{word} </span>;
          })}
        </h2>
        
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed font-light">
          {subtitle}
        </p>
        
        <Link
          href={href}
          className="inline-flex items-center gap-3 bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider text-sm border-2 border-[#FF4500] px-8 py-4 hover:bg-white hover:border-white hover:text-black hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#FF4500] transition-all"
          data-testid="cta-button"
        >
          {button} <ArrowRight size={18} strokeWidth={3} />
        </Link>
      </div>
    </section>
  );
}
