import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gomantics.dev";

export const metadata: Metadata = {
  title: {
    template: "%s - clipx | gomantics",
    default: "clipx | gomantics",
  },
  description:
    "LAN clipboard sync for macOS. Copy on one Mac, paste on another. Instantly.",
  openGraph: {
    title: "clipx | gomantics",
    description: "LAN clipboard sync for macOS",
    url: `${baseUrl}/clipx`,
    siteName: "gomantics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "clipx | gomantics",
    description: "LAN clipboard sync for macOS",
  },
};

export default function ClipxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
