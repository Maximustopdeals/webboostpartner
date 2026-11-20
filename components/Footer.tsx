import Link from "next/link";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#1A1A1A] text-white/90 border-t border-white/10"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-12">
        {/* LOGO & STRATEGIE FOCUS */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 font-serif text-2xl mb-4 text-white">
            <span className="bg-brand text-white w-10 h-10 grid place-items-center rounded-sm">
              <Zap size={20} className="fill-current" />
            </span>
            WebBoost Partner
          </div>
          <p className="text-sm text-white/60 max-w-sm leading-relaxed">
            Een professionele website die écht klanten oplevert. Wij bouwen
            bliksemsnelle, toekomstbestendige Next.js platforms voor ambitieuze
            ondernemers in Rotterdam en omgeving.
          </p>
        </div>

        {/* DIENSTEN NAVIGATIE */}
        <div>
          <h2 className="font-sans font-semibold uppercase text-xs tracking-widest mb-5 text-brand">
            Diensten
          </h2>
          <ul className="space-y-3 text-sm text-white/60">
            <li>
              <Link href="/website-laten-maken-rotterdam" className="hover:text-white transition-colors">
                Website laten maken
              </Link>
            </li>
            <li>
              <Link href="/seo-rotterdam" className="hover:text-white transition-colors">
                SEO Rotterdam
              </Link>
            </li>
            <li>
              <Link href="/wordpress-naar-nextjs" className="hover:text-white transition-colors">
                WordPress migratie
              </Link>
            </li>
            <li>
              <Link href="/pakketten" className="hover:text-white transition-colors">
                Pakketten &amp; Tarieven
              </Link>
            </li>
          </ul>
        </div>

        {/* GEGEVENS & REGIO */}
        <div>
          <h2 className="font-sans font-semibold uppercase text-xs tracking-widest mb-5 text-brand">
            Contact
          </h2>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand shrink-0" />
              <span>
                Rotterdam, Nederland
                <span className="block text-xs text-white/40 mt-1">
                  Regio Rijnmond
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand shrink-0" />
              <a href="tel:+31642628242" className="hover:text-white transition-colors" data-testid="footer-phone">
                06-42628242
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand shrink-0" />
              <a href="mailto:info@webboostpartner.nl" className="hover:text-white transition-colors break-all" data-testid="footer-email">
                info@webboostpartner.nl
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM SECTIE */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>
              &copy; {new Date().getFullYear()} WebBoost Partner. Alle rechten voorbehouden.
            </p>

            <p className="font-sans">
              Built with Next.js &amp; Craftsmanship
            </p>

            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span>·</span>
              <Link href="/voorwaarden" className="hover:text-white transition-colors">
                Voorwaarden
              </Link>
              <span>·</span>
              <Link href="/cookiebeleid" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
