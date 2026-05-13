"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const productLinks = [
  { href: "/products/bedsheets", label: "Bedsheets" },
  { href: "/products/towels", label: "Towels" },
  { href: "/products/pillow-covers", label: "Pillow Covers" },
  { href: "/products/bath-mats", label: "Bath Mats" },
  { href: "/products/duvets", label: "Duvets" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M9 3l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-primary text-lg font-bold tracking-wider font-[var(--font-heading)] leading-tight uppercase">
                Lokasya
              </h1>
              <p className="text-[10px] tracking-[2px] text-muted uppercase">
                Ventures
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative dropdown">
                  <Link
                    href={link.href}
                    className={`nav-link flex items-center gap-1 ${
                      pathname.startsWith("/products") ? "active" : ""
                    }`}
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="dropdown-menu absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                    {productLinks.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary text-sm">
              Enquire Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${
              mobileOpen ? "hamburger-active" : ""
            }`}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-400 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col pt-24 px-6 gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between py-3 text-lg font-medium text-gray-700 border-b border-gray-100"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileProductsOpen && (
                  <div className="pl-4 py-2 space-y-1">
                    {productLinks.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-gray-500 hover:text-primary text-sm"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg font-medium text-gray-700 border-b border-gray-100 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-6 justify-center"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}
