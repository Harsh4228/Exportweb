"use client";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Capture values before clearing
    const submittedName = name;
    const submittedEmail = email;
    const submittedMessage = message;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

      // After 2 seconds, open Gmail compose in a new tab with all details pre-filled
      setTimeout(() => {
        const to = process.env.NEXT_PUBLIC_EMAIL || "";
        const subject = encodeURIComponent(`Inquiry from ${submittedName}`);
        const body = encodeURIComponent(
          `Name: ${submittedName}\nEmail: ${submittedEmail}\n\nMessage:\n${submittedMessage}`
        );
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
          "_blank"
        );
      }, 2000);
    } catch {
      setError("Failed to send message. Please try again or contact us via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="relative rounded-2xl overflow-hidden h-[300px]">
            <img
              src="/images/spices/all-spices.jpeg"
              alt="Premium Indian spices and food products"
              className="w-full h-full object-contain bg-gray-50"
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
                  <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.`} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-5">
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
              Discover why businesses worldwide choose Meridian Global Exports for quality Indian spices, food grains, and beverages.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  text: process.env.NEXT_PUBLIC_PHONE2_DISPLAY || "",
                  href: `tel:${process.env.NEXT_PUBLIC_PHONE2}`,
                },
                ...(
                  process.env.NEXT_PUBLIC_EMAIL === process.env.NEXT_PUBLIC_EMAIL2
                    ? [
                        {
                          icon: (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          ),
                          text: process.env.NEXT_PUBLIC_EMAIL || "",
                          href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
                        },
                      ]
                    : [
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
                      ]
                ),
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
              title="Meridian Global Exports Location"
            />
          </div>
        </div>
      </section>

      {/* Ask a Question */}
      <section id="form" className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Logo side */}
          <div className="flex justify-center">
            <div className="w-[28rem] h-[28rem] rounded-full bg-white flex items-center justify-center">
              <div className="w-[22rem] mx-auto">
                <img src="/images/logo.png" alt="Meridian Global Exports" className="w-full h-auto object-contain mix-blend-multiply" />
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

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                />
              </div>
              <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
                {loading ? "Sending..." : "Submit"}
              </button>
              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3 animate-pulse-once">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700">Message sent successfully!</p>
                    <p className="text-xs text-green-600 mt-0.5">
                      We'll get back to you soon. Opening Gmail to send a copy of your inquiry…
                    </p>
                  </div>
                </div>
              )}
              {error && (
                <p className="text-sm text-red-600 mt-2">{error}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
