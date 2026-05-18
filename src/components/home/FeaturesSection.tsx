"use client";
import useScrollReveal from "@/hooks/useScrollReveal";
import Link from "next/link";

const features = [
  "Premium Quality Products – Sourced from India’s finest growing regions.",
  "Reliable Exports – By sea, air, or courier, on time every time.",
  "Customization Options – Packaging, labeling, and grades as per your needs.",
  "Fair Pricing – Transparent FOB/CIF India rates with no hidden costs.",
  "FSSAI Certified & APEDA Registered – Full compliance with food safety standards.",
  "Global Standards – Products tested to match international requirements.",
];

export default function FeaturesSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
              Our Promise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary leading-tight">
              Everything You Need For Quality Indian Food Products
            </h2>
            <p className="text-lg text-gray-500 mt-4 font-[var(--font-heading)]">
              We&apos;re putting buyers first with:
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Request Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="scroll-reveal">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/spices/turmeric.jpeg"
                alt="Premium Indian Turmeric - Whole & Powder"
                className="w-full h-[500px] object-contain bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
