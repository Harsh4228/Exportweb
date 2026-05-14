import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { readData, writeData } from "@/lib/data";

type Stat = { id: string; value: number; suffix: string; label: string };

export async function GET() {
  return NextResponse.json(readData<Stat[]>("stats.json"));
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const items = readData<Stat[]>("stats.json");
  const idx = items.findIndex((s) => s.id === body.id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  items[idx] = { ...items[idx], ...body };
  writeData("stats.json", items);
  return NextResponse.json(items[idx]);
}
