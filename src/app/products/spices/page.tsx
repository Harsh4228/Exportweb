import Link from "next/link";

const spicesList = [
  { name: "Turmeric (Haldi)", forms: "Powder & Finger", image: "/images/spices/turmeric.png", slug: "turmeric" },
  { name: "Cumin (Jeera)", forms: "Powder & Seeds", image: "/images/spices/cumin.png", slug: "cumin" },
  { name: "Ginger (Sunth)", forms: "Powder & Whole", image: "/images/spices/ginger.png", slug: "ginger" },
  { name: "Coriander (Dhaniya)", forms: "Powder & Seeds", image: "/images/spices/coriander.png", slug: "coriander" },
  { name: "Cassia/Cinnamon (Dalchini)", forms: "Powder & Sticks", image: "/images/spices/cinnamon.png", slug: "cinnamon" },
  { name: "Black Pepper (Mari)", forms: "Whole & Powder", image: "/images/spices/black-pepper.png", slug: "black-pepper" },
  { name: "White Pepper", forms: "Whole & Powder", image: "/images/spices/white-pepper.png", slug: "white-pepper" },
  { name: "Clove (Laung)", forms: "Whole & Powder", image: "/images/spices/clove.png", slug: "clove" },
  { name: "Cardamom (Eliachi)", forms: "Powder & Seeds", image: "/images/spices/cardamom.png", slug: "cardamom" },
  { name: "Nutmeg (Jayfal)", forms: "Powder & Seeds", image: "/images/spices/nutmeg.png", slug: "nutmeg" },
  { name: "Curry Powder", forms: "Blended Powder", image: "/images/spices/curry-powder.png", slug: "curry-powder" },
  { name: "Garam Masala", forms: "Blended Masala", image: "/images/spices/garam-masala.png", slug: "garam-masala" },
  { name: "Ashwagandha", forms: "Root & Powder", image: "/images/spices/ashwagandha.png", slug: "ashwagandha" },
];

export default function SpicesPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-2">
        INDIAN SPICES
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary mt-8 mb-4">
        PREMIUM INDIAN SPICES
        <br />
        (WHOLE & POWDER)
      </h2>

      <p className="text-gray-500 leading-relaxed">
        India is the world&apos;s largest producer and exporter of spices. We offer a comprehensive
        range of premium Indian spices in both <strong className="text-primary">whole</strong> and{" "}
        <strong className="text-primary">powder</strong> forms. Sourced from the finest growing
        regions of Gujarat, Rajasthan, Kerala, and Karnataka, our spices are known for their
        rich aroma, vibrant color, and authentic flavor.
      </p>

      {/* Hero Image */}
      <div className="mt-8 rounded-2xl overflow-hidden">
        <img
          src="/images/spices/all-spices.jpeg"
          alt="Premium Indian Spices Collection"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Spices Grid */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-6">
        Our Spices Range
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {spicesList.map((spice) => (
          <Link key={spice.name} href={`/products/spices/${spice.slug}`} className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg block">
            <div className="h-48 overflow-hidden">
              <img
                src={spice.image}
                alt={spice.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="font-bold font-[var(--font-heading)] text-primary">{spice.name}</h4>
              <p className="text-gray-400 text-sm mt-1">Available: {spice.forms}</p>
              <span className="text-primary text-xs font-semibold mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Key Features */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "Premium quality sourced from India's best regions",
          "Available in Whole & Powder forms",
          "FSSAI & APEDA certified",
          "Custom packaging & labeling",
          "Hygienically processed & packed",
          "Competitive FOB/CIF pricing",
          "Bulk & retail packaging options",
          "Consistent quality & supply",
        ].map((f) => (
          <div key={f} className="flex items-start gap-2">
            <svg className="w-4 h-4 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 text-sm">{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 bg-cream rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold font-[var(--font-heading)] text-primary">
            Interested in Indian Spices?
          </h4>
          <p className="text-gray-400 text-sm mt-1">
            Get custom pricing and specifications for your requirements.
          </p>
        </div>
        <Link href="/contact" className="btn-primary whitespace-nowrap">
          Send Inquiry →
        </Link>
      </div>
    </div>
  );
}
