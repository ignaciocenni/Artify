import { NextResponse } from "next/server";
import prisma from "../db/client";

export async function GET() {
  const res = await prisma.Product.findMany();
  return NextResponse.json(res);
}
export async function POST(request) {
  const { name, description, price, stock, image, userId, categoryId } = await request.json();
  const newProduct = await prisma.Product.create({
    data: {
      name,
      description,
      price,
      stock,
      image,
      user: {
        connect: {
          id: userId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  });

  return NextResponse.json(newProduct);
}
