"use client";
import { useEffect, useState } from "react";

type Blog = {
  id: string; slug: string; title: string; excerpt: string;
  date: string; image: string; category: string; content: string[];
};

const empty: Blog = { id: "", slug: "", title: "", excerpt: "", date: "", image: "", category: "", content: [] };

export default function AdminBlogs() {
  const [items, setItems] = useState<Blog[]>([]);
  const [form, setForm] = useState<Blog>(empty);
  const [contentText, setContentText] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const res = await fetch("/api/blogs");
    setItems(await res.json());
  }

  function autoSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const method = editing ? "PUT" : "POST";
    const payload = {
      ...form,
      slug: form.slug || autoSlug(form.title),
      content: contentText.split("\n\n").filter(Boolean),
    };
    const res = await fetch("/api/blogs", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) { alert("Failed to save. Please try again."); setLoading(false); return; }
    setForm(empty);
    setContentText("");
    setEditing(false);
    await load();
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this blog post?")) return;
    await fetch("/api/blogs", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  function startEdit(item: Blog) {
    setForm(item);
    setContentText(item.content.join("\n\n"));
    setEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-[var(--font-heading)] text-primary mb-6">
        Manage Blog Posts
      </h1>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-bold text-primary mb-4">
          {editing ? "Edit Blog Post" : "Add New Blog Post"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Title *</label>
              <input
                required value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value, slug: editing ? form.slug : autoSlug(e.target.value) })}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Slug</label>
              <input
                value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Category *</label>
              <input
                required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                placeholder="e.g. Spices"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Date *</label>
              <input
                required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                placeholder="January 15, 2025"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Image URL *</label>
              <input
                required value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Excerpt *</label>
              <input
                required value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Content * <span className="text-gray-300 font-normal normal-case">(separate paragraphs with blank lines)</span>
            </label>
            <textarea
              required value={contentText} onChange={(e) => setContentText(e.target.value)}
              rows={10}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary resize-y"
            />
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={loading} className="btn-primary py-2.5 px-6 text-sm disabled:opacity-50">
              {loading ? "Saving..." : editing ? "Update Post" : "Publish Post"}
            </button>
            {editing && (
              <button type="button" onClick={() => { setForm(empty); setContentText(""); setEditing(false); }}
                className="btn-outline py-2.5 px-6 text-sm">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Title</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Category</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <span className="font-medium text-primary block">{item.title}</span>
                      <span className="text-gray-400 text-xs">/{item.slug}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{item.category}</span>
                </td>
                <td className="px-6 py-4 text-gray-500">{item.date}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => startEdit(item)} className="text-blue-500 hover:text-blue-700 mr-3 text-xs font-semibold">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 && <p className="text-center text-gray-400 py-8">No blog posts yet</p>}
      </div>
    </div>
  );
}
