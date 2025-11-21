import nextMDX from "@next/mdx";

import { execSync } from "child_process";
import { recmaPlugins } from "./src/mdx/recma.mjs";
import { rehypePlugins } from "./src/mdx/rehype.mjs";
import { remarkPlugins } from "./src/mdx/remark.mjs";
import withSearch from "./src/mdx/search.mjs";

// Get git SHA at build time
const getGitSHA = () => {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "unknown";
  }
};

const withMDX = nextMDX({
  // TODO: Turbopack doesn't support custom plugins
  // so we're using webpack instead
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  outputFileTracingIncludes: {
    "/**/*": ["./src/app/**/*.mdx"],
  },
  env: {
    NEXT_PUBLIC_GIT_SHA: getGitSHA(),
  },
  async headers() {
    return [
      {
        source: "/og/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withSearch(withMDX(nextConfig));
