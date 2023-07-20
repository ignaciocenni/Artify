import { NextResponse } from "next/server";
import { addProduct, getAllProducts } from "./controllers";

export async function GET() {
  try {
    const response = await getAllProducts();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function POST(req) {
  const { name, description, price, stock, image, categoryId,provinceId,userId  } = await req.json();

  try {
    const newProduct = await addProduct(name, description, price, stock, image, categoryId,provinceId);
    console.log(provinceId);
    return NextResponse.json(newProduct, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
