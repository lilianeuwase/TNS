/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 ensures Next.js generates static HTML for Render
  output: 'export',

  // 👇 disables the CSS/JS minifier that's crashing on Render
  swcMinify: false,

  // 👇 allows using Next.js Image component without optimization server
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;