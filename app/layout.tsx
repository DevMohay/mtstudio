import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SmoothScroller } from "./components/SmoothScroller";
import ConditionalCursor from "./components/ConditionalCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MTBT Studio LTD",
  description: "Build your dream website with MTBT Studio LTD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalCursor  />
        <SmoothScroller>
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
