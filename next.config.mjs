/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_PATH: process.env.NEXT_PUBLIC_API_PATH,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://${process.env.NEXT_PUBLIC_API_PATH}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
