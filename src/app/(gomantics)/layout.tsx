import type { Metadata } from "next";

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

export default function GomanticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
