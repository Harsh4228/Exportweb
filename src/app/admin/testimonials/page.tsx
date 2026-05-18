"use client";
import { useEffect, useState } from "react";

type Testimonial = { id: string; name: string; role: string; text: string; rating: number };

const empty: Testimonial = { id: "", name: "", role: "", text: "", rating: 5 };

export default function AdminTestimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [form, setForm] = useState<Testimonial>(empty);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const res = await fetch("/api/testimonials");
    setItems(await res.json());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const method = editing ? "PUT" : "POST";
    const res = await fetch("/api/testimonials", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) { alert("Failed to save. Please try again."); setLoading(false); return; }
    setForm(empty);
    setEditing(false);
    await load();
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this testimonial?")) return;
    await fetch("/api/testimonials", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  function startEdit(item: Testimonial) {
    setForm(item);
    setEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-[var(--font-heading)] text-primary mb-6">
        Manage Testimonials
      </h1>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-bold text-primary mb-4">
          {editing ? "Edit Testimonial" : "Add New Testimonial"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Name *</label>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              placeholder="James Thompson" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Role *</label>
            <input required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              placeholder="Buyer, USA" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Rating</label>
            <select value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary">
              {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} Stars</option>)}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Testimonial Text *</label>
            <textarea required value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })}
              rows={3}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary resize-none" />
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button type="submit" disabled={loading} className="btn-primary py-2.5 px-6 text-sm disabled:opacity-50">
              {loading ? "Saving..." : editing ? "Update" : "Add Testimonial"}
            </button>
            {editing && (
              <button type="button" onClick={() => { setForm(empty); setEditing(false); }}
                className="btn-outline py-2.5 px-6 text-sm">Cancel</button>
            )}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex gap-1 mb-2">
              {[...Array(item.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-3 italic">&ldquo;{item.text}&rdquo;</p>
            <p className="text-primary font-semibold text-sm">{item.name}</p>
            <p className="text-gray-400 text-xs">{item.role}</p>
            <div className="flex gap-3 mt-3 pt-3 border-t border-gray-50">
              <button onClick={() => startEdit(item)} className="text-blue-500 hover:text-blue-700 text-xs font-semibold">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && <p className="text-center text-gray-400 py-8">No testimonials yet</p>}
    </div>
  );
}
