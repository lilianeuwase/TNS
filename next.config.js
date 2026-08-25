/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  typescript: {
    // WARNING: allows deploying with TypeScript errors — use only temporarily
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
