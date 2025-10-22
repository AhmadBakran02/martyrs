/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "martyrs-of-the-revolution.onrender.com",
        pathname: "/api/**",
      },
    ],
  },
};

module.exports = nextConfig;
