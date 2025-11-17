import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme/provider";

const figtree = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "gomantics: thoughtful Go libraries for everyday development",
  description:
    "gomantics is a collection of thoughtful Go libraries — semantic search, AST chunking, typed config generation, and simple utilities for everyday development",
  icons: {
    icon: "/gomantics-favicon.png",
  },
  openGraph: {
    title: "gomantics: thoughtful Go libraries for everyday development",
    description:
      "gomantics is a collection of thoughtful Go libraries — semantic search, AST chunking, typed config generation, and simple utilities for everyday development",
    url: "https://www.gomantics.dev",
    siteName: "gomantics",
    images: [{ url: "https://www.gomantics.dev/ss.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
