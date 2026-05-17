"use client";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-white leading-tight">
          The finest Indian spices, food grains & beverages — delivered to your doorstep worldwide.
        </h2>
        <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
          Partner with Meridian Global Exports and experience premium quality
          Indian products with transparent pricing and on-time delivery worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2">
            Get Started Today →
          </Link>
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
