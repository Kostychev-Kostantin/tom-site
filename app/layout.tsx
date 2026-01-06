import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top of Mind Labs — AI Strategy & Implementation",
  description: "Transform your enterprise with AI-native systems that drive measurable business outcomes. We help ambitious companies move from AI ideas to operational impact—fast.",
  keywords: ["AI consulting", "machine learning", "enterprise AI", "AI transformation", "data engineering"],
  authors: [{ name: "Top of Mind Labs" }],
  openGraph: {
    title: "Top of Mind Labs — AI Strategy & Implementation",
    description: "Transform your enterprise with AI-native systems that drive measurable business outcomes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
