// ruta dinamica de productos:
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { id } = req.params;

  return NextResponse.json({
    id: id,
  });
}
