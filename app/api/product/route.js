import { NextResponse } from "next/server";
import {
  addProduct,
  allProducts,
  getAllProducts,
  updateProduct,
} from "./controllers";
import { deleteProduct, productDelete } from "./[id]/controllers";

export async function PUT(request) {
  const { id, name, description, price, stock, image } = await request.json();

  try {
    const response = await updateProduct(
      id,
      name,
      description,
      price,
      stock,
      image
    );
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function GET() {
  try {
    const response = await getAllProducts();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function POST(req) {
  const { name, description, price, stock, image, userId, categoryId } =
    await req.json();

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    return NextResponse.json(
      { error: "The must be a normal name..." },
      { status: 400 }
    );
  }
  if (description.length <= 12) {
    return NextResponse.json(
      { error: "The description must be more of 12 letters." },
      { status: 400 }
    );
  }
  if (price <= 0) {
    return NextResponse.json(
      { error: "Price cannot be less than or equal to $0" },
      { status: 400 }
    );
  }
  if (stock < 0) {
    return NextResponse.json(
      { error: "Price cannot be less than 0" },
      { status: 400 }
    );
  }
  // const imageRegex = /\.(jpg|jpeg|png)$/i;
  // if (!imageRegex.test(image)) {                              Cambiar por un regex de url
  //   return NextResponse.json(
  //     { error: "The image format must be valid." },
  //     { status: 400 }
  //   );
  // }

  try {
    const newProduct = await addProduct(
      name,
      description,
      price,
      stock,
      image,
      userId,
      categoryId
    );
    return NextResponse.json(newProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function DELETE(request) {
  const { id } = await request.json();

  try {
    await deleteProduct(id);
    return NextResponse.json(
      { message: `Product with id: ${id} deleted` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
