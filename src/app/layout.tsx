import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pérez & Asociados | Soluciones Legales con Integridad",
    template: "%s | Pérez & Asociados",
  },
  description:
    "Más de 40 años de trayectoria brindando soluciones legales con integridad y visión moderna. Asesoría confiable para un futuro seguro.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Pérez & Asociados | Soluciones Legales con Integridad",
    description:
      "Más de 40 años de trayectoria brindando soluciones legales con integridad y visión moderna.",
    url: "https://example.com",
    siteName: "Pérez & Asociados",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pérez & Asociados | Soluciones Legales con Integridad",
    description:
      "Más de 40 años de trayectoria brindando soluciones legales con integridad y visión moderna.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
