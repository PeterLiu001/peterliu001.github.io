const version = 'v3.1';

const clearOldCaches = async () => {
    const cacheKeys = await caches.keys();
    // 删除其他版本缓存
    await Promise.all(
        cacheKeys.map((key) => {
            if (key !== version) {
                return caches.delete(key);
            }
        })
    );
};

const addResourcesToCache = async (resources) => {
    // 清空其他版本缓存
    await clearOldCaches();

    const cache = await caches.open(version);
    await cache.addAll(resources);
};

const putInCache = async (request, response) => {
    // 清空其他版本缓存
    await clearOldCaches();

    const cache = await caches.open(version);
    await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
    // First try to get the resource from the cache
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        return responseFromCache;
    }

    // Next try to use the preloaded response, if it's there
    const preloadResponse = await preloadResponsePromise;
    if (preloadResponse) {
        console.info('using preload response', preloadResponse);
        putInCache(request, preloadResponse.clone());
        return preloadResponse;
    }

    // Next try to get the resource from the network
    try {
        const responseFromNetwork = await fetch(request);
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        putInCache(request, responseFromNetwork.clone());
        return responseFromNetwork;
    } catch (error) {
        const fallbackResponse = await caches.match(fallbackUrl);
        if (fallbackResponse) {
            return fallbackResponse;
        }
        // when even the fallback response is not available,
        // there is nothing we can do, but we must always
        // return a Response object
        return new Response('Network error happened', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
};

const enableNavigationPreload = async () => {
    if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable();
    }
};

self.addEventListener('activate', (event) => {
    event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', (event) => {
    event.waitUntil(
        addResourcesToCache([])
    );
});

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     fetch(event.request).catch((error) => {
//       console.error('Fetching failed:', error);
//       return new Response('Network error happened', { status: 408 });
//     })
//   );
// });