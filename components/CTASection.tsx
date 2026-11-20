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
      className="bg-foreground text-white py-24 sm:py-32 relative overflow-hidden" 
      data-testid="cta-section"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 text-balance max-w-4xl">
          {title.split(' ').map((word, index) => {
            if (index < 3) {
              return <span key={index} className="text-brand italic">{word} </span>;
            }
            return <span key={index}>{word} </span>;
          })}
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-sans">
          {subtitle}
        </p>
        
        <Link
          href={href}
          className="inline-flex items-center gap-2 bg-brand text-white font-sans font-medium px-8 py-4 rounded-sm hover:bg-brand-hover transition-all duration-300"
          data-testid="cta-button"
        >
          {button} <ArrowRight size={18} className="ml-1" />
        </Link>
      </div>
    </section>
  );
}
