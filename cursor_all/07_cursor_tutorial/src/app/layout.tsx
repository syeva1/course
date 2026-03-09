import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { SessionProvider } from "@/components/providers/AuthSessionProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cursor Tutorial - Master AI-Powered Development with Cursor 0.45.14",
    template: "%s | Cursor Tutorial"
  },
  description: "Complete Cursor 0.45.14 tutorial with Tab completion, Cmd+K, AI Chat, Composer, and Claude 4.5 Haiku. Learn AI-powered development in 10 minutes. Free guide with real examples.",
  keywords: [
    // Core Features
    "Cursor tutorial",
    "Cursor 1.7 guide",
    "Cursor 0.45.14",
    "Cursor AI editor",
    "Tab completion Cursor",
    "Cmd+K Cursor inline edit",
    "Cursor AI chat",
    "Cursor Composer",
    "@ symbols Cursor",
    ".cursorrules",
    // AI & Development
    "Claude 4.5 Haiku",
    "AI code generation",
    "AI-assisted development",
    "AI programming assistant",
    "AI pair programming",
    // Features
    "Browser Control Cursor",
    "Hooks Cursor",
    "Team Rules Cursor",
    "Sandboxed Terminals",
    "multi-file editing",
    "codebase context",
    // Comparisons & SEO
    "Cursor vs VS Code",
    "Cursor vs GitHub Copilot",
    "best AI code editor",
    "AI coding tutorial 2025",
    "Cursor keyboard shortcuts",
    "Cursor productivity tips"
  ],
  authors: [{ name: "Cursor Tutorial Team" }],
  creator: "Cursor Tutorial",
  publisher: "Cursor Tutorial",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cursortutorial.ai'),
  alternates: {
    canonical: '/',
  },
  applicationName: 'Cursor Tutorial',
  category: 'education',
  classification: 'Tutorial',
  openGraph: {
    title: "Cursor Tutorial - Master AI-Powered Development with Cursor 0.45.14",
    description: "Complete Cursor 0.45.14 tutorial with Tab completion, Cmd+K, AI Chat, Composer, and Claude 4.5 Haiku. Learn in 10 minutes with real examples.",
    url: 'https://cursortutorial.ai',
    siteName: 'Cursor Tutorial',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cursor Tutorial - Master AI-Powered Development with Tab, Cmd+K, Chat, and Composer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cursor Tutorial - Master AI Development in 10 Minutes",
    description: "Complete Cursor 0.45.14 tutorial: Tab completion, Cmd+K, AI Chat, Composer. Real examples with Claude 4.5 Haiku.",
    images: ['/og-image.png'],
    creator: '@cursortutorial',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <Navigation />
          <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {children}
          </main>
          <Footer />
        </SessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
