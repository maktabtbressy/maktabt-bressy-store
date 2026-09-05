/* Service Worker بسيط - غرضه الأساسي تفعيل خاصية "تثبيت" الموقع كتطبيق (PWA).
   ملحوظة: متعمدين نسيب التخزين المؤقت (cache) بسيط جدًا عشان بيانات المتجر
   (منتجات، طلبات، أسعار) لازم تفضل محدّثة لحظيًا من Firestore دايمًا، مش من نسخة قديمة مخزّنة. */

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// من غير أي تخزين مؤقت فعلي - كل طلب بيروح للشبكة مباشرة زي ما هو
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
