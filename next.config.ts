import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: '/barbershop-ddx-sochi',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
