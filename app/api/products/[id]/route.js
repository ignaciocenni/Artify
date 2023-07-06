import { NextResponse } from "next/server";
import { getProduct, deleteProduct } from "./controllers";

export async function GET(request, { params }) {
  const id = +params.id;

  try {
    const response = await getProduct(id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function DELETE(request, { params }) {
  const id = +params.id;

  try {
    const response = await deleteProduct(id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
