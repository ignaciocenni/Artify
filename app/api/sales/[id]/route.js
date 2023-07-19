import { NextResponse } from "next/server";
import { getSale } from "./controllers";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await getSale(id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// POST ( productQuantity, totalPrice, productId, sellerId, customerId )
// GET QUE TRAIGA TODAS
