import Link from "next/link";

const beveragesList = [
  {
    name: "Coffee Beans",
    desc: "Premium Arabica & Robusta green coffee beans from India's finest estates in Coorg and Chikmagalur.",
    images: ["/images/beverages/coffee-1.jpeg", "/images/beverages/coffee-2.jpeg", "/images/beverages/coffee-3.jpeg"],
  },
  {
    name: "Packaged Drinking Water",
    desc: "BIS-certified packaged drinking water, produced under strict quality standards for global distribution.",
    images: [
      "/images/beverages/water-1.jpeg",
      "/images/beverages/water-2.jpeg",
      "/images/beverages/water-3.jpeg"
    ],
  },
];

export default function BeveragesPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-2">
        BEVERAGES
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary mt-8 mb-4">
        PREMIUM COFFEE BEANS & PACKAGED DRINKING WATER
      </h2>

      <p className="text-gray-500 leading-relaxed">
        We export premium quality <strong className="text-primary">coffee beans</strong> sourced
        from India&apos;s renowned coffee-growing regions and{" "}
        <strong className="text-primary">packaged drinking water</strong> that meets international
        purity standards. Our beverages division caters to global demand for high-quality
        Indian coffee and pure drinking water.
      </p>

      {/* Coffee Section */}
      <Link href="/products/beverages/coffee-beans" className="block mt-10 group">
        <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mb-4 group-hover:underline">
          Coffee Beans <span className="text-sm font-normal text-gray-400 group-hover:text-primary transition-colors">→ View Details</span>
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          India is the seventh largest coffee producer globally. Our green coffee beans are
          sourced from select estates in Karnataka, Kerala, and Tamil Nadu. We offer both
          Arabica (mild, aromatic) and Robusta (strong, full-bodied) varieties including
          specialty monsooned varieties.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {beveragesList[0].images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden h-64">
              <img src={img} alt={`Coffee beans ${i + 1}`} className="w-full h-full object-contain bg-gray-50" />
            </div>
          ))}
        </div>
      </Link>

      {/* Packaged Drinking Water Section */}
      <Link href="/products/beverages/mineral-water" className="block mt-10 group">
        <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mb-4 group-hover:underline">
          Packaged Drinking Water <span className="text-sm font-normal text-gray-400 group-hover:text-primary transition-colors">→ View Details</span>
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          We export BIS-certified packaged drinking water under strict quality control.
          Available in multiple bottle sizes and bulk packaging options for international
          distribution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {beveragesList[1].images.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden h-64">
              <img src={img} alt={`Packaged drinking water ${i + 1}`} className="w-full h-full object-contain bg-gray-50" />
            </div>
          ))}
        </div>
      </Link>

      {/* Specifications */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Available Products
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
          <tr><td>Arabica Coffee Beans</td><td>Plantation A, Plantation B</td><td>1kg, 5kg, 25kg, 60kg bags</td></tr>
          <tr><td>Robusta Coffee Beans</td><td>Cherry AB, Parchment AB</td><td>1kg, 5kg, 25kg, 60kg bags</td></tr>
          <tr><td>Monsooned Coffee</td><td>AA Grade (Coffee Board certified)</td><td>1kg, 5kg, 25kg, 60kg bags</td></tr>
          <tr><td>Packaged Drinking Water</td><td>BIS Certified (IS 14543)</td><td>250ml, 500ml, 1L, 2L, 5L, 20L</td></tr>
        </tbody>
      </table>

      {/* Key Features */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "Premium quality coffee from India's finest estates",
          "Arabica, Robusta & specialty varieties",
          "BIS & FSSAI certified packaged drinking water",
          "Custom packaging & private labeling",
          "Competitive bulk pricing",
          "Quality tested & graded beans",
          "Multiple packaging sizes available",
          "Reliable international shipping",
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
            Interested in our Beverages?
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
