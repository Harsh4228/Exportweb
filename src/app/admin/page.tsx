"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Counts = { products: number; blogs: number; testimonials: number; certifications: number };

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Counts>({ products: 0, blogs: 0, testimonials: 0, certifications: 0 });

  useEffect(() => {
    Promise.all([
      fetch("/api/products").then((r) => r.json()),
      fetch("/api/blogs").then((r) => r.json()),
      fetch("/api/testimonials").then((r) => r.json()),
      fetch("/api/certifications").then((r) => r.json()),
    ]).then(([p, b, t, c]) => {
      setCounts({ products: p.length, blogs: b.length, testimonials: t.length, certifications: c.length });
    });
  }, []);

  const cards = [
    { label: "Products", count: counts.products, href: "/admin/products", color: "bg-blue-500" },
    { label: "Blog Posts", count: counts.blogs, href: "/admin/blogs", color: "bg-green-500" },
    { label: "Testimonials", count: counts.testimonials, href: "/admin/testimonials", color: "bg-yellow-500" },
    { label: "Certifications", count: counts.certifications, href: "/admin/certifications", color: "bg-purple-500" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold font-[var(--font-heading)] text-primary mb-2">
        Dashboard
      </h1>
      <p className="text-gray-400 text-sm mb-8">Manage your website content</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center text-white text-sm font-bold`}>
                {card.count}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-primary">{card.label}</h3>
            <p className="text-xs text-gray-400 mt-1">Click to manage →</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-bold font-[var(--font-heading)] text-primary mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link href="/admin/products" className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-sm text-gray-600">Add New Product</span>
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-sm text-gray-600">Write Blog Post</span>
          </Link>
          <Link href="/admin/testimonials" className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-sm text-gray-600">Add Testimonial</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
