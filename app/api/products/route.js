import { NextResponse } from "next/server";
import { addProduct, allProducts, getAllProducts, updateProduct } from "./controllers";
import { deleteProduct, productDelete } from "./[id]/controllers";

export async function PUT(request) {
  const { id, name, description, price, stock, image } = await request.json();

  try {
    const response = await updateProduct(id, name, description, price, stock, image);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  try {
    const response = await getAllProducts(name);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function POST(req) {
  const { name, description, price, stock, image, userId, categoryId } = await req.json();

  try {
    const newProduct = await addProduct(name, description, price, stock, image, userId, categoryId);
    return NextResponse.json(newProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();

  try {
    await deleteProduct(id);
    return NextResponse.json({ message: `Product with id: ${id} deleted` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
