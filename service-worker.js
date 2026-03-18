const CACHE_NAME = 'fivdb-map-v3';

const urlsToCache = [
  './',
  './index.html',

  './resources/ol.css',
  './resources/ol.js',
  './resources/qgis2web.css',
  './resources/qgis2web.js',

  './resources/ol-layerswitcher.css',
  './resources/ol-layerswitcher.js',

  './resources/fontawesome-all.min.css',

  './layers/layers.js',
  './layers/FacilityInfo_4.js',

  './styles/FacilityInfo_4_style.js',

  './FIVDB.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
