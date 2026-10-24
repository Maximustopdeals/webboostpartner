import Link from "next/link";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-black text-[#FAFAFA] border-t border-white/20"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid md:grid-cols-4 gap-10">
        {/* LOGO & STRATEGIE FOCUS */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-heading font-black uppercase text-xl mb-4 tracking-tight">
            <span className="bg-[#FF4500] text-black w-9 h-9 grid place-items-center border-2 border-white">
              <Zap size={20} strokeWidth={3} />
            </span>
            WebBoost Partner
          </div>
          <p className="text-sm text-white/70 max-w-md leading-relaxed font-medium">
            Een professionele website die écht klanten oplevert. Wij bouwen
            bliksemsnelle, toekomstbestendige Next.js platforms voor ambitieuze
            ondernemers in Rotterdam en omgeving.
          </p>
        </div>

        {/* DIENSTEN NAVIGATIE */}
        <div>
          <h4 className="font-heading font-bold uppercase text-xs tracking-widest mb-4 text-[#FF4500]">
            Diensten
          </h4>
          <ul className="space-y-2 text-sm font-medium text-white/80">
            <li>
              <Link
                href="/website-laten-maken-rotterdam"
                className="hover:text-[#FF4500] transition-colors"
              >
                Website laten maken
              </Link>
            </li>
            <li>
              <Link
                href="/seo-rotterdam"
                className="hover:text-[#FF4500] transition-colors"
              >
                SEO Rotterdam
              </Link>
            </li>
            <li>
              <Link
                href="/wordpress-naar-nextjs"
                className="hover:text-[#FF4500] transition-colors"
              >
                WordPress migratie
              </Link>
            </li>
            <li>
              <Link
                href="/pakketten"
                className="hover:text-[#FF4500] transition-colors"
              >
                Pakketten &amp; Tarieven
              </Link>
            </li>
          </ul>
        </div>

        {/* GEGEVENS & REGIO */}
        <div>
          <h4 className="font-heading font-bold uppercase text-xs tracking-widest mb-4 text-[#FF4500]">
            Contact
          </h4>
          <ul className="space-y-3 text-sm font-medium text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-[#FF4500] shrink-0" />
              <span>
                Rotterdam, Nederland
                <span className="block text-3xs font-mono uppercase tracking-wider text-white/40 mt-0.5">
                  Regio Rijnmond
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 text-[#FF4500] shrink-0" />
              <a
                href="tel:+31642628242"
                className="hover:text-[#FF4500] transition-colors"
                data-testid="footer-phone"
              >
                06-42628242
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-[#FF4500] shrink-0" />
              <a
                href="mailto:info@webboostpartner.nl"
                className="hover:text-[#FF4500] break-all transition-colors"
                data-testid="footer-email"
              >
                info@webboostpartner.nl
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM SECTIE */}
      <div className="border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          {/* Drie-koloms verdeling op desktop, gestapeld op mobiel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center text-xs text-white/50">
            {/* Links: copyright */}
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} WebBoost Partner.
              <span className="block sm:inline sm:ml-1">
                Alle rechten voorbehouden.
              </span>
            </p>

            {/* Midden: built with */}
            <p className="text-center font-mono text-3xs uppercase tracking-wider text-white/30">
              Built with Next.js &amp; Craftsmanship
            </p>

            {/* Rechts: juridische navigatie */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
              <Link
                href="/privacy"
                className="hover:text-[#FF4500] transition-colors"
              >
                Privacyverklaring
              </Link>
              <span className="text-white/20">·</span>
              <Link
                href="/voorwaarden"
                className="hover:text-[#FF4500] transition-colors"
              >
                Algemene voorwaarden
              </Link>
              <span className="text-white/20">·</span>
              <Link
                href="/cookiebeleid"
                className="hover:text-[#FF4500] transition-colors"
              >
                Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
