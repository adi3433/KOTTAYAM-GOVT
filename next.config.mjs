/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Production optimizations
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
}

export default nextConfig