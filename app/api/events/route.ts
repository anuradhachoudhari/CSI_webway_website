import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  const events = await prisma.event.findMany({ orderBy: { date: "asc" } });
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  if (req.headers.get("x-admin-secret") !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  if (!body.title || !body.date) {
    return NextResponse.json({ error: "title and date required" }, { status: 400 });
  }
  try {
    const event = await prisma.event.create({
      data: {
        title: body.title,
        description: body.description ?? "",
        date: new Date(body.date),
        location: body.location ?? "",
      },
    });
    return NextResponse.json(event, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
