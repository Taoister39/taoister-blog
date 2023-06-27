// service-worker.js
const version = "1.0.3",
  CACHE = version + "::BlogMember",
  installFilesEssential = ["/", "/manifest.json", "/favicon.ico", "/logo.png"];
/**
 * 生产环境中，这些路径都在一个域名下
 */
const excludedPaths = ["/admin", "/ADMIN_API", "/CLIENT_API"];

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
  let url = new URL(event.request.url);

  if (excludedPaths.some((path) => url.pathname.startsWith(path))) {
    // 不走Service Worker，直接从网络获取响应
    return fetch(event.request);
  }
  // 检查请求的URL是否包含"chrome-extension"
  if (url.href.includes("chrome-extension")) {
    // 不走Service Worker，直接从网络获取响应
    return fetch(event.request);
  }

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
