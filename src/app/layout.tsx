import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingContact from "../components/layout/FloatingContact";
import { defaultDescription, siteName, siteTagline } from "../lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteName} | ${siteTagline}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Mesfin Shumet Tour and Travel",
    "Addis Ababa tours",
    "Ethiopia travel",
    "Short City Tour",
    "Half-Day City Tour",
    "Full-Day City Tour",
    "Airport Layover Tour",
    "National Museum of Ethiopia",
    "Mount Entoto",
    "Holy Trinity Cathedral",
    "Unity Park",
    "Merkato",
    "Meskel Square",
    "Ethiopian coffee ceremony",
    "Gemstone store",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
