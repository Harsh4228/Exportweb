"use client";
import useScrollReveal from "@/hooks/useScrollReveal";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Indian Spices",
    tag: "Whole & Powder",
    image: "/images/spices/all-spices.jpeg",
    href: "/products/spices",
  },
  {
    id: "2",
    name: "Food Grains",
    tag: "Rice, Wheat, Oats & Ragi",
    image: "/images/food-grains/rice.avif",
    href: "/products/food-grains",
  },
  {
    id: "3",
    name: "Beverages",
    tag: "Coffee Beans & Mineral Water",
    image: "/images/beverages/coffee-1.jpeg",
    href: "/products/beverages",
  },
];

export default function ProductsSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 scroll-reveal">
          <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
            Our Collection
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary">
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="scroll-reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Link href={product.href} className="product-card group h-[380px] block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain bg-gray-900 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-gray-300 text-xs uppercase tracking-wider font-medium">
                    {product.tag}
                  </span>
                  <h3 className="text-white text-xl font-bold font-[var(--font-heading)] mt-1">
                    {product.name}
                  </h3>
                </div>
                <div className="card-content">
                  <span className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                    View Details →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 scroll-reveal">
          <Link href="/products" className="btn-outline">
            View All Products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
