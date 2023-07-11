import { NextResponse } from "next/server";
import { addCategory, getAllCategories } from "./controllers";

export async function POST(req) {
  const { name, description } = await req.json();

  try {
    const newCategory = await addCategory(name, description);
    return NextResponse.json(newCategory, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function GET() {
  try {
    const response = await getAllCategories();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
