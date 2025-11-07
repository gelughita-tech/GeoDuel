const CACHE_NAME = 'geoDuel-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js',
  '/js/map.js',
  '/js/profile.js',
  '/js/game.js',
  '/js/ui.js',
  '/data/intrebari.json',
  '/assets/europe.geojson',
  'https://unpkg.com/leaflet/dist/leaflet.css',
  'https://unpkg.com/leaflet/dist/leaflet.js'
];

// 📥 Instalare și caching inițial
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// 🔄 Activare și curățare cache vechi
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// 🌐 Interceptare cereri și servire din cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});