/* self.addEventListener('install', event => {
  event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
  const request = event.request;
  // get
  if (request.method != "GET") {
    return
  }

  // Buscar en cache
  event.respondWith(cachedResponse(request))

  // Actualizar el cache
  event.waitUntil(updateCache(request))
})

async function precache() {
  const cache = await caches.open("v1");
  return cache.addAll([
    '/',
    '/src/index.html',
    '/src/js/index.js',
    '/src/js/MediaPlayer.js',
    '/src/js/plugins/AutoPlay.js',
    '/src/js/plugins/AutoPause.js',
    '/src/css/index.css',
    '/src/assets/ejercicio.mp4',
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open("v1");
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open("v1");
  const response = await fetch(request);
  return cache.put(request, response);
} */