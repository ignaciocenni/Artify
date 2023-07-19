import { NextResponse } from "next/server";
import { getSeller } from "./controllers";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await getSeller(id);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
