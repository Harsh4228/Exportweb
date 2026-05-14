"use client";
import { useEffect, useState } from "react";

type Stat = { id: string; value: number; suffix: string; label: string };

export default function AdminStats() {
  const [items, setItems] = useState<Stat[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<Stat>({ id: "", value: 0, suffix: "", label: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const res = await fetch("/api/stats");
    setItems(await res.json());
  }

  function startEdit(item: Stat) {
    setForm(item);
    setEditId(item.id);
  }

  async function handleSave() {
    setLoading(true);
    await fetch("/api/stats", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setEditId(null);
    await load();
    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold font-[var(--font-heading)] text-primary mb-2">
        Manage Stats
      </h1>
      <p className="text-gray-400 text-sm mb-6">Edit the counter values displayed on the homepage</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-100 p-6">
            {editId === item.id ? (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Value</label>
                  <input type="number" value={form.value} onChange={(e) => setForm({ ...form, value: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Suffix</label>
                  <input value={form.suffix} onChange={(e) => setForm({ ...form, suffix: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                    placeholder="+" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Label</label>
                  <input value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                </div>
                <div className="flex gap-2">
                  <button onClick={handleSave} disabled={loading} className="btn-primary py-2 px-4 text-xs disabled:opacity-50">
                    {loading ? "Saving..." : "Save"}
                  </button>
                  <button onClick={() => setEditId(null)} className="btn-outline py-2 px-4 text-xs">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <div className="text-3xl font-bold text-primary font-[var(--font-heading)]">
                  {item.value}{item.suffix}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                <button onClick={() => startEdit(item)} className="text-blue-500 hover:text-blue-700 text-xs font-semibold mt-3">
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
