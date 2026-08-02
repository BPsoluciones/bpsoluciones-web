import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BP Soluciones - Seguridad y Conectividad",
  description: "Soluciones inteligentes para hogares, comercios y empresas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#030712] text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}