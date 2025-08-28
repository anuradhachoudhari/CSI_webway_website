import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const clubs = await prisma.club.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(clubs);
}

export async function POST(req: Request) {
  if (req.headers.get("x-admin-secret") !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  if (!body.name) return NextResponse.json({ error: "name required" }, { status: 400 });
  const club = await prisma.club.create({
    data: { name: body.name, description: body.description ?? "" },
  });
  return NextResponse.json(club, { status: 201 });
}
