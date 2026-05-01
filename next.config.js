/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'raviklaassens.b-cdn.net' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
    ],
  },
}

module.exports = nextConfig
