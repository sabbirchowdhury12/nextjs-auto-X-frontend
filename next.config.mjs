/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'github.com',
      'picsum.photos',
      'images.unsplash.com',
    ],
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;