"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          {/* Text Side */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-heading)] text-primary leading-[1.1] tracking-tight">
              100% Cotton
              <br />
              Home Textiles
              <br />
              <span className="italic font-normal">Exported Worldwide</span>
            </h1>
            <p className="text-gray-500 text-lg mt-6 max-w-lg leading-relaxed">
              Premium bedsheets, towels, pillow covers, duvets and mattress
              protectors crafted from pure cotton. Quality, comfort and
              reliability you can trust.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                REQUEST A QUOTE
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products" className="btn-outline px-8 py-4 text-base">
                View Products
              </Link>
            </div>

            {/* Quick contact */}
            <div className="mt-10 flex items-center gap-6 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us</p>
                  <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className="text-primary font-semibold hover:underline">
                    {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Urgent Shipments
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80"
                alt="Premium cotton home textiles"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 floating">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">1000+ Happy Buyers</p>
                  <p className="text-xs text-gray-400">Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
