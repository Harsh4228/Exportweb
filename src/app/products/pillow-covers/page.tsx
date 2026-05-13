import Link from "next/link";

export default function PillowCoversPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-2">
        PILLOW COVERS
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary mt-8 mb-4">
        PREMIUM 100% COTTON PILLOW COVERS
        <br />
        (PLAIN & STRIPE COLLECTION)
      </h2>

      <p className="text-gray-500 leading-relaxed">
        Elegant pillow covers in plain, striped, and printed designs. Made from 100% cotton
        with smooth finish and durable stitching for long-lasting comfort. Available in
        <strong className="text-primary"> Plain Satin</strong> and{" "}
        <strong className="text-primary">Satin Stripe</strong> variants. Each piece features
        envelope-style or zipper closure for a secure fit.
      </p>

      <div className="mt-8 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80"
          alt="Cotton Pillow Covers"
          className="w-full h-[400px] object-cover"
        />
      </div>

      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Available Sizes & Thread Count
      </h3>

      <table className="spec-table">
        <thead>
          <tr>
            <th>SIZE</th>
            <th>TC</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>17x27</td><td>210</td></tr>
          <tr><td>20x30</td><td>300</td></tr>
          <tr><td>20x36</td><td>300</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "100% Pure Cotton",
          "Smooth Finish",
          "Durable Stitching",
          "Plain & Stripe Designs",
          "Standard & Custom Sizes",
          "Envelope or Zipper Closure",
          "Color-fast Dyes",
          "Bulk orders welcome",
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
