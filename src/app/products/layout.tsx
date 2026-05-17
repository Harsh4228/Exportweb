"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const productLinks = [
  { href: "/products/spices", label: "Indian Spices" },
  { href: "/products/food-grains", label: "Food Grains" },
  { href: "/products/beverages", label: "Beverages" },
];

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mb-5 text-center">
                Our Products
              </h3>
              <nav className="space-y-1">
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`sidebar-link ${
                      pathname === link.href ? "active" : ""
                    }`}
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" className="rotate-90 origin-center" />
                    </svg>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
