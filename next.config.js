/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  swcMinify: false,
  webpack: (config) => {
    // 👇 turn off CSS minimization completely
    config.optimization.minimize = false;
    return config;
  },
  typescript: {
    // WARNING: allows deploying with TypeScript errors — use only temporarily
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;