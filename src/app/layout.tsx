import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lokasya Ventures | Premium Cotton Home Textiles Export",
  description:
    "India's trusted exporter of 100% cotton home textiles — bedsheets, towels, pillow covers & more. Quality, comfort, and reliability shipped worldwide.",
  keywords:
    "cotton textiles, home textiles export, bedsheets, towels, pillow covers, bath mats, India export, textile manufacturer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
