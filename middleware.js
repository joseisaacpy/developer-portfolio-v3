// Importa o NextResponse
import { NextResponse } from "next/server";

export function middleware(req) {
  // Pega o cookie "auth"
  const auth = req.cookies.get("auth")?.value;
  // Pega o caminho
  const path = req.nextUrl.pathname;

  // Permite acesso a rota /dashboard/login
  if (path === "/dashboard/login") {
    return NextResponse.next();
  }

  //   Se não tiver autenticado e a rota começar com /dashboard
  if (!auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    // Redireciona para /dashboard/login
    return NextResponse.redirect(new URL("/dashboard/login", req.url));
  }
  //   Passa o middleware
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // aplica apenas à rota /dashboard e subrotas
};
