"use client";
import { useEffect, useState } from "react";

type Message = { id: string; name: string; email: string; message: string; date: string; read: boolean };

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);

  useEffect(() => { load(); }, []);

  async function load() {
    const res = await fetch("/api/contact");
    setMessages(await res.json());
  }

  async function markRead(id: string) {
    await fetch("/api/contact", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this message?")) return;
    await fetch("/api/contact", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (selected?.id === id) setSelected(null);
    await load();
  }

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold font-[var(--font-heading)] text-primary">
          Messages
        </h1>
        {unreadCount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {unreadCount} new
          </span>
        )}
      </div>

      {selected ? (
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <button onClick={() => setSelected(null)} className="text-sm text-gray-400 hover:text-primary mb-4 flex items-center gap-1">
            ← Back to all messages
          </button>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-primary">{selected.name}</h2>
              <a href={`mailto:${selected.email}`} className="text-sm text-blue-500 hover:underline">{selected.email}</a>
              <p className="text-xs text-gray-400 mt-1">{new Date(selected.date).toLocaleString()}</p>
            </div>
            <button onClick={() => handleDelete(selected.id)} className="text-red-500 hover:text-red-700 text-xs font-semibold">Delete</button>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 mt-4">
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
          </div>
          <a href={`mailto:${selected.email}?subject=Re: Your Inquiry to Meridian Global Exports`} className="btn-primary mt-6 inline-flex text-sm py-2.5 px-5">
            Reply via Email
          </a>
        </div>
      ) : (
        <>
          {messages.length === 0 ? (
            <p className="text-center text-gray-400 py-12">No messages yet</p>
          ) : (
            <div className="space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`bg-white rounded-xl border p-4 cursor-pointer hover:border-gray-300 hover:shadow-sm transition-all ${!msg.read ? "border-primary/30 bg-primary/[0.02]" : "border-gray-100"}`}
                  onClick={() => { setSelected(msg); if (!msg.read) markRead(msg.id); }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {!msg.read && <span className="w-2 h-2 rounded-full bg-primary shrink-0" />}
                      <div>
                        <p className={`text-sm ${!msg.read ? "font-bold text-primary" : "font-medium text-gray-700"}`}>{msg.name}</p>
                        <p className="text-xs text-gray-400">{msg.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400">{new Date(msg.date).toLocaleDateString()}</span>
                      <button onClick={(e) => { e.stopPropagation(); handleDelete(msg.id); }} className="text-red-400 hover:text-red-600 text-xs">✕</button>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-1 pl-5">{msg.message}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
