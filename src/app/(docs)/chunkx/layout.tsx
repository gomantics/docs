import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gomantics.dev";
const ogImage = `${baseUrl}/og/chunkx-cc48c0b8.png`;

export const metadata: Metadata = {
  title: {
    template: "%s - chunkx | gomantics",
    default: "chunkx | gomantics",
  },
  description:
    "AST-based code chunking for Go. Semantic code chunking via Abstract Syntax Trees for better RAG systems.",
  openGraph: {
    title: "chunkx | gomantics",
    description: "AST-based code chunking for Go",
    url: `${baseUrl}/chunkx`,
    siteName: "gomantics",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "chunkx - AST-based code chunking for Go",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "chunkx | gomantics",
    description: "AST-based code chunking for Go",
    images: [ogImage],
  },
};

export default function ChunkxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
