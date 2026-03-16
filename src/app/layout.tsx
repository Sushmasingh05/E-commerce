import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barcoop Bevy | All Natural Cocktail Mixers",
  description: "Premium all-natural cocktail mixers for the perfect drink.",
};
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
