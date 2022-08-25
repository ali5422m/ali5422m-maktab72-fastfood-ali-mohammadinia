import { NextResponse } from "next/server";

export default async function middleware(req, res) {
  
    const token = req.cookies.get('token');

  if(token && req.nextUrl.pathname == '/auth/login') {
      
      return NextResponse.redirect(new URL("/", req.url));
    }
    
    if (!token && req.nextUrl.pathname == "/cart") {
      return NextResponse.redirect(new URL("/auth/login", req.url));
  }


  // admin panel
  
   if (!token && !req.nextUrl.pathname == "/admin/auth/login") {
     return NextResponse.redirect(new URL("/admin/auth/login", req.url));
  }
  
   if (token && req.nextUrl.pathname == "/admin/auth/login") {
     return NextResponse.redirect(new URL("/admin", req.url));
   }

  return NextResponse.next();
}
