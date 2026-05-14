"use client";
import useScrollReveal from "@/hooks/useScrollReveal";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = { id: string; name: string; tag: string; image: string; href: string };

export default function ProductsSection() {
  const ref = useScrollReveal();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products").then((r) => r.json()).then((data) => setProducts(data.slice(0, 4)));
  }, []);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
            Our Collection
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary">
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
