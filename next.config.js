module.exports = {
  basePath: '/Next-Blog', // اسم مجلد مشروعك على GitHub Pages
  assetPrefix: '/Next-Blog/', // نفس اسم المجلد

  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // يمكنك إضافة المزيد من الصفحات هنا حسب احتياجات مشروعك
    };
  },
};
