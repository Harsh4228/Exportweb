"use client";
import useCountUp from "@/hooks/useCountUp";

const stats = [
  { value: 1000, suffix: "+", label: "Happy Buyers" },
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Orders Delivered" },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary">
        {count}<span className="text-gray-400">{suffix}</span>
      </p>
      <p className="text-gray-400 mt-2 uppercase tracking-wider text-xs">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-cream border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary">
            Excellent Quality and On-Time Delivery.
          </h2>
          <p className="text-gray-400 text-lg mt-2">
            Trusted Export Partner!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 text-sm">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-600 font-medium">
              4.8 Rating based on 1000+ happy buyers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
