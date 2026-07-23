/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.indago.cl', 'via.placeholder.com'],
    unoptimized: true
  }
};

module.exports = nextConfig;
