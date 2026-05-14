"use client";
import { useEffect, useState } from "react";

type Cert = { id: string; title: string; desc: string };

const empty: Cert = { id: "", title: "", desc: "" };

export default function AdminCertifications() {
  const [items, setItems] = useState<Cert[]>([]);
  const [form, setForm] = useState<Cert>(empty);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const res = await fetch("/api/certifications");
    setItems(await res.json());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const method = editing ? "PUT" : "POST";
    await fetch("/api/certifications", {
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
    if (!confirm("Delete this certification?")) return;
    await fetch("/api/certifications", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  function startEdit(item: Cert) {
    setForm(item);
    setEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-[var(--font-heading)] text-primary mb-6">
        Manage Certifications
      </h1>

      <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-bold text-primary mb-4">
          {editing ? "Edit Certification" : "Add New Certification"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Title *</label>
            <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
              placeholder="e.g. OEKO-TEX Standard 100" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Description *</label>
            <textarea required value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })}
              rows={3}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary resize-none" />
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={loading} className="btn-primary py-2.5 px-6 text-sm disabled:opacity-50">
              {loading ? "Saving..." : editing ? "Update" : "Add Certification"}
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
            <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-primary mb-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            <div className="flex gap-3 mt-3 pt-3 border-t border-gray-50">
              <button onClick={() => startEdit(item)} className="text-blue-500 hover:text-blue-700 text-xs font-semibold">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">Delete</button>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && <p className="text-center text-gray-400 py-8">No certifications yet</p>}
    </div>
  );
}
