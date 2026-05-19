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
              We Export Premium Indian Spices & Food Products Worldwide
            </h1>
            <p className="text-gray-500 leading-relaxed mb-6">
              Meridian Global Exports is a trusted name in Indian spices, food grains,
              and beverages exports. Since 2022, with a commitment to quality and
              authenticity, we deliver premium turmeric, cumin, rice, coffee beans and
              more to clients across the globe.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch →
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/spices/cinnamon.jpeg"
              alt="Premium Indian Cinnamon - Sticks & Powder"
              className="w-full h-[400px] object-contain bg-gray-50"
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
                To be the most reliable and quality-driven exporter of Indian spices,
                food grains, and beverages, serving clients in every corner of the world
                with products that stand for authenticity and excellence.
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
                To deliver premium Indian food products that meet international quality
                and safety standards, build long-term partnerships with our clients,
                and contribute to the growth of India&apos;s agricultural export industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold font-[var(--font-heading)] text-primary text-center mb-3">
          Our Leadership Team
        </h2>
        <p className="text-center text-gray-400 text-sm mb-10 max-w-xl mx-auto">
          Meet the dedicated professionals behind Meridian Global Exports.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Sauvir Patel",
              role: "Chief Executive Officer",
              dept: "Sales & Marketing",
              image: "/images/team/sauvir-patel.png",
              imgPos: "object-top",
            },
            {
              name: "Hiren Parmar",
              role: "Chief Executive Officer",
              dept: "Foreign Trade & Documentation",
              image: "/images/team/hiren-parmar.png",
              imgPos: "object-top",
            },
            {
              name: "C H Parmar",
              role: "Import Export & Logistics Manager",
              dept: "",
              image: "/images/team/ch-parmar.jpeg",
              imgPos: "object-center",
            },
            {
              name: "Dimple Mistry",
              role: "Accounts & Operation Executive",
              dept: "",
              image: "/images/team/dimple-mistry.png",
              imgPos: "object-top",
            },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-44 h-44 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/20 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-cover ${member.imgPos}`}
                />
              </div>
              <h4 className="text-lg font-bold font-[var(--font-heading)] text-primary">{member.name}</h4>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              {member.dept && (
                <p className="text-gray-400 text-xs mt-0.5">({member.dept})</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold font-[var(--font-heading)] text-primary text-center mb-3">
            Why Choose Meridian Global Exports?
          </h2>
          <p className="text-center text-gray-400 text-sm mb-10 max-w-xl mx-auto">
            Experience since 2022 with a commitment to quality and global trade excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "4+", label: "Years Experience" },
              { num: "10+", label: "Countries Served" },
              { num: "45+", label: "Happy Clients" },
              { num: "150+", label: "Successful Shipments" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-300 transition-colors">
                <div className="text-3xl font-bold text-primary font-[var(--font-heading)]">{stat.num}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
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
                desc: "Every product undergoes rigorous quality checks before shipping. We maintain the highest food safety standards.",
              },
              {
                title: "Customer Focus",
                desc: "Your satisfaction drives everything we do. We offer customized packaging and grading solutions for every client.",
              },
              {
                title: "Authenticity",
                desc: "We source directly from the finest growing regions of India, ensuring genuine and pure products every time.",
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
          Let&apos;s discuss how we can serve your Indian spices and food product needs with quality and reliability.
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Us →
        </Link>
      </section>
    </div>
  );
}
