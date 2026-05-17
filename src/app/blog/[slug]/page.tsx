import Link from "next/link";
import { readData } from "@/lib/data";

type Blog = {
  id: string; slug: string; title: string; excerpt: string;
  date: string; image: string; category: string; content: string[];
};

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogs = readData<Blog[]>("blogs.json");
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="pt-20">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold font-[var(--font-heading)] text-primary mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-400 mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/blog" className="btn-primary">
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-gray-400 hover:text-primary transition-colors mb-4 inline-block"
          >
            &larr; Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-cream px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-[11px] text-gray-300">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-primary leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden mb-10">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-gray-500 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-cream rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold font-[var(--font-heading)] text-primary mb-2">
            Interested in Our Products?
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Explore our premium Indian spices, food grains & beverages or get in touch for custom requirements.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/products" className="btn-primary text-sm py-2.5 px-5">
              View Products
            </Link>
            <Link href="/contact" className="btn-outline text-sm py-2.5 px-5">
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
