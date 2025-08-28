import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (Number.isNaN(id)) return NextResponse.json({ error: "invalid id" }, { status: 400 });
  const club = await prisma.club.findUnique({ where: { id } });
  if (!club) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(club);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  if (req.headers.get("x-admin-secret") !== process.env.ADMIN_SECRET)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const id = Number(params.id);
  const body = await req.json();
  const updated = await prisma.club.update({
    where: { id },
    data: { name: body.name ?? undefined, description: body.description ?? undefined },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  if (req.headers.get("x-admin-secret") !== process.env.ADMIN_SECRET)
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const id = Number(params.id);
  await prisma.club.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
