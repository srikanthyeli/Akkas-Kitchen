import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export: `npm run build` writes a deployable site to ./out
  output: "export",
  // Allow opening the dev server from other devices on the LAN (e.g. phone)
  allowedDevOrigins: ["192.168.1.22"],
  images: {
    // No image optimisation server in a static export
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
