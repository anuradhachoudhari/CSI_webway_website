import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const images = await prisma.gallery.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(images);
}

export async function POST(req: Request) {
  if (req.headers.get("x-admin-secret") !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  if (!body.imageUrl) return NextResponse.json({ error: "imageUrl required" }, { status: 400 });
  const img = await prisma.gallery.create({ data: { imageUrl: body.imageUrl, caption: body.caption ?? null } });
  return NextResponse.json(img, { status: 201 });
}
