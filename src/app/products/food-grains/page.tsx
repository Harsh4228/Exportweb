import Link from "next/link";

const grainsList = [
  { name: "Rice", desc: "Basmati & Non-Basmati varieties", image: "/images/food-grains/rice.avif", slug: "rice" },
  { name: "Wheat", desc: "Premium quality wheat grains", image: "/images/food-grains/wheat.webp", slug: "wheat" },
  { name: "Oats", desc: "Whole oats & rolled oats", image: "/images/food-grains/oats.jpeg", slug: "oats" },
];

export default function FoodGrainsPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-2">
        FOOD GRAINS
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary mt-8 mb-4">
        PREMIUM INDIAN FOOD GRAINS
      </h2>

      <p className="text-gray-500 leading-relaxed">
        India is one of the world&apos;s leading producers and exporters of food grains.
        We export premium quality <strong className="text-primary">rice</strong> (both Basmati
        and Non-Basmati), <strong className="text-primary">wheat</strong>,{" "}
        <strong className="text-primary">oats</strong>, and{" "}
        <strong className="text-primary">ragi</strong> (finger millet). Our food grains are
        sourced from the finest agricultural regions, processed under strict hygiene
        standards, and packed for global distribution.
      </p>

      {/* Products Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {grainsList.map((grain) => (
          <Link key={grain.name} href={`/products/food-grains/${grain.slug}`} className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-all hover:shadow-lg block">
            <div className="h-56 overflow-hidden">
              <img
                src={grain.image}
                alt={grain.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h4 className="text-lg font-bold font-[var(--font-heading)] text-primary">{grain.name}</h4>
              <p className="text-gray-400 text-sm mt-1">{grain.desc}</p>
              <span className="text-primary text-xs font-semibold mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Specifications */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Available Varieties
      </h3>

      <table className="spec-table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>VARIETIES</th>
            <th>PACKAGING</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Basmati Rice</td><td>1121, Pusa, Traditional</td><td>1kg, 5kg, 10kg, 25kg, 50kg</td></tr>
          <tr><td>Non-Basmati Rice</td><td>Sona Masoori, IR-64, Parboiled</td><td>5kg, 10kg, 25kg, 50kg</td></tr>
          <tr><td>Wheat</td><td>Sharbati, Lokwan, MP Wheat</td><td>5kg, 10kg, 25kg, 50kg</td></tr>
          <tr><td>Oats</td><td>Whole Oats, Rolled Oats</td><td>500g, 1kg, 5kg</td></tr>
          <tr><td>Ragi (Finger Millet)</td><td>Whole & Flour</td><td>500g, 1kg, 5kg</td></tr>
        </tbody>
      </table>

      {/* Key Features */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "Premium quality from India's top agricultural regions",
          "FSSAI & APEDA certified",
          "Multiple packaging options",
          "Custom labeling & branding available",
          "Competitive bulk pricing",
          "Sorted, cleaned & graded",
          "Export quality meeting international standards",
          "Consistent supply throughout the year",
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
            Interested in Food Grains?
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
