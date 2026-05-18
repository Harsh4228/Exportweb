import { NextRequest, NextResponse } from "next/server";
import { readData, writeData } from "@/lib/data";

type Message = { id: string; name: string; email: string; message: string; date: string; read: boolean };

export async function GET() {
  return NextResponse.json(readData<Message[]>("messages.json"));
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const messages = readData<Message[]>("messages.json");
    const newMessage: Message = {
      id: Date.now().toString(),
      name,
      email,
      message,
      date: new Date().toISOString(),
      read: false,
    };
    messages.unshift(newMessage);
    writeData("messages.json", messages);

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
