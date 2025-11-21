import { type NavGroup } from "@/components/docs/navigation";

export const sxNavigation: Array<NavGroup> = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/sx" },
      { title: "Usage", href: "/sx/usage" },
    ],
  },
  {
    title: "API Reference",
    links: [{ title: "API Reference", href: "/sx/api" }],
  },
];

export const chunkxNavigation: Array<NavGroup> = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/chunkx" },
      { title: "Usage", href: "/chunkx/usage" },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      { title: "Supported Languages", href: "/chunkx/languages" },
      { title: "Token Counting", href: "/chunkx/token-counting" },
    ],
  },
  {
    title: "Advanced",
    links: [
      { title: "Architecture", href: "/chunkx/architecture" },
      { title: "Performance", href: "/chunkx/performance" },
    ],
  },
];

export const cfgxNavigation: Array<NavGroup> = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/cfgx" },
      { title: "Core Features", href: "/cfgx/features" },
    ],
  },
  {
    title: "Deep Dive",
    links: [
      { title: "Generation Modes", href: "/cfgx/modes" },
      { title: "Multi-Environment", href: "/cfgx/multi-env" },
    ],
  },
  {
    title: "Reference",
    links: [
      { title: "CLI Reference", href: "/cfgx/cli" },
      { title: "FAQ", href: "/cfgx/faq" },
    ],
  },
];

export const semantixNavigation: Array<NavGroup> = [
  {
    title: "Getting Started",
    links: [{ title: "Introduction", href: "/semantix" }],
  },
];

export const defaultNavigation: Array<NavGroup> = [];
