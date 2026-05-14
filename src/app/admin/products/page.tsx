"use client";
import { useEffect, useState } from "react";

type Product = { id: string; name: string; tag: string; image: string; href: string };

const empty: Product = { id: "", name: "", tag: "", image: "", href: "" };

export default function AdminProducts() {
  const [items, setItems] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>(empty);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const res = await fetch("/api/products");
    setItems(await res.json());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const method = editing ? "PUT" : "POST";
    await fetch("/api/products", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm(empty);
    setEditing(false);
    await load();
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this product?")) return;
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  function startEdit(item: Product) {
    setForm(item);
    setEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-[var(--font-heading)] text-primary mb-6">
        Manage Products
      </h1>

      {/* Form */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-bold text-primary mb-4">
          {editing ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Name *</label>
            <input
              required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              placeholder="e.g. Bedsheets"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Tag *</label>
            <input
              required value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              placeholder="e.g. Premium 100% Cotton"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Image URL *</label>
            <input
              required value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              placeholder="https://images.unsplash.com/..."
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Link *</label>
            <input
              required value={form.href} onChange={(e) => setForm({ ...form, href: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              placeholder="/products/bedsheets"
            />
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button type="submit" disabled={loading} className="btn-primary py-2.5 px-6 text-sm disabled:opacity-50">
              {loading ? "Saving..." : editing ? "Update Product" : "Add Product"}
            </button>
            {editing && (
              <button type="button" onClick={() => { setForm(empty); setEditing(false); }}
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
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Product</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Tag</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Link</th>
              <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                    <span className="font-medium text-primary">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{item.tag}</td>
                <td className="px-6 py-4 text-gray-400">{item.href}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => startEdit(item)} className="text-blue-500 hover:text-blue-700 mr-3 text-xs font-semibold">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {items.length === 0 && (
          <p className="text-center text-gray-400 py-8">No products yet</p>
        )}
      </div>
    </div>
  );
}
