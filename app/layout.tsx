import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Space_Grotesk} from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import cover from "@/components/images/cover.jpg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const grotesk = Space_Grotesk({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Kevin 'Nakasar' Thizy",
  description: "Software Developer & Gaming Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesk.variable} antialiased bg-gray-900 h-full`}
      >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-grotest">
        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="text-[170px] font-bold font-paytone text-gray-400">
            </div>

            <nav className="flex space-x-4 uppercase">
              <Link href="/" className="hover:text-emerald-400">Profile</Link>
              <Link href="/publications" className="hover:text-emerald-400">Publications</Link>
              <Link href="/gaming" className="hover:text-emerald-400">Gaming</Link>
            </nav>
          </div>
        </header>

        <header className="relative h-64 overflow-hidden">
          <Image
            src={cover}
            alt="Sci-fi themed cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container mx-auto px-4 py-6">
              <h1 className="text-4xl font-bold bg-emerald-500 w-fit">Nakasar</h1>
              <p className="text-xl">Software Developer & Gaming Enthusiast</p>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-center py-4 mt-8">
          <p>&copy; 2024 Nakasar. All rights reserved.</p>
        </footer>
      </div>
      </body>
    </html>
  );
}
