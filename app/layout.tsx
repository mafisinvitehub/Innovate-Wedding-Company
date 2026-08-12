import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innovateweddingcompany.com"),

  title: {
    default: "Innovate Wedding Company",
    template: "%s | Innovate Wedding Company",
  },

  description:
    "Premium wedding planning, photography, videography and event management services in Nagercoil and across Tamil Nadu.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://innovateweddingcompany.com/",
    siteName: "Innovate Wedding Company Pvt Ltd",
    title: "Innovate Wedding Company Pvt Ltd | Wedding & Event Management",
    description:
      "Premium wedding planning, event management and luxury wedding services across Tamil Nadu.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Innovate Wedding Company Pvt Ltd",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Innovate Wedding Company Pvt Ltd | Wedding & Event Management",
    description:
      "Premium wedding planning, event management and luxury wedding services across Tamil Nadu.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}