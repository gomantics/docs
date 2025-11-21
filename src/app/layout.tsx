import { Figtree } from "next/font/google";

import "@/styles/tailwind.css";

import { Providers } from "./providers";
import { Analytics } from "./analytics";

const figtree = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${figtree.variable} h-full antialiased bg-white dark:bg-zinc-900`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
