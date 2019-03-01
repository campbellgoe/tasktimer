const CACHE_NAME = "simple-cache-v1";
const urlsToCache = ["/", "/static/manifest.json", "/static/logo.png", "/static/drag_indicator.svg", "/static/arrow_right.svg", "/static/night_mode_icon.svg"];

self.addEventListener("install", event => {
    const preLoaded = caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    event.waitUntil(preLoaded);
});

self.addEventListener("fetch", event => {
    const response = caches.match(event.request)
        .then(match => match || fetch(event.request));
    event.respondWith(response);
});
