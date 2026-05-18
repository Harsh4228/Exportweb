import Link from "next/link";
import { notFound } from "next/navigation";

const grainsData: Record<string, {
  name: string;
  image: string;
  description: string;
  origin: string;
  shelfLife: string;
  packaging: string[];
  varieties: string[];
  uses: string[];
  specifications: { label: string; value: string }[];
}> = {
  rice: {
    name: "Rice",
    image: "/images/food-grains/rice.avif",
    description:
      "India is the world's second-largest producer and a leading exporter of rice. We export premium quality Basmati and Non-Basmati rice varieties. Our rice is carefully sorted, graded, and packed to meet international quality standards for aroma, grain length, and purity.",
    origin: "Punjab, Haryana, Uttar Pradesh, West Bengal",
    shelfLife: "18–24 months",
    packaging: ["1kg", "5kg", "10kg", "25kg", "50kg bags"],
    varieties: ["1121 Basmati", "Pusa Basmati", "Traditional Basmati", "Sona Masoori", "IR-64", "Parboiled Rice", "Broken Rice"],
    uses: ["Daily cooking", "Biryani & pulao", "Rice flour", "Puffed rice & snacks", "Industrial use"],
    specifications: [
      { label: "Grain Length", value: "6.5–8.4mm (Basmati)" },
      { label: "Moisture", value: "Max 13%" },
      { label: "Broken", value: "Max 2–5%" },
      { label: "Sortex", value: "Double / Triple Sortex" },
    ],
  },
  wheat: {
    name: "Wheat",
    image: "/images/food-grains/wheat.webp",
    description:
      "Indian wheat is known for its high protein content and excellent milling quality. We export premium grade wheat from the fertile plains of Madhya Pradesh, Punjab, and Rajasthan. Suitable for bread, chapati, biscuits, and pasta manufacturing.",
    origin: "Madhya Pradesh, Punjab, Rajasthan, Haryana",
    shelfLife: "12–18 months",
    packaging: ["5kg", "10kg", "25kg", "50kg bags"],
    varieties: ["Sharbati Wheat", "Lokwan Wheat", "MP Wheat", "Durum Wheat"],
    uses: ["Flour milling", "Bread & bakery", "Chapati & roti", "Pasta & noodles", "Animal feed"],
    specifications: [
      { label: "Protein Content", value: "11–14%" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Gluten Content", value: "Min 8%" },
      { label: "Grade", value: "FAQ / Premium" },
    ],
  },
  oats: {
    name: "Oats",
    image: "/images/food-grains/oats.jpeg",
    description:
      "Our oats are sourced from premium Indian farms and processed to retain maximum nutrition. Available in whole oats and rolled oats forms, they are ideal for health-conscious consumers and food manufacturers worldwide.",
    origin: "Rajasthan, Haryana, Punjab",
    shelfLife: "12 months",
    packaging: ["500g", "1kg", "5kg", "25kg bags"],
    varieties: ["Whole Oats", "Rolled Oats", "Steel-Cut Oats", "Oat Flour"],
    uses: ["Breakfast cereals", "Baking & granola", "Health foods", "Baby food", "Smoothies & shakes"],
    specifications: [
      { label: "Protein Content", value: "Min 12%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Fiber Content", value: "Min 8%" },
      { label: "Grade", value: "Food Grade" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(grainsData).map((slug) => ({ slug }));
}

export default async function GrainDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const grain = grainsData[slug];
  if (!grain) notFound();

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/products" className="hover:text-primary">Products</Link>
        <span>/</span>
        <Link href="/products/food-grains" className="hover:text-primary">Food Grains</Link>
        <span>/</span>
        <span className="text-primary font-medium">{grain.name}</span>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
          <img
            src={grain.image}
            alt={grain.name}
            className="w-full h-[350px] object-contain bg-gray-50"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-2">Food Grain</p>
          <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary mb-4">
            {grain.name}
          </h1>
          <p className="text-gray-500 leading-relaxed text-sm">{grain.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-cream rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Origin</p>
              <p className="text-sm font-semibold text-primary">{grain.origin}</p>
            </div>
            <div className="bg-cream rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Shelf Life</p>
              <p className="text-sm font-semibold text-primary">{grain.shelfLife}</p>
            </div>
          </div>

          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(grain.name)}.%20Please%20share%20details.`}
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
        {grain.varieties.map((v) => (
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
          {grain.specifications.map((spec) => (
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
        {grain.uses.map((use) => (
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
        {grain.packaging.map((p) => (
          <span key={p} className="bg-cream text-primary text-xs font-semibold px-4 py-2 rounded-full">
            {p}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 bg-cream rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold font-[var(--font-heading)] text-primary">
            Interested in {grain.name}?
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
