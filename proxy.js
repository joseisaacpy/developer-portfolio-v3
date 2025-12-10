// Importa o NextResponse
import { NextResponse } from "next/server";

// Caminho para redirecionar quando não estiver autenticado
const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login";

// Rotas públicas
const publicRoutes = [
  {
    path: "/login",
    whenAuthenticated: "redirect",
  },
  {
    path: "/",
    whenAuthenticated: "next",
  },
];

export function proxy(req) {
  // Pega o cookie "auth"
  const auth = req.cookies.get("auth")?.value;

  const publicRoute = publicRoutes.find(
    (route) => route.path === req.nextUrl.pathname
  );

  // se não tiver token e não for uma rota publica
  if (!auth && !publicRoute) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  // se tem token e for a rota que redireciona
  if (auth && publicRoute.whenAuthenticated === "redirect") {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return NextResponse.redirect(redirectUrl);
  }

  // se tiver token e for uma rota publica que não redireciona
  if (auth && publicRoute.whenAuthenticated === "next") {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.webp$).*)",
  ],
};
