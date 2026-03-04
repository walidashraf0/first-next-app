import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.headers.get("authtoken") as string;
  if (!authToken) {
    return NextResponse.json(
      { message: "No token provided, Access Denied!" },
      { status: 401 },
    );
  }
}

export const config = {
  matcher: "/about/:path*"
}