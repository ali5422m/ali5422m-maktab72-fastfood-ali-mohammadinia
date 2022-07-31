/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${process.env.BACKEND_DOMAIN}`],
  },
  // matcher: ["/about/:path*", "/dashboard/:path*"],
};

module.exports = nextConfig
