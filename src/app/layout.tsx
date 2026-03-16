import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brew & Steep | The Connoisseur's Ritual",
  description: "Artisan coffee and tea for the modern ritual. Sourced with heritage, roasted with precision.",
};
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise-overlay">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
