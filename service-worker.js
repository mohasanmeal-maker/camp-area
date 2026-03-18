const CACHE_NAME = 'map-cache-v2';

const urlsToCache = [
  './',
  './index.html',

  './resources/ol.js',
  './resources/ol.css',
  './resources/qgis2web.js',
  './resources/qgis2web.css',

  './resources/ol-layerswitcher.js',
  './resources/ol-layerswitcher.css',

  './resources/fontawesome-all.min.css',

  './layers/layers.js',
  './layers/FacilityInfo_4.js',

  './styles/FacilityInfo_4_style.js',

  './FIVDB.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
