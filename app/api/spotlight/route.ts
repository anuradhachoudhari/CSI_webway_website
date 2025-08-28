import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const items = await prisma.studentSpotlight.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  if (req.headers.get("x-admin-secret") !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  if (!body.name || !body.story) return NextResponse.json({ error: "name and story required" }, { status: 400 });
  const item = await prisma.studentSpotlight.create({
    data: { name: body.name, story: body.story, imageUrl: body.imageUrl ?? null },
  });
  return NextResponse.json(item, { status: 201 });
}
