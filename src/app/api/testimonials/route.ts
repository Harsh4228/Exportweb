import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { readData, writeData } from "@/lib/data";

type Testimonial = { id: string; name: string; role: string; text: string; rating: number };

export async function GET() {
  return NextResponse.json(readData<Testimonial[]>("testimonials.json"));
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const items = readData<Testimonial[]>("testimonials.json");
  const newItem: Testimonial = {
    id: Date.now().toString(),
    name: body.name,
    role: body.role,
    text: body.text,
    rating: body.rating || 5,
  };
  items.push(newItem);
  writeData("testimonials.json", items);
  return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const items = readData<Testimonial[]>("testimonials.json");
  const idx = items.findIndex((t) => t.id === body.id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  items[idx] = { ...items[idx], ...body };
  writeData("testimonials.json", items);
  return NextResponse.json(items[idx]);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  let items = readData<Testimonial[]>("testimonials.json");
  items = items.filter((t) => t.id !== id);
  writeData("testimonials.json", items);
  return NextResponse.json({ success: true });
}
