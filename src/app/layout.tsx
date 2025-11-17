import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const figtree = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "gomantics: thoughful Go libraries that make building easier",
  description:
    "gomantics is a collection of thoughtful Go libraries — semantic search, AST chunking, typed config generation, and simple utilities for everyday development",
  icons: {
    icon: "/gomantics-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
