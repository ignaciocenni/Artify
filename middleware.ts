import { getToken } from "next-auth/jwt";
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

const pathname = process.env.BASE_URL;
export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // if (request.nextUrl.pathname.startsWith("/insertar aqui el path del dashboard") && request.nextauth.token.role !== "ADMIN") {
    //   return NextResponse.redirect(`${pathname}`);
    // } else return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/profile", "/settings", "/post-product"] };
