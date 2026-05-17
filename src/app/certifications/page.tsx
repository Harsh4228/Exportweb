import Link from "next/link";
import { readData } from "@/lib/data";

type Cert = { id: string; title: string; desc: string; pdf?: string };

const iconPaths: Record<number, string> = {
  0: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  1: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  2: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  3: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  4: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  5: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
};

export const dynamic = "force-dynamic";

export default function CertificationsPage() {
  const certifications = readData<Cert[]>("certifications.json");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
          Quality Assurance
        </p>
        <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-4">
          Our Certifications
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We maintain the highest industry standards through internationally recognized
          certifications. Our commitment to quality and sustainability is backed by
          rigorous third-party audits.
        </p>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-md transition-all"
            >
              {/* Preview Area */}
              <div className="w-full h-56 bg-cream border-b border-gray-100 overflow-hidden">
                {cert.pdf ? (
                  <iframe
                    src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full border-0 pointer-events-none"
                    title={cert.title}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[i % 6] || iconPaths[0]} />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold font-[var(--font-heading)] text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
                {cert.pdf && (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold font-[var(--font-heading)] text-primary mb-3">
            Need Certification Details?
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            We can provide detailed certification documents and compliance reports upon request.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Documents →
          </Link>
        </div>
      </section>
    </div>
  );
}
