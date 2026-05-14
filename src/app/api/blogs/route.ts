import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { readData, writeData } from "@/lib/data";

type Blog = {
  id: string; slug: string; title: string; excerpt: string;
  date: string; image: string; category: string; content: string[];
};

export async function GET() {
  const blogs = readData<Blog[]>("blogs.json");
  return NextResponse.json(blogs);
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const blogs = readData<Blog[]>("blogs.json");
  const newBlog: Blog = {
    id: Date.now().toString(),
    slug: body.slug,
    title: body.title,
    excerpt: body.excerpt,
    date: body.date,
    image: body.image,
    category: body.category,
    content: body.content || [],
  };
  blogs.push(newBlog);
  writeData("blogs.json", blogs);
  return NextResponse.json(newBlog, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const blogs = readData<Blog[]>("blogs.json");
  const idx = blogs.findIndex((b) => b.id === body.id);
  if (idx === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });

  blogs[idx] = { ...blogs[idx], ...body };
  writeData("blogs.json", blogs);
  return NextResponse.json(blogs[idx]);
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  let blogs = readData<Blog[]>("blogs.json");
  blogs = blogs.filter((b) => b.id !== id);
  writeData("blogs.json", blogs);
  return NextResponse.json({ success: true });
}
