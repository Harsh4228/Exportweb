import Link from "next/link";

export default function BathMatsPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-2">
        BATH MATS
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary mt-8 mb-4">
        PREMIUM 100% COTTON BATH MATS
      </h2>

      <p className="text-gray-500 leading-relaxed">
        Thick, plush cotton bath mats that combine functionality with style. Our bath mats
        are designed with high pile density for maximum comfort and absorbency. Anti-slip
        backing available for safety. Perfect for hotels, homes, and hospitality use.
      </p>

      <div className="mt-8 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=800&q=80"
          alt="Cotton Bath Mats"
          className="w-full h-[400px] object-cover"
        />
      </div>

      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Available Sizes & GSM
      </h3>

      <table className="spec-table">
        <thead>
          <tr>
            <th>SIZE</th>
            <th>GSM</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>20x30</td><td>800-1000</td></tr>
          <tr><td>21x34</td><td>900-1200</td></tr>
          <tr><td>24x36</td><td>1000-1400</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "100% Pure Cotton",
          "Anti-Slip Backing Options",
          "High Pile Density",
          "Machine Washable",
          "Multiple Sizes",
          "Solid Colors & Patterns",
          "Heavy GSM for luxury feel",
          "Hotel & hospitality grade",
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
          <h4 className="text-xl font-bold font-[var(--font-heading)] text-primary">Interested in this product?</h4>
          <p className="text-gray-400 text-sm mt-1">Get custom pricing and specifications for your requirements.</p>
        </div>
        <Link href="/contact" className="btn-primary whitespace-nowrap">Send Inquiry →</Link>
      </div>
    </div>
  );
}
