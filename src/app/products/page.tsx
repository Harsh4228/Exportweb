import Link from "next/link";
import { readData } from "@/lib/data";

type Product = { id: string; name: string; tag: string; image: string; href: string };

export const dynamic = "force-dynamic";

export default function ProductsPage() {
  const products = readData<Product[]>("products.json");
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-3">
        OUR PRODUCTS
      </h1>
      <p className="text-gray-500 text-lg mb-10 max-w-2xl">
        Premium 100% cotton home textiles crafted for comfort, durability, and style.
        Select a product category to explore details and specifications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className="group relative rounded-2xl overflow-hidden h-[280px] block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                {product.tag}
              </p>
              <h3 className="text-white text-2xl font-bold font-[var(--font-heading)]">
                {product.name}
              </h3>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 text-primary text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              View Details →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
