/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  // basePath: '/Next-Blog',
  // assetPrefix: '/Next-Blog/',
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**'
      }

    ]
  }
}
 
module.exports = nextConfig
