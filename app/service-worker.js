const CACHE_VERSION = '1.3';

const staticAssets = ['app', 'index.html', 'lib/bulma.min.css', 'styles.css', 'main.js'];

self.addEventListener('install', e => {
  const addedCachePromise = caches.open(`static-${CACHE_VERSION}`).then(cache => {
    return cache.addAll(staticAssets);
  });
  e.waitUntil(addedCachePromise);
});

self.addEventListener('activate', e => {
  const cleanedCachePromise = caches.keys().then(keys => {
    keys.forEach(cacheKey => {
      if (cacheKey !== `static-${CACHE_VERSION}` && cacheKey.match(`static-`)) {
        return caches.delete(cacheKey);
      }
    });
  });
  e.waitUntil(cleanedCachePromise);
});

self.addEventListener('fetch', e => {
  // Static cache for APP Shell
  if (e.request.url.match(location.origin)) {
    e.respondWith(caches.match(e.request));
  }
});
