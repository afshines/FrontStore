// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export const config = {
  matcher: ['/login/:path*', '/dashboard/:path*', '/checkmobile/:path*'],
}
export function middleware(request: NextRequest) {
  let res = NextResponse.next();
console.log('check permision')
  if (request.nextUrl.pathname.startsWith('/login')) {
    
    var x = request.cookies.get('token')?.value;
    if (x != null) {
      var z = request.cookies.get('user')?.value;
      if (z != null) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } else {
        return NextResponse.redirect(new URL('/checkmobile', request.url));
      }

    }
    // This logic is only applied to /about
  }
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    var x = request.cookies.get('user')?.value;
    
    if (x == null) {
      var z = request.cookies.get('token')?.value;
      console.log(z);
      if (z != null) {
        return NextResponse.redirect(new URL('/checkmobile', request.url));
      } else {
        return NextResponse.redirect(new URL('/login', request.url));
      }

    }
    // This logic is only applied to /about
  }
 
  if (request.nextUrl.pathname.startsWith('/checkmobile')) {
    var x = request.cookies.get('token')?.value;
    if (x == null) {
        return NextResponse.redirect(new URL('/login', request.url));


    }
    var z = request.cookies.get('user')?.value;
    if (z != null) {
      return NextResponse.redirect(new URL('/dashboard', request.url));


  }
    // This logic is only applied to /about
  }

  return res;
}
