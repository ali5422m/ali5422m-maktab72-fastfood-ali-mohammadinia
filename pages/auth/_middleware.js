// import { NextResponse } from "next/server";


// export default async function middleware(req,res){

//     if (req.cookies.token) {
//         return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}`);
        
//     }
//         return NextResponse.next();
// }




// import {  NextResponse } from "next/server";

// // If the incoming request has the "beta" cookie
// // then we'll rewrite the request to /beta
// export default async function middleware(req) {
//     console.log("middleware is ok")
//   const isInBeta = JSON.parse(req.cookies.get("token") || "false");
//   req.nextUrl.pathname = isInBeta
//     ? `${process.env.NEXT_PUBLIC_BACKEND_API_UR/profile}`
//     : `${process.env.NEXT_PUBLIC_APP_URL}`;
//   return NextResponse.rewrite(req.nextUrl);
// }

// // Supports both a single value or an array of matches
// export const config = {
//   matcher: "/",
// };



