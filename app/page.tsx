import Link from "next/link";
import { ArrowRight, Check, ExternalLink, Monitor, Smartphone } from "lucide-react";
import USPGrid from "@/components/USPGrid";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Webdesign Rotterdam | Websites die klanten opleveren",
  description: "Professioneel webdesign in Rotterdam. Wij bouwen bliksemsnelle websites die jouw vakmanschap tonen en bezoekers omzetten in klanten.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative bg-[#FAFAFA] border-b-2 border-black py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LINKERKANT: TEKST */}
          <div className="lg:col-span-7">
            <h1 className="font-heading font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-black leading-[1.1]">
              <span className="block text-[#FF4500] mb-2">
                Webdesign Rotterdam:
              </span>
              Een website die écht <br className="hidden sm:block" />
              klanten oplevert.
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl max-w-2xl text-[#1a1a1a] font-medium leading-relaxed">
              Geen technisch jargon. Wel een bliksemsnelle website die jouw vakmanschap laat zien en bezoekers omzet in betalende klanten.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact?intent=quickscan" 
                className="inline-flex items-center justify-center bg-[#FF4500] text-black font-heading font-bold uppercase tracking-wider px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_#1A1A19]"
              >
                Vraag gratis adviesgesprek aan <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <ul className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-mono uppercase tracking-wider text-black font-bold">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#FF4500] stroke-[3]" /> Vaste prijs vooraf
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#FF4500] stroke-[3]" /> 100% eigenaarschap
              </li>
            </ul>
          </div>

          {/* RECHTERKANT: LIVE BEWIJS KAART */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-[#FF4500] translate-x-3 translate-y-3 border-2 border-black" />
            
            <div className="relative bg-white border-2 border-black p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[#525252] font-bold">
                  Live Bewijs
                </p>
                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 font-mono text-[10px] px-2 py-1 border border-green-800 font-bold">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                  GEVERIFIEERD
                </span>
              </div>

              <div className="flex items-end gap-6 mb-6 border-b-2 border-black pb-6">
                <div>
                  <div className="flex items-center gap-1 text-[#525252] mb-1">
                    <Monitor size={14} /> <span className="text-[10px] font-mono uppercase font-bold">Desktop</span>
                  </div>
                  <span className="font-heading font-black text-5xl leading-none text-[#FF4500]">100</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#525252] mb-1">
                    <Smartphone size={14} /> <span className="text-[10px] font-mono uppercase font-bold">Mobiel</span>
                  </div>
                  <span className="font-heading font-black text-5xl leading-none text-[#FF4500]">95</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                  Recent project:
                </p>
                <h3 className="font-heading font-black text-xl uppercase mb-2">
                  Marley&apos;s Kraamzorg
                </h3>
                <p className="text-sm text-[#4a4a48] leading-relaxed font-medium">
                  Volledig maatwerk in Next.js met een perfecte Core Web Vitals score.
                </p>
              </div>

              <a 
                href="https://pagespeed.web.dev/analysis?url=https://www.marleyskraamzorg.nl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#FAFAFA] text-black font-heading font-bold uppercase text-[11px] tracking-wider border-2 border-black py-3 hover:bg-black hover:text-white transition-colors"
              >
                Verifieer deze score op Google <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <USPGrid />
      <CTASection />
    </>
  );
}
