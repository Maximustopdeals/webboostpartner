"use client";

import { useState, useEffect } from "react";
import { ArrowUp, X } from "lucide-react";

const PHONE: string = "31642628242";
const PREFILL: string = "WebBoostPartner";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState<boolean>(false);
  const [waOpen, setWaOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink: string = `https://wa.me/${PHONE}?text=${encodeURIComponent(PREFILL)}`;

  return (
    <>
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Terug naar boven"
        className={`fixed bottom-6 left-6 z-[9999] w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          showTop 
            ? "opacity-100 translate-y-0 pointer-events-auto bg-foreground text-white hover:bg-brand" 
            : "opacity-0 translate-y-4 pointer-events-none bg-foreground text-white"
        }`}
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        
        {/* Chatvenster */}
        {waOpen && (
          <div className="mb-4 w-[320px] bg-background rounded-lg shadow-xl border border-border-subtle overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-background-secondary border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground">
                    WebBoost Partner
                  </p>
                  <p className="text-xs text-foreground-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setWaOpen(false)} 
                aria-label="Sluit chatvenster"
                className="text-foreground-muted hover:text-foreground transition-colors p-1"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-background">
              <div className="bg-background-secondary text-foreground p-3 rounded-lg text-sm leading-relaxed mb-4">
                Hallo! Hoe kan ik u helpen met een snelle, moderne website?
              </div>
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full text-center bg-[#25D366] text-white font-sans font-medium text-sm py-3 rounded-md hover:bg-[#20bd5a] transition-colors"
              >
                Start Chat
              </a>
            </div>
          </div>
        )}

        {/* WhatsApp Floating Button */}
        <button
          onClick={() => setWaOpen(!waOpen)}
          aria-label="Open WhatsApp chat"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {waOpen ? <X size={24} /> : (
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
