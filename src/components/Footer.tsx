import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blogs" },
];

const products = [
  { href: "/products/spices", label: "Indian Spices" },
  { href: "/products/food-grains", label: "Food Grains" },
  { href: "/products/beverages", label: "Beverages" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Banner */}
      <div className="bg-cream py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary">
              Ready to Source Premium Indian Products?
            </h3>
            <p className="text-gray-400 mt-1">
              Get a free quote today for premium spices, food grains & beverages.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary px-8 py-4 text-base whitespace-nowrap"
          >
            Request Free Quote →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/images/logo-dark.png"
                alt="Meridian Global Exports"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Committed to delivering premium Indian spices, food grains, and
              beverages to global markets. Proudly bringing India&apos;s
              finest agricultural products to businesses around the world.
            </p>
            <div className="flex gap-3 mt-5">
              {["Instagram", "LinkedIn", "WhatsApp"].map((s) => (
                <a key={s} href="#" aria-label={s} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-xs">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Our Products</h4>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-white/50 hover:text-white transition-colors text-sm">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>{process.env.NEXT_PUBLIC_ADDRESS}</p>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="block hover:text-white transition-colors">{process.env.NEXT_PUBLIC_PHONE_DISPLAY}</a>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE2}`} className="block hover:text-white transition-colors">{process.env.NEXT_PUBLIC_PHONE2_DISPLAY}</a>
              {process.env.NEXT_PUBLIC_EMAIL === process.env.NEXT_PUBLIC_EMAIL2 ? (
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="block hover:text-white transition-colors">{process.env.NEXT_PUBLIC_EMAIL}</a>
              ) : (
                <>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="block hover:text-white transition-colors">{process.env.NEXT_PUBLIC_EMAIL}</a>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL2}`} className="block hover:text-white transition-colors">{process.env.NEXT_PUBLIC_EMAIL2}</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Meridian Global Exports. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <span className="text-yellow-400">★★★★★</span>
            <span>4.8 Rating • 500+ Happy Clients</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
