// service-worker.js
const version = "1.0.3",
  CACHE = version + "::BlogMember",
  installFilesEssential = ["/", "/manifest.json", "/favicon.ico", "/logo.png"];

// install static assets
function installStaticFiles() {
  return caches.open(CACHE).then((cache) => {
    return cache.addAll(installFilesEssential);
  });
}

function clearOldCaches() {
  return caches
    .keys()
    .then(
      (keylist) =>
        console.log(keylist) &&
        Promise.all(
          keylist
            .filter((key) => key !== CACHE)
            .map((key) => caches.delete(key))
        )
    );
}

self.addEventListener("install", (event) => {
  event.waitUntil(installStaticFiles().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clearOldCaches().then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  let url = event.request.url;
  event.respondWith(
    caches.open(CACHE).then((cache) => {
      return cache.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((newRequest) => {
            console.log("network fetch: " + url);
            if (newRequest.ok) cache.put(event.request, newRequest.clone());
            return newRequest;
          })
          .catch(() => null);
      });
    })
  );
});
