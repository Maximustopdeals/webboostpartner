"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, FileText, ChevronDown } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

// Hoofdnavigatie: klantgericht met dropdown
const mainLinks: NavLink[] = [
  { href: "/", label: "HOME" },
  {
    href: "/website-laten-maken-rotterdam",
    label: "WEBSITE",
    children: [
      {
        href: "/website-laten-maken-rotterdam",
        label: "Website laten maken in Rotterdam",
      },
      {
        href: "/nextjs-website-laten-maken",
        label: "Next.js website laten maken",
      },
      { href: "/nextjs-vs-wordpress", label: "Next.js vs WordPress" },
      { href: "/wordpress-naar-nextjs", label: "WordPress naar Next.js" },
    ],
  },
  { href: "/seo-rotterdam", label: "SEO" },
  { href: "/pakketten", label: "PAKKETTEN" },
  { href: "/over-mij", label: "OVER MIJ" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Sluit dropdown bij klik buiten
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

  // Sluit dropdown + mobile menu bij Escape
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

  // Sluit mobile menu bij route-wijziging
  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileSubOpen(false);
  }, [pathname]);

  // Check of een link actief is
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-[#FAFAFA] border-b-2 border-black"
      data-testid="site-navbar"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-extrabold uppercase text-base tracking-tight shrink-0"
            aria-label="WebBoost Partner - Home"
          >
            <span className="bg-[#FF4500] text-white w-8 h-8 grid place-items-center border-2 border-black">
              <Zap size={18} strokeWidth={3} />
            </span>
            WEBBOOSTPARTNER
          </Link>

          {/* Desktop nav + CTA */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center" aria-label="Hoofdnavigatie">
              {mainLinks.map((item) =>
                item.children ? (
                  // Dropdown item
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
                      className={`flex items-center gap-1 px-3 py-2 font-heading font-bold uppercase text-xs tracking-wider transition-colors whitespace-nowrap ${
                        isActive(item.href)
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        strokeWidth={3}
                        className={`transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {dropdownOpen && (
                      <div
                        className="absolute top-full left-0 pt-1 w-72"
                        role="menu"
                      >
                        <div className="bg-white border-2 border-black shadow-brutal-sm">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={`block px-4 py-3 font-heading font-bold uppercase text-xs tracking-wider border-b-2 border-black last:border-b-0 transition-colors ${
                                isActive(child.href)
                                  ? "bg-black text-white"
                                  : "hover:bg-[#FF4500] hover:text-white"
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
                  // Reguliere link
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 font-heading font-bold uppercase text-xs tracking-wider transition-colors whitespace-nowrap ${
                      isActive(item.href)
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-1.5 bg-[#FF4500] text-white font-heading font-bold uppercase text-xs tracking-wider border-2 border-black px-4 py-2.5 hover:bg-black hover:-translate-y-0.5 hover:shadow-brutal-sm transition-all whitespace-nowrap"
            >
              <FileText size={14} strokeWidth={2.5} /> OFFERTE AANVRAGEN
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 grid place-items-center border-2 border-black bg-black text-white"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            data-testid="mobile-menu-btn"
          >
            {open ? (
              <X size={18} strokeWidth={3} />
            ) : (
              <Menu size={18} strokeWidth={3} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="lg:hidden border-t-2 border-black py-4 space-y-1"
            aria-label="Mobiele navigatie"
          >
            {mainLinks.map((item) =>
              item.children ? (
                // Mobile: accordion
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileSubOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-3 py-2 font-heading font-bold uppercase text-sm tracking-wider hover:bg-[#FF4500] hover:text-white transition-colors"
                    aria-expanded={mobileSubOpen}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      strokeWidth={3}
                      className={`transition-transform ${
                        mobileSubOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileSubOpen && (
                    <div className="pl-4 border-l-2 border-black ml-3 my-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`block px-3 py-2 font-heading font-bold uppercase text-xs tracking-wider transition-colors ${
                            isActive(child.href)
                              ? "bg-black text-white"
                              : "hover:bg-[#FF4500] hover:text-white"
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
                  className={`block px-3 py-2 font-heading font-bold uppercase text-sm tracking-wider transition-colors ${
                    isActive(item.href)
                      ? "bg-black text-white"
                      : "hover:bg-[#FF4500] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 font-heading font-bold uppercase text-sm tracking-wider bg-[#FF4500] text-white border-2 border-black mt-2 text-center"
            >
              OFFERTE AANVRAGEN
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
