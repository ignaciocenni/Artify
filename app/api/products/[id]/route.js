import { NextResponse } from "next/server";
import { getProduct, deleteProduct, updateProduct } from "./controllers";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const response = await getProduct(id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { name, description, price, stock, image } = await request.json();

  try {
    const response = await updateProduct(id, name, description, price, stock, image);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await deleteProduct(id);
    return NextResponse.json({ message: `Product with id: ${id} deleted` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
