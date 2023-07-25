/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // image optimization is disabled because of exceeding the vercel hobby tier limit
    unoptimized: true,
    domains: ["image.tmdb.org", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
