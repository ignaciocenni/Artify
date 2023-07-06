import { NextResponse } from "next/server";
import { deleteReview, updateReview } from "./controllers";

export async function DELETE(request, { params }) {
  const { reviewId } = params;
  try {
    const res = await deleteReview(reviewId);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  const { comment, rating } = await request.json();
  const { reviewId } = params;
  try {
    const res = await updateReview(reviewId, comment, rating);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
