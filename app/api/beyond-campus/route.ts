import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const list = await prisma.beyondCampus.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(list);
}

export async function POST(req: Request) {
  if (req.headers.get("x-admin-secret") !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  if (!body.title || !body.link) return NextResponse.json({ error: "title and link required" }, { status: 400 });
  const item = await prisma.beyondCampus.create({ data: { title: body.title, link: body.link } });
  return NextResponse.json(item, { status: 201 });
}
