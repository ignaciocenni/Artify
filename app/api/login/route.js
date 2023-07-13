import { NextResponse } from "next/server";
import { checkDates } from "./controllers";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const response = await checkDates(email, password);
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
