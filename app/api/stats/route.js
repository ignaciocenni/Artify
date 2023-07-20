import { NextResponse } from "next/server";
import getSales from "./controllers";

export async function GET(request) {
  // const { id } = await request.json();

  try {
    const response = await getSales();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
