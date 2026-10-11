// Service Worker - Offline Support
const CACHE = 'knie-plan-v1';
const FILES = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './app.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
