import { NextResponse, NextRequest } from 'next/server'
import { TokenExpire } from '@Utilities/token';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
// This function can be marked `async` if using `await` inside
export async function middleware(request = NextRequest) {

if (!request.nextUrl.pathname.startsWith('/login')) {
        const token = request?.cookies?.get(ACCESS_TOKEN)?.value;
        if(token){
            const isTokenExpired = TokenExpire(token)
            if(!token || isTokenExpired) return NextResponse.redirect(new URL('/login', request.url))  
        } else return NextResponse.redirect(new URL('/login', request.url))  
    } 
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }