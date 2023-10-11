const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/Next-Blog', // مسار قاعدة المشروع على GitHub Pages
  basePath: '/Next-Blog', 
   images: {
    domains: ['montagabalhamawy.github.io/Next-Blog/'], // قائمة بالنطاقات المسموح بها لعرض الصور
  },
}

module.exports = withImages(nextConfig);
// next.config.js
module.exports = {
  images: {
    domains: ['example.com'], // قائمة بالنطاقات المسموح بها لعرض الصور
  },
};
