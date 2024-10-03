import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { CustomMiddleware } from "./chain";
import { getSession } from "@/services/authentication/cookie-session";

const protectedRoutes = ['/home', '/users'];
const publicRoutes = ['/', '/auth/login', '/auth/register'];

const sessionPassword = process.env.SESSION_PASSWORD as string;
if(!sessionPassword) throw new Error("SESSION_PASSWORD is not set");

export function withAuthMiddleware(middleware: CustomMiddleware): CustomMiddleware {
  return async (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const user = await getSession();

    if(isProtectedRoute && !user) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    if(isPublicRoute && user) {
      return NextResponse.redirect(new URL('/home', request.nextUrl));
    }  

    return NextResponse.next();
  }
}