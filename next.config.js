/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Next-Blog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Next-Blog/' : '',
 
}
 
module.exports = nextConfig
