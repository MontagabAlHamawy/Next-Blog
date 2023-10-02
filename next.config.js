/**
  * @type {import('next').NextConfig}
  */
const nextConfig = {
  basePath: '/Next-Blog',
  assetPrefix: '/Next-Blog/',
  // تعطيل تفعيل خاصية الصور التي تسبب في الخطأ
  images: {
    disableStaticImages: true,
  },
}

module.exports = nextConfig;
