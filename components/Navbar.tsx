"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MonitorPlay, ChevronDown, Zap } from "lucide-react"; // Zap toegevoegd

interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

const mainLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  {
    href: "/website-laten-maken-rotterdam",
    label: "WEBSITE",
    children: [
      {
        href: "/website-laten-maken-rotterdam",
        label: "Website laten maken",
      },
      { href: "/nextjs-vs-wordpress", label: "Next.js vs WordPress" },
      { href: "/wordpress-naar-nextjs", label: "WordPress naar Next.js" },
    ],
  },
  { href: "/seo-rotterdam", label: "SEO" },
  { href: "/pakketten", label: "PAKKETTEN" },
  { href: "/over-mij", label: "OVER MIJ" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll effect voor premium blur/achtergrond
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
        setOpen(false);
        setMobileSubOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileSubOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || open
          ? "bg-background/95 backdrop-blur-md border-b border-border-subtle py-3"
          : "bg-transparent py-5"
      }`}
      data-testid="site-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Nu consistent met de footer */}
          <Link
            href="/"
            className="shrink-0 flex items-center gap-3 font-serif text-xl lg:text-2xl text-foreground"
            aria-label="WebBoost Partner - Home"
          >
            <span className="bg-brand text-white w-9 h-9 lg:w-10 lg:h-10 grid place-items-center rounded-sm">
              <Zap size={20} className="fill-current" />
            </span>
            WebBoost Partner
          </Link>

          {/* Desktop navigatie */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6" aria-label="Hoofdnavigatie">
              {mainLinks.map((item) =>
                item.children ? (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((v) => !v)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive(item.href)
                          ? "text-brand"
                          : "text-foreground-muted hover:text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 pt-4 w-64" role="menu">
                        <div className="bg-white border border-border-subtle shadow-soft rounded-sm py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={`block px-5 py-2.5 text-sm transition-colors ${
                                isActive(child.href)
                                  ? "text-brand bg-background-secondary/50 font-medium"
                                  : "text-foreground-muted hover:text-brand hover:bg-background-secondary/30"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive(item.href)
                        ? "text-brand"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Knop */}
            <Link
              href="/contact?intent=quickscan"
              className="ml-2 inline-flex items-center gap-2 bg-brand text-white font-medium text-sm px-5 py-2.5 rounded-sm hover:bg-brand-hover transition-colors whitespace-nowrap"
            >
              <MonitorPlay size={16} />
              Gratis Quickscan
            </Link>
          </div>

          {/* Mobiele Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 grid place-items-center text-foreground hover:text-brand transition-colors"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            data-testid="mobile-menu-btn"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobiel Menu */}
        {open && (
          <nav
            id="mobile-navigation"
            className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border-subtle shadow-soft py-4 px-6 space-y-2"
            aria-label="Mobiele navigatie"
          >
            {mainLinks.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileSubOpen((v) => !v)}
                    className="w-full flex items-center justify-between py-2 text-sm font-medium text-foreground"
                    aria-expanded={mobileSubOpen}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileSubOpen ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </button>

                  {mobileSubOpen && (
                    <div className="pl-4 py-2 space-y-2 border-l border-border-subtle ml-2 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`block py-1.5 text-sm transition-colors ${
                            isActive(child.href)
                              ? "text-brand font-medium"
                              : "text-foreground-muted hover:text-brand"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-brand"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/contact?intent=quickscan"
              onClick={() => setOpen(false)}
              className="block w-full bg-brand text-white font-medium text-sm text-center py-3 rounded-sm mt-4 hover:bg-brand-hover transition-colors"
            >
              Gratis Quickscan
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
