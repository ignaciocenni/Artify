import { NextResponse } from "next/server";
import { getAllReviews, addReview } from "./controllers";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const res = await getAllReviews(id);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}

export async function POST(request, { params }) {
  const { id } = params;
  const { comment, rating } = await request.json();
  try {
    const res = await addReview(comment, rating, id);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
