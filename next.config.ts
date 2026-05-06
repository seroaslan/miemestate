import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.103", "127.0.0.1"],
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
