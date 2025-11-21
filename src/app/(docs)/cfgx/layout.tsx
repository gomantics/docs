import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - cfgx | gomantics",
    default: "cfgx | gomantics",
  },
};

export default function CfgxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

