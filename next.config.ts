import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization for external sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
    ],
  },
  
  // Generate trailing slashes for better SEO consistency
  trailingSlash: false,
  
  // Optimize for production
  poweredByHeader: false,
  
  // Compress responses
  compress: true,
};

export default nextConfig;
