import Link from "next/link";
import { notFound } from "next/navigation";

const beveragesData: Record<string, {
  name: string;
  images: string[];
  description: string;
  origin: string;
  shelfLife: string;
  packaging: string[];
  varieties: string[];
  uses: string[];
  specifications: { label: string; value: string }[];
}> = {
  "coffee-beans": {
    name: "Coffee Beans",
    images: ["/images/beverages/coffee-1.jpeg", "/images/beverages/coffee-2.jpeg", "/images/beverages/coffee-3.jpeg"],
    description:
      "India is the seventh-largest coffee producer in the world. We export premium quality green coffee beans from India's renowned estates in Coorg, Chikmagalur, and Wayanad. Our beans include Arabica (mild, aromatic) and Robusta (strong, full-bodied) varieties, including specialty monsooned coffee (subject to Coffee Board of India certification).",
    origin: "Karnataka (Coorg, Chikmagalur), Kerala (Wayanad), Tamil Nadu",
    shelfLife: "12–18 months",
    packaging: ["1kg", "5kg", "25kg", "60kg jute bags"],
    varieties: ["Arabica Plantation A", "Arabica Plantation B", "Robusta Cherry AB", "Robusta Parchment AB", "Monsooned Coffee (Coffee Board certified)"],
    uses: ["Roasting & brewing", "Instant coffee manufacturing", "Espresso blends", "Cold brew", "Decaf production"],
    specifications: [
      { label: "Bean Size", value: "Screen 17+ (Bold)" },
      { label: "Moisture", value: "Max 11%" },
      { label: "Defects", value: "Max 4% by weight" },
      { label: "Grade", value: "Plantation A / Cherry AB" },
    ],
  },
  "mineral-water": {
    name: "Packaged Drinking Water",
    images: ["/images/beverages/water-1.jpeg", "/images/beverages/water-2.jpeg", "/images/beverages/water-3.jpeg", "/images/beverages/water-4.jpeg", "/images/beverages/water-5.jpeg"],
    description:
      "We export BIS-certified packaged drinking water that meets international quality and safety standards. Packaged under strict BIS (IS 14543) and FSSAI certified facilities, our drinking water is available in multiple sizes for retail and bulk distribution worldwide.",
    origin: "Gujarat, India",
    shelfLife: "6–12 months",
    packaging: ["250ml", "500ml", "1L", "2L", "5L", "20L bulk"],
    varieties: ["Packaged Drinking Water (IS 14543)"],
    uses: ["Retail distribution", "Hospitality & restaurants", "Events & catering", "Corporate supply", "Airline & travel"],
    specifications: [
      { label: "TDS", value: "100–300 ppm" },
      { label: "pH Level", value: "6.5–8.5" },
      { label: "Certification", value: "BIS IS 14543 / FSSAI" },
      { label: "Packaging", value: "PET bottles, Jars" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(beveragesData).map((slug) => ({ slug }));
}

export default async function BeverageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const beverage = beveragesData[slug];
  if (!beverage) notFound();

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/products" className="hover:text-primary">Products</Link>
        <span>/</span>
        <Link href="/products/beverages" className="hover:text-primary">Beverages</Link>
        <span>/</span>
        <span className="text-primary font-medium">{beverage.name}</span>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <img
              src={beverage.images[0]}
              alt={beverage.name}
              className="w-full h-[300px] object-contain bg-gray-50"
            />
          </div>
          {beverage.images.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {beverage.images.slice(1, 3).map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-100">
                  <img src={img} alt={`${beverage.name} ${i + 2}`} className="w-full h-32 object-contain bg-gray-50" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-2">Beverage</p>
          <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary mb-4">
            {beverage.name}
          </h1>
          <p className="text-gray-500 leading-relaxed text-sm">{beverage.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-cream rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Origin</p>
              <p className="text-sm font-semibold text-primary">{beverage.origin}</p>
            </div>
            <div className="bg-cream rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Shelf Life</p>
              <p className="text-sm font-semibold text-primary">{beverage.shelfLife}</p>
            </div>
          </div>

          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(beverage.name)}.%20Please%20share%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-block"
          >
            Send Inquiry →
          </Link>
        </div>
      </div>

      {/* Varieties */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Available Varieties
      </h3>
      <div className="flex flex-wrap gap-2">
        {beverage.varieties.map((v) => (
          <span key={v} className="bg-cream text-primary text-xs font-semibold px-4 py-2 rounded-full">
            {v}
          </span>
        ))}
      </div>

      {/* Specifications */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Specifications
      </h3>
      <table className="spec-table">
        <thead>
          <tr>
            <th>PARAMETER</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          {beverage.specifications.map((spec) => (
            <tr key={spec.label}>
              <td>{spec.label}</td>
              <td>{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Uses */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Common Uses
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {beverage.uses.map((use) => (
          <div key={use} className="flex items-start gap-2">
            <svg className="w-4 h-4 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 text-sm">{use}</span>
          </div>
        ))}
      </div>

      {/* Packaging */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Packaging Options
      </h3>
      <div className="flex flex-wrap gap-2">
        {beverage.packaging.map((p) => (
          <span key={p} className="bg-cream text-primary text-xs font-semibold px-4 py-2 rounded-full">
            {p}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 bg-cream rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold font-[var(--font-heading)] text-primary">
            Interested in {beverage.name}?
          </h4>
          <p className="text-gray-400 text-sm mt-1">
            Get custom pricing, samples, and specifications for your requirements.
          </p>
        </div>
        <Link href="/contact" className="btn-primary whitespace-nowrap">
          Contact Us →
        </Link>
      </div>
    </div>
  );
}
