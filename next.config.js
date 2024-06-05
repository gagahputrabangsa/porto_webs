/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add remote host domains here if needed
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;