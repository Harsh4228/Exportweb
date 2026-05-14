import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { readData, writeData } from "@/lib/data";

type Cert = { id: string; title: string; desc: string };

export async function GET() {
  return NextResponse.json(readData<Cert[]>("certifications.json"));
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const items = readData<Cert[]>("certifications.json");
  const newItem: Cert = { id: Date.now().toString(), title: body.title, desc: body.desc };
  items.push(newItem);
  writeData("certifications.json", items);
  return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const items = readData<Cert[]>("certifications.json");
  const idx = items.findIndex((c) => c.id === body.id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  items[idx] = { ...items[idx], ...body };
  writeData("certifications.json", items);
  return NextResponse.json(items[idx]);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  let items = readData<Cert[]>("certifications.json");
  items = items.filter((c) => c.id !== id);
  writeData("certifications.json", items);
  return NextResponse.json({ success: true });
}
