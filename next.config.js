const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/Next-Blog', // مسار قاعدة المشروع على GitHub Pages
  basePath: '/Next-Blog', // أيضا قم بتحديد basePath بنفس القيمة
}

module.exports = withImages(nextConfig);
