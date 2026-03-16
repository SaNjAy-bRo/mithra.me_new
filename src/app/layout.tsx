import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyContactBar from "@/components/layout/StickyContactBar";
import AOSProvider from "@/components/AOSProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mithrah.ME — Integrated 360° Media Solutions | Bangalore",
  description:
    "Top rated Advertising company in Bangalore. Transit Advertising, Outdoor Media, WhatsApp Marketing, Bulk SMS Campaigns, Digital Marketing & BTL Activations.",
  keywords:
    "advertising bangalore, transit media, outdoor advertising, whatsapp marketing, bulk sms, digital marketing, cinema advertising, led advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body className="antialiased">
        <AOSProvider>
          <Navbar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <StickyContactBar />
        </AOSProvider>
      </body>
    </html>
  );
}
