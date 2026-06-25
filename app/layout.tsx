import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import Footer from "./components/sections/Footer";
import SmoothScroll from "./components/ui/SmoothScroll";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zavian — Editorial Photography",
  description: "Bold portraits. Cinematic light. Real emotion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-fullflex flex-col`}>
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
