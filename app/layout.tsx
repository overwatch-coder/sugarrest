import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sugarret - Nature's Freshest High | Premium Juice Bar",
  description:
    "Experience the finest sugarcane-based beverages from Ghana's premier juice bar. Fresh juices, natural cocktails, and luxury refreshments with 30 years of family tradition.",
  keywords:
    "sugarcane juice, premium juice bar, Ghana, natural cocktails, fresh juice, luxury beverages",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <div className="flex flex-col min-h-screen relative">
          <Navigation />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
