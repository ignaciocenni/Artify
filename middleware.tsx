import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export { default } from "next-auth/middleware";

// Esto define las rutas que intercepta el Middleware.
export const config = { matcher: ["/profile", "/settings", "/post-product"] };

const host = process.env.BASE_URL;

export function middleware(request: NextRequest) {
  return NextResponse.redirect(`${host}/login`);
}
