import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary leading-tight mb-5">
              We Export Premium Cotton Textiles Worldwide
            </h1>
            <p className="text-gray-500 leading-relaxed mb-6">
              Lokasya Ventures is a trusted name in cotton home textile exports from India.
              With years of expertise and a commitment to quality, we deliver premium
              bedsheets, towels, pillow covers, bath mats, and duvets to clients across
              the globe.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch →
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
              alt="Cotton textiles workspace"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mb-3">Our Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                To be the most reliable and quality-driven cotton textile exporter from India,
                serving clients in every corner of the world with products that stand for
                excellence and sustainability.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mb-3">Our Mission</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                To deliver 100% cotton home textiles that meet international quality standards,
                build long-term partnerships with our clients, and contribute to the growth
                of India&apos;s textile export industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold font-[var(--font-heading)] text-primary text-center mb-3">
          Why Choose Lokasya Ventures?
        </h2>
        <p className="text-center text-gray-400 text-sm mb-10 max-w-xl mx-auto">
          We combine traditional craftsmanship with modern manufacturing to deliver exceptional products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "20+", label: "Countries Served" },
            { num: "500+", label: "Happy Clients" },
            { num: "1M+", label: "Products Exported" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="text-3xl font-bold text-primary font-[var(--font-heading)]">{stat.num}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold font-[var(--font-heading)] text-center mb-10">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "Every product undergoes rigorous quality checks before shipping. We maintain the highest standards.",
              },
              {
                title: "Customer Focus",
                desc: "Your satisfaction drives everything we do. We offer customized solutions for every client.",
              },
              {
                title: "Sustainability",
                desc: "We use eco-friendly processes and sustainable cotton sourcing to protect our planet.",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <h4 className="text-lg font-bold font-[var(--font-heading)] mb-2">{v.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold font-[var(--font-heading)] text-primary mb-3">
          Ready to Partner With Us?
        </h2>
        <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
          Let&apos;s discuss how we can serve your cotton textile needs with quality and reliability.
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Us →
        </Link>
      </section>
    </div>
  );
}
