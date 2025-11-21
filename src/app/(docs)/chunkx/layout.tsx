import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - chunkx | gomantics",
    default: "chunkx | gomantics",
  },
};

export default function ChunkxLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

