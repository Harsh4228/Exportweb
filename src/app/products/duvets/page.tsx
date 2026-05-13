import Link from "next/link";

export default function DuvetsPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-2">
        DUVETS
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] text-primary mt-8 mb-4">
        PREMIUM COTTON DUVET COVERS
        <br />
        & COMFORTERS
      </h2>

      <p className="text-gray-500 leading-relaxed">
        Premium cotton duvet covers that add elegance to any bedroom. Available in solid
        colors, prints, and jacquard designs. Hidden button or zipper closure for easy care.
        Our duvets come in various fill weights suitable for all seasons.
      </p>

      <div className="mt-8 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
          alt="Cotton Duvets"
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
          <tr><td>60x90 (Twin)</td><td>200-300</td></tr>
          <tr><td>90x90 (Queen)</td><td>200-300</td></tr>
          <tr><td>108x90 (King)</td><td>200-300</td></tr>
          <tr><td>108x108 (Super King)</td><td>200-300</td></tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mt-10 mb-4">
        Key Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          "Premium Cotton Shell",
          "Hidden Button/Zipper Closure",
          "Multiple Fill Weight Options",
          "Solid Colors & Jacquard Designs",
          "King & Queen Sizes",
          "All-season Options",
          "Machine Washable",
          "Custom specifications available",
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
