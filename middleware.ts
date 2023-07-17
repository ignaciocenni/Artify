import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export { default } from "next-auth/middleware";

const pathname = process.env.BASE_URL;

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!session) {
    return NextResponse.redirect(`${pathname}/login`);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/profile", "/settings", "/post-product"] };
