const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // إعدادات أخرى إذا كنت بحاجة إليها
  // ...

  // إعدادات الإخراج (output) للتصدير الثابت
  output: {
    // تحديد نوع الإخراج كـ "export"
    // بدلاً من استخدام كائن
    // يجب أن يكون القيمة هنا "export"
    // إذا كنت تستخدم "next export"
    type: 'export',

    // مسار المجلد الذي سيتم تصدير الملفات إليه
    // يمكنك تغييره حسب احتياجاتك
    path: path.join(__dirname, 'out'),

    // ضبط أي إعدادات إضافية هنا
    // ...
  },
};

module.exports = nextConfig;
