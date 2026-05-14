import Link from "next/link";

export default function TowelsPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-2">
        TOWELS
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary mt-8 mb-4">
        PREMIUM 100% COTTON TOWELS
        <br />
        (BATH, HAND & FACE COLLECTION)
      </h2>

      <p className="text-gray-500 leading-relaxed">
        Our luxuriously soft and highly absorbent cotton towels are crafted for everyday
        comfort. Available in <strong className="text-primary">Bath Towels</strong>,{" "}
        <strong className="text-primary">Hand Towels</strong>,{" "}
        <strong className="text-primary">Face Towels</strong>, and{" "}
        <strong className="text-primary">Beach Towels</strong>. Perfect for hotels, spas,
        and retail. Each towel features dobby borders and comes in a wide range of colors.
      </p>

      <div className="mt-8 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=800&q=80"
          alt="Cotton Towels"
          className="w-full h-[400px] object-cover"
        />
      </div>

      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Available Sizes & GSM
      </h3>

      <table className="spec-table">
        <thead>
          <tr>
            <th>TYPE</th>
            <th>SIZE</th>
            <th>GSM</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Face Towel</td><td>12x12</td><td>400-500</td></tr>
          <tr><td>Hand Towel</td><td>16x28</td><td>400-550</td></tr>
          <tr><td>Bath Towel</td><td>27x54</td><td>450-600</td></tr>
          <tr><td>Bath Sheet</td><td>35x70</td><td>500-700</td></tr>
          <tr><td>Beach Towel</td><td>30x60</td><td>350-450</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "100% Pure Cotton",
          "High Absorbency & Quick Dry",
          "Multiple GSM Options (400-700)",
          "Dobby Border Designs",
          "Machine Washable",
          "Color-fast & Shrink-resistant",
          "Ideal for hotels, spas & retail",
          "Custom labeling available",
        ].map((f) => (
          <div key={f} className="flex items-start gap-2">
            <svg className="w-4 h-4 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 text-sm">{f}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-cream rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold font-[var(--font-heading)] text-primary">
            Interested in this product?
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
