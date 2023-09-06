import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UJC - Sistema de denúncias a casos de assédio sexual",
  description:
    "O sistema de denúncias para casos de assédio sexual é uma plataforma que permite que estudantes e funcionários relatem incidentes de assédio sexual de forma segura e confidencial. O sistema facilita a coleta de informações e fornece um canal de comunicação direto com as autoridades competentes, garantindo que as denúncias sejam tratadas de maneira adequada e justa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-pt">
      <body className={montserrat.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
