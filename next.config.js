/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    // need this to be able to use the images in the Image component
  },
}

module.exports = nextConfig
