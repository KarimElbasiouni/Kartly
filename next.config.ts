import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "example.com",
      "sneaker-product-images.s3.amazonaws.com",
      "sneaker-product-images.s3.us-east-2.amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
