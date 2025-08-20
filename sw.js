// Service Worker for Portfolio Website - Updated for Emerald Theme
const CACHE_NAME = 'portfolio-emerald-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/src/style.css',
    '/src/script.js',
    '/static/img/profile.jpeg',
    '/static/pdf/resume.pdf',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install event
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

// Activate event
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
