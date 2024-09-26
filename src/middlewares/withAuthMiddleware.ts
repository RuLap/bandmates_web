import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { CustomMiddleware } from "./chain";
import { getSession } from "@/services/authentication/cookie-session";

const protectedRoutes = ['/home'];
const publicRoutes = ['/', '/login', '/register'];

const sessionPassword = process.env.SESSION_PASSWORD as string;
if(!sessionPassword) throw new Error("SESSION_PASSWORD is not set");

export function withAuthMiddleware(middleware: CustomMiddleware): CustomMiddleware {
  return async (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
    debugger
    console.log("middleware");
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const user = await getSession();

    if(isProtectedRoute && !user) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    if(isPublicRoute && user && !request.nextUrl.pathname.startsWith('/home')) {
      //return NextResponse.redirect(new URL('/home', request.nextUrl));
    }  

    return middleware(request, event, response);
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
}