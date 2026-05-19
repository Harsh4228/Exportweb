"use client";
import { useEffect, useState } from "react";
import useCountUp from "@/hooks/useCountUp";

type Stat = { id: string; value: number; suffix: string; label: string };

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
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    fetch("/api/stats").then((r) => r.json()).then(setStats);
  }, []);
  return (
    <section className="py-14 bg-cream border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
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

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-6 py-3 text-sm">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-600 font-medium">
              Trusted by 45+ B2B clients worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
