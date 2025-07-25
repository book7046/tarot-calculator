const CACHE="numerology-v1";
const ASSETS=[
 "./",
 "./index.html",
 "./css/custom.css",
 "./js/numerology.js",
 "./data/numerologyData.json",
 "./data/yearlyThemeData.json",
 "./icons/icon-192.png",
 "./icons/icon-512.png"
];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(res=>res||fetch(e.request)));});