import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundNoise from "@/components/BackgroundNoise";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krish Sangani | Fullstack Developer",
  description:
    "Seasoned Fullstack Developer specializing in building robust and scalable web applications with pixel-perfect frontends.",
  icons: {
    icon: "/ks-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative selection:bg-[#6366F1]/30 selection:text-[#6366F1]`}
      >
        <BackgroundNoise />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
