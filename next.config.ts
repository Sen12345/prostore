import type { NextConfig } from "next";
// import { PrismaPlugin } from "./prisma/nextjs-monorepo-workaround-plugin";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "utfs.io", port: "" }],
  },
};

export default nextConfig;
