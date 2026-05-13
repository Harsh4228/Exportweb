import Link from "next/link";

export default function BedsheetsPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-2">
        BEDSHEETS
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary mt-8 mb-4">
        PREMIUM 100% COTTON BEDSHEETS
        <br />
        (PLAIN & STRIPE COLLECTION)
      </h2>

      <p className="text-gray-500 leading-relaxed">
        Our 100% cotton bedsheets are made to give you comfort and freshness every day.
        Soft, breathable and long-lasting, these bedsheets are a perfect choice for both
        homes and hotels. We offer two styles, <strong className="text-primary">Plain Satin</strong> for
        a classic look and <strong className="text-primary">Satin Stripe</strong> for a modern touch. Each
        bedsheet comes in a full range of solid colours to suit any bedroom style.
      </p>

      {/* Product Image */}
      <div className="mt-8 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
          alt="Cotton Bedsheets"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Specifications Table */}
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
          <tr><td>66*108</td><td>210</td></tr>
          <tr><td>90*110</td><td>300</td></tr>
          <tr><td>108*108</td><td>300</td></tr>
          <tr><td>108*120</td><td>300</td></tr>
        </tbody>
      </table>

      {/* Features */}
      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "100% Pure Cotton Fabric",
          "Available in Plain Satin & Satin Stripe",
          "Multiple Thread Count Options (210 TC, 300 TC)",
          "Full range of solid colours",
          "Soft, breathable and long-lasting",
          "Ideal for homes, hotels and hospitality",
          "Custom sizes available on request",
          "Color-fast dyes for lasting vibrancy",
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
