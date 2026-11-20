"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border-subtle py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo behouden, maar netjes uitgelijnd */}
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/images/logo.png" // Zorg dat dit pad klopt met jouw public map
            alt="WebBoost Partner"
            width={160}
            height={40}
            className="w-auto h-8 md:h-10 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigatie */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/website-laten-maken-rotterdam" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
            Webdesign
          </Link>
          <Link href="/seo-rotterdam" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
            SEO
          </Link>
          <Link href="/pakketten" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
            Pakketten
          </Link>
          <Link href="/over-mij" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
            Over mij
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-brand text-white px-6 py-2.5 rounded-none text-sm font-medium hover:bg-brand-hover transition-colors duration-200"
          >
            Kennismaken
          </Link>
        </div>
      </div>
    </header>
  );
}
