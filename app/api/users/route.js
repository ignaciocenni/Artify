import { NextResponse } from "next/server";
import prisma from "../db/client";

export async function GET() {
  const res = await prisma.User.findMany();
  return NextResponse.json(res);
}

export async function POST(request) {
  const { name, email, password, rol } = await request.json();
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
