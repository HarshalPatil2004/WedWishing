import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WishesProvider } from "./context/WishesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WedWishher - A Grand Wedding Celebration",
  description: "Join us in celebrating the love and union of Sanchita and Tejas with a heartfelt wedding website filled with cherished memories, event details, and a special wish wall for your blessings.",
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
        <div className="relative z-10">
          <WishesProvider>
            {children}
          </WishesProvider>
        </div>
      </body>
    </html>
  );
}
