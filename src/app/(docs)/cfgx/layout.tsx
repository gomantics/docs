import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gomantics.dev";
const ogImage = `${baseUrl}/og/cfgx-d337900f.png`;

export const metadata: Metadata = {
  title: {
    template: "%s - cfgx | gomantics",
    default: "cfgx | gomantics",
  },
  description:
    "Type-safe configuration code generation for Go. Generate strongly-typed Go code from TOML with zero runtime dependencies.",
  openGraph: {
    title: "cfgx | gomantics",
    description: "Type-safe config generation for Go",
    url: `${baseUrl}/cfgx`,
    siteName: "gomantics",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "cfgx - Type-safe config generation for Go",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cfgx | gomantics",
    description: "Type-safe config generation for Go",
    images: [ogImage],
  },
};

export default function CfgxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
