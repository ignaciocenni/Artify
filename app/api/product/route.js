import { NextResponse } from "next/server";
import { data } from "../response";
import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export async function GET() {
  return NextResponse.json(data);
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
