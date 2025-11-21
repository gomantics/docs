import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gomantics.dev";
const ogImage = `${baseUrl}/og/sx-d1077d9f.png`;

export const metadata: Metadata = {
  title: {
    template: "%s - sx | gomantics",
    default: "sx | gomantics",
  },
  description:
    "String case conversion for Go. Convert between camelCase, snake_case, PascalCase, kebab-case and more.",
  openGraph: {
    title: "sx | gomantics",
    description: "String case conversion for Go",
    url: `${baseUrl}/sx`,
    siteName: "gomantics",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "sx - String case conversion for Go",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sx | gomantics",
    description: "String case conversion for Go",
    images: [ogImage],
  },
};

export default function SxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
