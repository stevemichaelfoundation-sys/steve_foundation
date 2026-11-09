const CACHE_VERSION = "v1";
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const PAGES_CACHE = `pages-${CACHE_VERSION}`;
const PRECACHE_URLS = ["/offline", "/icons/icon-192.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== STATIC_CACHE && key !== PAGES_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

function shouldIgnore(request, url) {
  if (request.method !== "GET") return true;
  if (url.origin !== self.location.origin) return true;
  if (url.pathname.startsWith("/_next/webpack-hmr")) return true;
  return false;
}

function isStaticAsset(url) {
  return url.pathname.startsWith("/_next/static/");
}

function isCacheableAsset(url) {
  return /\.(?:png|jpg|jpeg|gif|webp|svg|ico|avif|woff2?|ttf|otf)$/i.test(
    url.pathname
  );
}

async function safeCachePut(cacheName, request, response) {
  try {
    const cache = await caches.open(cacheName);
    await cache.put(request, response);
  } catch (error) {
    // Ignore cache write failures to avoid breaking responses.
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (shouldIgnore(request, url)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          if (response && response.ok) {
            event.waitUntil(
              safeCachePut(PAGES_CACHE, request, response.clone())
            );
          }
          return response;
        } catch (error) {
          const cached = await caches.match(request);
          if (cached) return cached;
          const offline = await caches.match("/offline");
          if (offline) return offline;
          throw error;
        }
      })()
    );
    return;
  }

  if (isStaticAsset(url)) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response && response.ok) {
          event.waitUntil(safeCachePut(STATIC_CACHE, request, response.clone()));
        }
        return response;
      })()
    );
    return;
  }

  if (isCacheableAsset(url)) {
    event.respondWith(
      (async () => {
        const cached = await caches.match(request);
        const network = fetch(request)
          .then((response) => {
            if (response && response.ok) {
              event.waitUntil(
                safeCachePut(STATIC_CACHE, request, response.clone())
              );
            }
            return response;
          })
          .catch(() => undefined);

        if (cached) {
          event.waitUntil(network);
          return cached;
        }
        const response = await network;
        if (response) return response;
        throw new Error("Network request failed and no cache entry found");
      })()
    );
  }
});
