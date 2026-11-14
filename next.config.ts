import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Tells Next.js to generate a static 'out' folder
  images: {
    unoptimized: true, // Required for static exports since AWS S3 won't optimize images on the fly
  },
};

export default nextConfig;
