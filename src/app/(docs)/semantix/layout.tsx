import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gomantics.dev";
const ogImage = `${baseUrl}/og/semantix-e4a7a5e0.png`;

export const metadata: Metadata = {
  title: {
    template: "%s - semantix | gomantics",
    default: "semantix | gomantics",
  },
  description:
    "Semantic versioning for Go. Parse and compare semantic versions with ease.",
  openGraph: {
    title: "semantix | gomantics",
    description: "Semantic versioning for Go",
    url: `${baseUrl}/semantix`,
    siteName: "gomantics",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "semantix - Semantic versioning for Go",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "semantix | gomantics",
    description: "Semantic versioning for Go",
    images: [ogImage],
  },
};

export default function SemantixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
