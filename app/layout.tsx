import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top of Mind Labs — Deployed AI Researchers & Engineers | AI Strategy & Implementation",
  description: "Get expert deployed AI researchers and engineers embedded in your team. Transform your enterprise with production-ready AI systems that drive measurable business outcomes—delivered in months, not years.",
  keywords: ["deployed AI researchers", "deployed AI engineers", "AI consulting", "machine learning engineers", "AI talent", "enterprise AI", "AI transformation", "data engineering", "embedded AI experts"],
  authors: [{ name: "Top of Mind Labs" }],
  openGraph: {
    title: "Top of Mind Labs — Deployed AI Researchers & Engineers",
    description: "Expert AI researchers and engineers integrated directly into your team, delivering production-ready solutions while building your internal AI capabilities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${geist.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
