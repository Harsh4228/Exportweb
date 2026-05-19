import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Message = { id: string; name: string; email: string; message: string; date: string; read: boolean };

// Safe file helpers — only used in local dev where the filesystem is writable
function tryReadData(): Message[] {
  try {
    const fs = require("fs");
    const path = require("path");
    const filePath = path.join(process.cwd(), "data", "messages.json");
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

function tryWriteData(messages: Message[]): void {
  try {
    const fs = require("fs");
    const path = require("path");
    const filePath = path.join(process.cwd(), "data", "messages.json");
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), "utf-8");
  } catch {
    // Silently skip on read-only filesystems (e.g. Vercel)
  }
}

export async function GET() {
  const { readData } = await import("@/lib/data");
  return NextResponse.json(readData<Message[]>("messages.json"));
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      email,
      message,
      date: new Date().toISOString(),
      read: false,
    };

    // 1. Try saving to local file (works in dev, silently skipped on Vercel)
    const messages = tryReadData();
    messages.unshift(newMessage);
    tryWriteData(messages);

    // 2. Send email notification via Nodemailer (works on Vercel)
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Meridian Contact Form" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `New Inquiry from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <div style="background:#1a3c5e;padding:24px 32px;">
              <h2 style="color:white;margin:0;font-size:20px;">New Contact Form Inquiry</h2>
              <p style="color:#94a3b8;margin:4px 0 0;font-size:13px;">Meridian Global Exports</p>
            </div>
            <div style="padding:32px;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:100px;">Name</td><td style="padding:8px 0;font-weight:600;color:#111827;">${name}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:8px 0;font-weight:600;color:#111827;"><a href="mailto:${email}" style="color:#1a3c5e;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;vertical-align:top;">Message</td><td style="padding:8px 0;color:#374151;white-space:pre-wrap;">${message}</td></tr>
              </table>
            </div>
            <div style="background:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}


export async function PUT(req: NextRequest) {
  const { getSession } = await import("@/lib/auth");
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  const messages = readData<Message[]>("messages.json");
  const idx = messages.findIndex((m) => m.id === id);
  if (idx !== -1) {
    messages[idx].read = true;
    writeData("messages.json", messages);
  }
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { getSession } = await import("@/lib/auth");
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  let messages = readData<Message[]>("messages.json");
  messages = messages.filter((m) => m.id !== id);
  writeData("messages.json", messages);
  return NextResponse.json({ success: true });
}
