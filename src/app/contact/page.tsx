"use client";

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="relative rounded-2xl overflow-hidden h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=1200&q=80"
              alt="Cotton plant and textiles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 ml-8 max-w-md border border-gray-200">
                <p className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-2">
                  Contact Us
                </p>
                <h1 className="text-3xl font-bold font-[var(--font-heading)] text-primary leading-snug">
                  Contact Us Easily Online, by Phone or by Dropping In
                </h1>
                <div className="flex items-center gap-4 mt-5">
                  <a href="/contact#form" className="btn-primary text-sm py-2.5 px-5">
                    Send Inquiry
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold font-[var(--font-heading)] text-primary mb-2">
              Contact Information
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              Discover why businesses worldwide choose Lokasya Ventures for quality cotton products and reliable export services.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  text: process.env.NEXT_PUBLIC_ADDRESS || "",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  text: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "",
                  href: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: process.env.NEXT_PUBLIC_EMAIL2 || "",
                  href: `mailto:${process.env.NEXT_PUBLIC_EMAIL2}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: process.env.NEXT_PUBLIC_EMAIL || "",
                  href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-primary">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-gray-500 text-sm hover:text-primary transition-colors mt-1.5">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm mt-1.5">{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 h-[320px]">
            <iframe
              src={process.env.NEXT_PUBLIC_MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasya Ventures Location"
            />
          </div>
        </div>
      </section>

      {/* Ask a Question */}
      <section id="form" className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Logo side */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-3">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M9 3l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-[var(--font-heading)] text-primary uppercase tracking-wider">
                  Lokasya
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-[3px]">Ventures</p>
                <p className="text-[8px] text-gray-300 uppercase tracking-[2px] mt-1">Belong to the world</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold font-[var(--font-heading)] text-primary mb-2">
              Ask a Question
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              If you have any questions, you can contact us. Please fill out the form below.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                />
              </div>
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
