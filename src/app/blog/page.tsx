import Link from "next/link";
import { readData } from "@/lib/data";

type Blog = { id: string; slug: string; title: string; excerpt: string; date: string; image: string; category: string; content: string[] };

export const dynamic = "force-dynamic";

export default function BlogPage() {
  const blogs = readData<Blog[]>("blogs.json");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-3">
          Our Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] text-primary mb-4">
          Insights & Knowledge
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Expert articles on cotton textiles, industry trends, and textile sourcing best practices.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-5xl mx-auto px-4 py-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-cream px-2.5 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-[11px] text-gray-300">{blog.date}</span>
                </div>
                <h3 className="text-base font-bold font-[var(--font-heading)] text-primary mb-2 group-hover:underline leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
