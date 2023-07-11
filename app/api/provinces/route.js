import { NextResponse } from "next/server";
import { allProvinces } from "./controllers";

export async function GET() {
  try {
    const response = await allProvinces();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
