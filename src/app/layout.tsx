import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLÍNICA AUTOMOTRIZ | Expertos #1 en reparación, mantenimiento y prevención de fallas para tu Vehículo",
  description: "Expertos #1 en reparación, mantenimiento y prevención de fallas para tu Vehículo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
