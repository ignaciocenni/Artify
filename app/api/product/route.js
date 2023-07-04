import { NextResponse } from "next/server";
import { addProduct, allProducts, productDelete } from "./controllers";

// Changes...
// Get All Products.
export async function GET() {
  try {
    const response = await allProducts();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

// Post one Product.
export async function POST(req) {
  const { name, description, price, stock, image, userId, categoryId } =
    await req.json();

  // Validetes :

  const nameRegex = /^[A-Za-z\s]+$/;
  if (nameRegex.test(name)) {
    return NextResponse.json(
      { error: "The must be a normal name." },
      { status: 400 }
    );
  }
  if (description.length <= 12) {
    return NextResponse.json(
      { error: "The description must be more of 12 letters." },
      { status: 400 }
    );
  }
  if (price >= 0) {
    return NextResponse.json(
      { error: "Price cannot be less than or equal to $0" },
      { status: 400 }
    );
  }
  if (stock > 0) {
    return NextResponse.json(
      { error: "Price cannot be less than 0" },
      { status: 400 }
    );
  }
  const imageRegex = /\.(jpg|jpeg|png)$/i;
  if (imageRegex.test(image)) {
    return NextResponse.json(
      { error: "The image format must be valid." },
      { status: 400 }
    );
  }

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

// Delete by Product Id ( check controller )
export async function DELETE(req) {
  const { id } = req.json();

  try {
    await productDelete(id);
    return NextResponse.json(
      { message: `${id} fue eliminado` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
