// Importa o CSS
import "./globals.css";

// Importa o next/script
import Script from "next/script";

// Toast/Notificações
import { ToastContainer } from "react-toastify";

// Fonte
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Portfólio | José Isaac",
  description:
    "Portfólio de José Isaac, desenvolvedor front-end especializado em React, Next.js e interfaces modernas com foco em performance e usabilidade.",
  icons: {
    icon: "/favicon/favicon.ico", // ícone principal
    shortcut: "/favicon/favicon-16x16.png", // opcional
    apple: "/favicon/apple-touch-icon.png", // para iOS
  },
  keywords: [
    "José Isaac",
    "Portfólio profissional",
    "Desenvolvedor",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Front-end",
    "Full-stack",
  ],
  author: "José Isaac",
  openGraph: {
    title: "Portfólio | José Isaac",
    description:
      "Portfólio de José Isaac, desenvolvedor front-end especializado em React, Next.js e interfaces modernas com foco em performance e usabilidade.",
    url: "https://developer-portfolio-v3.vercel.app/",
    siteName: "Portfólio José Isaac",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio | José Isaac",
    description:
      "Portfólio de José Isaac, desenvolvedor front-end especializado em React, Next.js e interfaces modernas com foco em performance e usabilidade.",
    image: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* Script do Umami usando next/script */}
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="af70d7f0-3ac6-4874-bd78-5c708d3884d5"
      ></Script>
      {/* Body */}
      <body className={`${poppins.className} antialiased`}>
        {children}
        {/* Toast / Notificação */}
        <ToastContainer autoClose={700} />
      </body>
    </html>
  );
}
