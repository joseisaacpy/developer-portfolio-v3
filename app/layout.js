import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meu Portfólio | José Isaac",
  description:
    "Portfólio de José Isaac, desenvolvedor front-end especializado em React e Next.js",
  icons: {
    icon: "/favicon/favicon.ico", // ícone principal
    shortcut: "/favicon/favicon-16x16.png", // opcional
    apple: "/favicon/apple-touch-icon.png", // para iOS
  },
  keywords:
    "portfólio, desenvolvedor web, React, Next.js,HTML, CSS, JavaScript, SQL, front-end, full-stack",
  author: "José Isaac",
  openGraph: {
    title: "Meu Portfólio | José Isaac",
    description:
      "Portfólio de José Isaac, desenvolvedor front-end especializado em React e Next.js",
    url: "https://meuportfolio.com",
    siteName: "Portfólio José Isaac",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meu Portfólio | José Isaac",
    description:
      "Portfólio de José Isaac, desenvolvedor front-end especializado em React e Next.js",
    image: "/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      {/* Script do Umami usando next/script */}
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="af70d7f0-3ac6-4874-bd78-5c708d3884d5"
      ></Script>
      {/* Body */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
