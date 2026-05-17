"use client";
import { useState, useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

type Testimonial = { id: string; name: string; role: string; text: string; rating: number };

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  useEffect(() => {
    fetch("/api/testimonials").then((r) => r.json()).then(setTestimonials);
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 scroll-reveal">
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
