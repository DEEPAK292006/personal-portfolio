/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "ai.google.dev", "images.unsplash.com"],
  },
};

export default nextConfig;
