import { NextResponse } from "next/server";

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login";

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
  const auth = req.cookies.get("auth")?.value;

  const { pathname } = req.nextUrl;

  const publicRoute = publicRoutes.find((route) => route.path === pathname);
  console.log("pathname:", req.nextUrl.pathname);
  console.log("auth:", auth);
  console.log("publicRoute:", publicRoute);

  //  1. Usuário NÃO autenticado e rota NÃO é pública
  if (!auth && !publicRoute) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  //  2. Usuário AUTENTICADO tentando acessar rota pública que exige redirect
  if (auth && publicRoute?.whenAuthenticated === "redirect") {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    return NextResponse.redirect(redirectUrl);
  }

  //  3. Usuário AUTENTICADO acessando rota pública que permite acesso
  if (auth && publicRoute?.whenAuthenticated === "next") {
    return NextResponse.next();
  }

  //  4. Usuário NÃO autenticado em rota pública
  if (!auth && publicRoute) {
    return NextResponse.next();
  }

  //  5. Rotas autenticadas com auth válido
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.webp$).*)",
  ],
};
