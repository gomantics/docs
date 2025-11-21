import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - semantix | gomantics",
    default: "semantix | gomantics",
  },
};

export default function SemantixLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

