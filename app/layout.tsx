import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AgenticMSP | Multiply Your MSP Value by 10x",
  description: "Transform your MSP with AI agents that predict, prevent, and profit. Multiply your value through autonomous intelligence.",
  keywords: "MSP, AI agents, agentic AI, managed services, revenue multiplication, anomaly detection, predictive analytics",
  authors: [{ name: "AgenticMSP Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased font-sans`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}