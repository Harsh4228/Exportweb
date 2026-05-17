import Link from "next/link";
import { notFound } from "next/navigation";

const spicesData: Record<string, {
  name: string;
  hindiName: string;
  image: string;
  forms: string;
  description: string;
  origin: string;
  shelfLife: string;
  packaging: string[];
  uses: string[];
  specifications: { label: string; value: string }[];
}> = {
  turmeric: {
    name: "Turmeric",
    hindiName: "Haldi",
    image: "/images/spices/turmeric.png",
    forms: "Powder & Finger",
    description:
      "Indian Turmeric is world-renowned for its deep golden color, earthy aroma, and high curcumin content. Sourced from the finest farms in Erode, Sangli, and Gujarat, our turmeric is processed under strict hygiene standards to retain maximum potency and flavor.",
    origin: "Gujarat, Maharashtra, Tamil Nadu, Andhra Pradesh",
    shelfLife: "12–18 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "10kg", "25kg bags"],
    uses: ["Cooking & seasoning", "Health supplements", "Cosmetics & skincare", "Pharmaceutical applications", "Natural food coloring"],
    specifications: [
      { label: "Curcumin Content", value: "2–5%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Color Value", value: "Min 5.0 ASTA" },
      { label: "Grade", value: "Salem / Erode / Alleppey Finger" },
    ],
  },
  cumin: {
    name: "Cumin",
    hindiName: "Jeera",
    image: "/images/spices/cumin.png",
    forms: "Powder & Seeds",
    description:
      "Indian Cumin seeds are prized globally for their warm, earthy, and slightly nutty flavor. Our cumin is sourced from the arid regions of Gujarat and Rajasthan, where the dry climate produces seeds with exceptional essential oil content and aromatic intensity.",
    origin: "Gujarat, Rajasthan",
    shelfLife: "12–24 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "10kg", "25kg bags"],
    uses: ["Cooking & tempering", "Spice blends & masalas", "Ayurvedic medicine", "Bakery & confectionery", "Beverage flavoring"],
    specifications: [
      { label: "Volatile Oil", value: "Min 2.5%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Purity", value: "Min 99%" },
      { label: "Grade", value: "Singapore / Europe Quality" },
    ],
  },
  ginger: {
    name: "Ginger",
    hindiName: "Sunth",
    image: "/images/spices/ginger.png",
    forms: "Powder & Whole",
    description:
      "Indian dried ginger is valued for its sharp, pungent flavor and medicinal properties. We supply premium quality ginger in both dried whole and powder forms, sourced from Kerala, Karnataka, and Northeast India.",
    origin: "Kerala, Karnataka, Meghalaya, Assam",
    shelfLife: "12–18 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Cooking & baking", "Tea & beverages", "Ayurvedic remedies", "Confectionery", "Pharmaceutical use"],
    specifications: [
      { label: "Volatile Oil", value: "Min 1.5%" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Fiber Content", value: "Max 8%" },
      { label: "Grade", value: "Cochin / Calicut" },
    ],
  },
  coriander: {
    name: "Coriander",
    hindiName: "Dhaniya",
    image: "/images/spices/coriander.png",
    forms: "Powder & Seeds",
    description:
      "Indian coriander seeds have a mild, sweet, and citrusy flavor. Our coriander is sourced from Rajasthan, Gujarat, and Madhya Pradesh. Available in whole seed and fine powder form, it is a staple in Indian and global cuisines.",
    origin: "Rajasthan, Gujarat, Madhya Pradesh",
    shelfLife: "12–18 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Curry powders & masalas", "Seasoning & garnishing", "Pickling", "Bakery products", "Essential oil extraction"],
    specifications: [
      { label: "Volatile Oil", value: "Min 0.3%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Purity", value: "Min 99%" },
      { label: "Grade", value: "Eagle / Badami" },
    ],
  },
  cinnamon: {
    name: "Cassia / Cinnamon",
    hindiName: "Dalchini",
    image: "/images/spices/cinnamon.png",
    forms: "Powder & Sticks",
    description:
      "Indian cinnamon (cassia) is known for its warm, sweet, and slightly spicy flavor. We export premium quality cassia bark in stick and powder form, sourced from Kerala and Northeast India. Perfect for both sweet and savory applications.",
    origin: "Kerala, Assam, Northeast India",
    shelfLife: "12–24 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Baking & desserts", "Hot beverages & chai", "Curry blends", "Pharmaceutical use", "Fragrance & perfumery"],
    specifications: [
      { label: "Volatile Oil", value: "Min 1.0%" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Bark Thickness", value: "1–3mm" },
      { label: "Grade", value: "A / B / C Grade Sticks" },
    ],
  },
  "black-pepper": {
    name: "Black Pepper",
    hindiName: "Mari / Kali Mirch",
    image: "/images/spices/black-pepper.png",
    forms: "Whole & Powder",
    description:
      "Known as the 'King of Spices', Indian black pepper is famous for its bold, pungent flavor and high piperine content. Sourced from the Malabar Coast of Kerala and Karnataka, our black pepper meets the highest international quality standards.",
    origin: "Kerala, Karnataka, Tamil Nadu",
    shelfLife: "12–24 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Cooking & seasoning", "Spice blends", "Pharmaceutical industry", "Essential oil extraction", "Food processing"],
    specifications: [
      { label: "Piperine Content", value: "Min 4%" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Bulk Density", value: "500–550 g/L" },
      { label: "Grade", value: "MG-1 / TGEB / FAQ" },
    ],
  },
  "white-pepper": {
    name: "White Pepper",
    hindiName: "Safed Mirch",
    image: "/images/spices/white-pepper.png",
    forms: "Whole & Powder",
    description:
      "White pepper is the mature berry with the outer skin removed, offering a milder and more refined heat compared to black pepper. Our white pepper is carefully processed to ensure clean appearance and consistent flavor.",
    origin: "Kerala, Karnataka",
    shelfLife: "12–24 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Light-colored sauces", "Soups & cream dishes", "European cuisine", "Spice blends", "Food processing"],
    specifications: [
      { label: "Piperine Content", value: "Min 3%" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Color", value: "Creamy white" },
      { label: "Grade", value: "FAQ / Premium" },
    ],
  },
  clove: {
    name: "Clove",
    hindiName: "Laung",
    image: "/images/spices/clove.png",
    forms: "Whole & Powder",
    description:
      "Indian cloves are intensely aromatic with a warm, sweet, and slightly bitter flavor. Sourced from Kerala and Tamil Nadu, our cloves are hand-picked at the perfect stage to ensure maximum essential oil content and rich aroma.",
    origin: "Kerala, Tamil Nadu, Karnataka",
    shelfLife: "12–24 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Cooking & baking", "Garam masala blends", "Chai & beverages", "Dental care products", "Essential oil extraction"],
    specifications: [
      { label: "Volatile Oil", value: "Min 15%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Eugenol Content", value: "Min 80%" },
      { label: "Grade", value: "Hand-picked Premium" },
    ],
  },
  cardamom: {
    name: "Cardamom",
    hindiName: "Eliachi",
    image: "/images/spices/cardamom.png",
    forms: "Powder & Seeds",
    description:
      "Known as the 'Queen of Spices', Indian green cardamom is prized for its sweet, floral aroma and complex flavor. Our cardamom is sourced from the Western Ghats of Kerala and Karnataka, the world's finest cardamom-growing region.",
    origin: "Kerala, Karnataka, Tamil Nadu",
    shelfLife: "12–18 months",
    packaging: ["50g", "100g", "250g", "500g", "1kg", "5kg bags"],
    uses: ["Chai & coffee", "Desserts & sweets", "Biryani & pulao", "Garam masala", "Pharmaceutical & perfumery"],
    specifications: [
      { label: "Volatile Oil", value: "Min 3%" },
      { label: "Moisture", value: "Max 12%" },
      { label: "Size", value: "7mm+ Bold" },
      { label: "Grade", value: "AGeb / AGB / AGS" },
    ],
  },
  nutmeg: {
    name: "Nutmeg",
    hindiName: "Jayfal",
    image: "/images/spices/nutmeg.png",
    forms: "Powder & Seeds",
    description:
      "Indian nutmeg has a warm, slightly sweet, and spicy flavor with a distinctive aroma. Sourced from Kerala, our nutmeg is sun-dried and graded to meet international export standards.",
    origin: "Kerala, Karnataka",
    shelfLife: "12–24 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Baking & confectionery", "Savory dishes", "Beverages", "Pharmaceutical products", "Essential oil extraction"],
    specifications: [
      { label: "Volatile Oil", value: "Min 6%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Weight", value: "7–9g per nut" },
      { label: "Grade", value: "Sound / Shriveled" },
    ],
  },
  "curry-powder": {
    name: "Curry Powder",
    hindiName: "Curry Masala",
    image: "/images/spices/curry-powder.png",
    forms: "Blended Powder",
    description:
      "Our premium curry powder is a carefully crafted blend of turmeric, coriander, cumin, fenugreek, and other spices. Each batch is blended to deliver consistent flavor, color, and aroma for global cuisines.",
    origin: "Gujarat, India (Blended)",
    shelfLife: "12 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Curry preparations", "Marinades & rubs", "Soups & stews", "Snack seasoning", "Ready-to-eat meals"],
    specifications: [
      { label: "Curcumin Content", value: "Min 1.5%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Mesh Size", value: "60–80 mesh" },
      { label: "Grade", value: "Madras / Hot / Mild" },
    ],
  },
  "garam-masala": {
    name: "Garam Masala",
    hindiName: "Garam Masala",
    image: "/images/spices/garam-masala.png",
    forms: "Blended Masala",
    description:
      "Garam Masala is India's signature spice blend, combining cardamom, cinnamon, cloves, black pepper, and other aromatic spices. Our blend is roasted and ground to perfection for maximum flavor and aroma.",
    origin: "Gujarat, India (Blended)",
    shelfLife: "12 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Indian curries & gravies", "Biryani & rice dishes", "Grilled meats", "Snacks & street food", "International fusion cuisine"],
    specifications: [
      { label: "Volatile Oil", value: "Min 2%" },
      { label: "Moisture", value: "Max 10%" },
      { label: "Mesh Size", value: "60–80 mesh" },
      { label: "Grade", value: "Premium Blend" },
    ],
  },
  ashwagandha: {
    name: "Ashwagandha",
    hindiName: "Ashwagandha",
    image: "/images/spices/ashwagandha.png",
    forms: "Root & Powder",
    description:
      "Ashwagandha (Withania somnifera) is one of India's most valued adaptogenic herbs. Our ashwagandha is sourced from Rajasthan and Madhya Pradesh, processed to retain maximum withanolide content for health and wellness applications.",
    origin: "Rajasthan, Madhya Pradesh",
    shelfLife: "18–24 months",
    packaging: ["100g", "250g", "500g", "1kg", "5kg", "25kg bags"],
    uses: ["Health supplements", "Ayurvedic formulations", "Herbal teas", "Sports nutrition", "Cosmetics & skincare"],
    specifications: [
      { label: "Withanolides", value: "Min 1.5%" },
      { label: "Moisture", value: "Max 8%" },
      { label: "Ash Content", value: "Max 7%" },
      { label: "Grade", value: "A Grade Root / Powder" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(spicesData).map((slug) => ({ slug }));
}

export default async function SpiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const spice = spicesData[slug];
  if (!spice) notFound();

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/products" className="hover:text-primary">Products</Link>
        <span>/</span>
        <Link href="/products/spices" className="hover:text-primary">Indian Spices</Link>
        <span>/</span>
        <span className="text-primary font-medium">{spice.name}</span>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-gray-100">
          <img
            src={spice.image}
            alt={spice.name}
            className="w-full h-[350px] object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-2">Indian Spice</p>
          <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary mb-1">
            {spice.name}
          </h1>
          <p className="text-gray-400 text-sm mb-4">({spice.hindiName}) — Available: {spice.forms}</p>
          <p className="text-gray-500 leading-relaxed text-sm">{spice.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-cream rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Origin</p>
              <p className="text-sm font-semibold text-primary">{spice.origin}</p>
            </div>
            <div className="bg-cream rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Shelf Life</p>
              <p className="text-sm font-semibold text-primary">{spice.shelfLife}</p>
            </div>
          </div>

          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(spice.name)}.%20Please%20share%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 inline-block"
          >
            Send Inquiry →
          </Link>
        </div>
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
          {spice.specifications.map((spec) => (
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
        {spice.uses.map((use) => (
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
        {spice.packaging.map((p) => (
          <span key={p} className="bg-cream text-primary text-xs font-semibold px-4 py-2 rounded-full">
            {p}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 bg-cream rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold font-[var(--font-heading)] text-primary">
            Interested in {spice.name}?
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
