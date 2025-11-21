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

export const defaultNavigation: Array<NavGroup> = [];
