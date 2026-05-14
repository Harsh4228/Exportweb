"use client";
import useScrollReveal from "@/hooks/useScrollReveal";
import Link from "next/link";

export default function AboutPreview() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-cream relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="scroll-reveal relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80"
                alt="Cotton textiles manufacturing"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-lg border border-gray-100 floating">
              <p className="text-3xl font-bold font-[var(--font-heading)] text-primary">10+</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

          {/* Content side */}
          <div className="scroll-reveal">
            <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary leading-tight">
              Prioritize Comfort & Quality in Every Home Textile
            </h2>
            <p className="text-gray-500 mt-5 leading-relaxed">
              Welcome to Lokasya Ventures! We are an emerging export house from
              India committed to supplying 100% cotton home textiles that bring
              elegance, comfort, and authenticity to homes worldwide.
            </p>
            <p className="text-gray-400 mt-3 leading-relaxed text-sm">
              Our products are designed to deliver natural softness, durability
              and style, while our export process ensures trust, transparency and
              timely delivery.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {["100% Pure Cotton", "Global Standards", "Competitive Pricing", "On-Time Delivery"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary mt-8 inline-flex">
              More About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
