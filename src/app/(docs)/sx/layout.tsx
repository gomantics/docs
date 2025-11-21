import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - sx | gomantics",
    default: "sx | gomantics",
  },
};

export default function SxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
