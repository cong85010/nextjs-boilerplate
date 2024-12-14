import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // hide static route
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
