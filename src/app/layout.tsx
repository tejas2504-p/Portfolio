import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tejas Prajapati | Full-Stack Developer",
  description: "Tejas Prajapati is a Full-Stack Developer specializing in modern web applications, AI-powered systems, and real-time experiences.",
  openGraph: {
    title: "Tejas Prajapati | Full-Stack Developer",
    description: "Tejas Prajapati is a Full-Stack Developer specializing in modern web applications, AI-powered systems, and real-time experiences.",
    url: "https://tejasprajapati.com",
    siteName: "Tejas Prajapati",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Prajapati | Full-Stack Developer",
    description: "Tejas Prajapati is a Full-Stack Developer specializing in modern web applications, AI-powered systems, and real-time experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tejasprajapati.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
