import type { NextConfig } from "next";
import { execSync } from "child_process";

// Get git SHA at build time
const getGitSHA = () => {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "unknown";
  }
};

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_GIT_SHA: getGitSHA(),
  },
};

export default nextConfig;
