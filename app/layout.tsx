import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Configure JetBrains Mono with necessary subsets
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Arjay | Full-Stack Developer",
  description: "Portfolio of Arjay, focusing on modern web apps and systems engineering.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${jetbrainsMono.variable} scroll-smooth`}>
      <body>{children}</body>
      </html>
  );
}
