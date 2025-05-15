import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // hide static route
  devIndicators: {
    appIsrStatus: false,
  },
};

export default withNextIntl(nextConfig);
