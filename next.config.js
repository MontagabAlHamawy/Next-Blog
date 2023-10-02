 /**
  * @type {import('next').NextConfig}
  */
const nextConfig = {
  output: 'export',
  basePath: 'https://montagabalhamawy.github.io/Next-Blog',
  assetPrefix: 'https://montagabalhamawy.github.io/Next-Blog/',
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'montagabalhamawy.github.io/Next-Blog'
      }

    ]
  }
}

module.exports = nextConfig
