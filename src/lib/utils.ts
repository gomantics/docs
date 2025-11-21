import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Binary, Settings, Type, Search } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const gomanticsLibraries = [
  {
    name: "chunkx",
    path: "/chunkx",
    description: "Intelligent AST-aware code chunking",
    icon: Binary,
  },
  {
    name: "cfgx",
    path: "/cfgx",
    description: "Type-safe config generation from TOML",
    icon: Settings,
  },
  {
    name: "sx",
    path: "/sx",
    description: "Simple, powerful string utilities",
    icon: Type,
  },
  {
    name: "semantix",
    path: "/semantix",
    description: "Semantic search with MCP superpowers",
    icon: Search,
  },
];

export function remToPx(remValue: number) {
  const rootFontSize =
    typeof window === "undefined"
      ? 16
      : parseFloat(window.getComputedStyle(document.documentElement).fontSize);

  return remValue * rootFontSize;
}

export type Library = (typeof gomanticsLibraries)[number];
