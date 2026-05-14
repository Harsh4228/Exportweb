"use client";
import { useEffect, useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import Link from "next/link";

type Blog = { id: string; slug: string; title: string; excerpt: string; date: string; image: string; category: string };

export default function BlogSection() {
  const ref = useScrollReveal();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blogs").then((r) => r.json()).then((data: Blog[]) => setBlogs(data.slice(0, 3)));
  }, []);

  return (
    <section ref={ref} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <p className="text-sm uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
            Latest News
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary">
            Latest News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div
              key={blog.slug}
              className="scroll-reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Link href={`/blog/${blog.slug}`} className="bg-white rounded-2xl overflow-hidden card-hover group h-full flex flex-col block">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    {blog.date}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold font-[var(--font-heading)] text-primary group-hover:text-gray-600 transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed flex-1">
                    {blog.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                    Read More →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
