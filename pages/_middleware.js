// export default function middleware(request, event) {
//   const token = request.cookies.token;
//   let authenticated = false;
//   if (pathname === "/dashboard") {
//     if (token) {
//       try {
//         jwt.verify(token, "HvpkPMarcwoZFAo");
//         authenticated = true;
//       } catch {
//         return NextResponse.redirect("/signin");
//       }
//     } else {
//       return NextResponse.redirect("/signin");
//     }
//   }
// }


import sslRedirect from "next-ssl-redirect-middleware";

export default sslRedirect({});