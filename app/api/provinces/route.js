import { NextResponse } from "next/server";
import { allProvinces, postAllProvinces } from "./controllers";

export async function GET() {
  try {
    const response = await allProvinces();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function POST() {
  try {
    const response = await postAllProvinces();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
