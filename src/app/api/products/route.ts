import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { readData, writeData } from "@/lib/data";

type Product = { id: string; name: string; tag: string; image: string; href: string };

export async function GET() {
  const products = readData<Product[]>("products.json");
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const products = readData<Product[]>("products.json");
  const newProduct: Product = {
    id: Date.now().toString(),
    name: body.name,
    tag: body.tag,
    image: body.image,
    href: body.href,
  };
  products.push(newProduct);
  writeData("products.json", products);
  return NextResponse.json(newProduct, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const products = readData<Product[]>("products.json");
  const idx = products.findIndex((p) => p.id === body.id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  products[idx] = { ...products[idx], ...body };
  writeData("products.json", products);
  return NextResponse.json(products[idx]);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  let products = readData<Product[]>("products.json");
  products = products.filter((p) => p.id !== id);
  writeData("products.json", products);
  return NextResponse.json({ success: true });
}
