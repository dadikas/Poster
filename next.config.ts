import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  outputFileTracingIncludes: {
    "/api/poster-assets/[file]": ["./image/**/*"],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
