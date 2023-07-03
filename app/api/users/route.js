import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export async function GET() {
  const res = await prisma.User.findMany();
  return NextResponse.json(res);
}

export async function POST(req) {
  const { name, email, password, rol } = req.json();
  const newUser = await prisma.User.create({
    data: {
      name,
      email,
      password,
      rol,
    },
  });
  return NextResponse.json(newUser);
}
