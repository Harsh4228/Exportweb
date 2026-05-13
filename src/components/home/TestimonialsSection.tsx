"use client";
import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "James Thompson",
    role: "Buyer, USA",
    text: "Exceptional quality cotton textiles! The bedsheets are incredibly soft and durable. Lokasya Ventures has been our go-to supplier for over 2 years now.",
    rating: 5,
  },
  {
    name: "Maria Schmidt",
    role: "Wholesaler, Germany",
    text: "Reliable exports and competitive pricing. Their team is responsive and ensures every order meets our European quality standards.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "Retailer, UAE",
    text: "Outstanding service from start to finish. The customization options allowed us to create exactly what our customers wanted. Highly recommended!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary">
            What Our Buyers Say
          </h2>
        </div>

        <div className="scroll-reveal">
          <div className="bg-cream rounded-2xl p-8 md:p-12 text-center relative">
            <div className="text-6xl text-gray-200 font-serif leading-none mb-4">&ldquo;</div>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed italic max-w-2xl mx-auto">
              {testimonials[active].text}
            </p>
            <div className="mt-8">
              <p className="font-bold text-primary font-[var(--font-heading)] text-lg">
                {testimonials[active].name}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-7" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
