import { NextResponse } from "next/server";
import { getAllSales, addSale } from "./controllers";

export async function GET() {
  try {
    const response = await getAllSales();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function POST(request) {
  const { sellerId, customerId, productId, totalPrice, productQuantity } =
    await request.json();
  try {
    const newSale = await addSale(
      sellerId,
      customerId,
      productId,
      totalPrice,
      productQuantity
    );
    return NextResponse.json(newSale, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
