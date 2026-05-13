import Link from "next/link";

const blogs = [
  {
    slug: "benefits-of-egyptian-cotton",
    title: "Benefits of Egyptian Cotton for Home Textiles",
    excerpt: "Discover why Egyptian cotton is considered the gold standard for luxury bedding and towels worldwide.",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
    category: "Cotton Guide",
  },
  {
    slug: "how-to-choose-bedsheets",
    title: "How to Choose the Perfect Bedsheets: A Complete Guide",
    excerpt: "Thread count, weave type, and fabric quality — learn what really matters when selecting bedsheets.",
    date: "January 8, 2025",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
    category: "Buying Guide",
  },
  {
    slug: "sustainable-textile-manufacturing",
    title: "Sustainable Practices in Textile Manufacturing",
    excerpt: "How modern textile manufacturers are reducing environmental impact while maintaining quality standards.",
    date: "December 28, 2024",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    category: "Sustainability",
  },
  {
    slug: "towel-gsm-guide",
    title: "Understanding Towel GSM: What It Means for Quality",
    excerpt: "A comprehensive guide to GSM ratings and how they affect towel absorbency, durability, and feel.",
    date: "December 20, 2024",
    image: "https://images.unsplash.com/photo-1616627988170-4a5db5845357?w=600&q=80",
    category: "Cotton Guide",
  },
  {
    slug: "hotel-textile-procurement",
    title: "Hotel Textile Procurement: Best Practices for Hospitality",
    excerpt: "Key considerations when sourcing cotton textiles for hotels, including quality standards and bulk ordering.",
    date: "December 12, 2024",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    category: "Industry",
  },
  {
    slug: "cotton-vs-synthetic",
    title: "Cotton vs Synthetic: Why Natural Fibers Win",
    excerpt: "Comparing cotton with synthetic alternatives across comfort, durability, sustainability, and value.",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80",
    category: "Cotton Guide",
  },
];

export default function BlogPage() {
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
