import Link from "next/link";

const products = [
  {
    name: "Bedsheets",
    tag: "Soft and Breathable",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80",
    href: "/products/bedsheets",
  },
  {
    name: "Towels",
    tag: "Ultra-Absorbent",
    image: "https://images.unsplash.com/photo-1616627988170-4a5db5845357?w=500&q=80",
    href: "/products/towels",
  },
  {
    name: "Pillow Covers",
    tag: "Plain and Stripe",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80",
    href: "/products/pillow-covers",
  },
  {
    name: "Bath Mats",
    tag: "Durable and Soft",
    image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=500&q=80",
    href: "/products/bath-mats",
  },
  {
    name: "Duvets",
    tag: "Cozy and Elegant",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80",
    href: "/products/duvets",
  },
];

export default function ProductsPage() {
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
