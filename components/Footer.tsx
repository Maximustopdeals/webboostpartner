import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border-subtle pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Kolom 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl mb-4">WebBoost Partner</h3>
            <p className="text-foreground-muted max-w-sm mb-6">
              Hoogwaardige websites en local SEO voor ambitieuze ondernemers en het MKB in Rotterdam.
            </p>
          </div>

          {/* Kolom 2: Diensten */}
          <div>
            <h4 className="font-medium mb-4">Diensten</h4>
            <ul className="space-y-3">
              <li><Link href="/website-laten-maken-rotterdam" className="text-sm text-foreground-muted hover:text-brand transition-colors">Website laten maken</Link></li>
              <li><Link href="/seo-rotterdam" className="text-sm text-foreground-muted hover:text-brand transition-colors">SEO Rotterdam</Link></li>
              <li><Link href="/nextjs-vs-wordpress" className="text-sm text-foreground-muted hover:text-brand transition-colors">Next.js vs WordPress</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-foreground-muted hover:text-brand transition-colors">Neem contact op</Link></li>
              <li><Link href="/over-mij" className="text-sm text-foreground-muted hover:text-brand transition-colors">Over mij</Link></li>
              <li><a href="mailto:info@webboostpartner.nl" className="text-sm text-foreground-muted hover:text-brand transition-colors">info@webboostpartner.nl</a></li>
            </ul>
          </div>
        </div>

        {/* Onderste balk */}
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground-muted">
            © {new Date().getFullYear()} WebBoost Partner. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-foreground-muted hover:text-foreground">Privacybeleid</Link>
            <Link href="/voorwaarden" className="text-xs text-foreground-muted hover:text-foreground">Algemene Voorwaarden</Link>
            <Link href="/cookiebeleid" className="text-xs text-foreground-muted hover:text-foreground">Cookiebeleid</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
