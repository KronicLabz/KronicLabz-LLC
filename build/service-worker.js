"use strict";var precacheConfig=[["/index.html","52b8a7041ac36d8bd611e50b469a1f40"],["/static/css/main.25644af9.css","5a798bfd9fc38b7b31b038cd7ff1f249"],["/static/js/main.420c868f.js","b5311638c25dc82e279dbd0af71bc6c9"],["/static/media/globe.a7c4a926.png","a7c4a926352c9a968f3766469c7ed8c9"],["/static/media/logo.28e13838.png","28e13838e750f8fb9cde925e17c8fcc0"],["/static/media/portrait07.db26c994.jpg","db26c994f47bc106cc56086300570a30"],["/static/media/portrait08.62f3a5a9.jpg","62f3a5a9aaf6e58f2c77dab0a903f904"],["/static/media/portrait09.2f2b57b9.jpg","2f2b57b9112d8da62ae59d2f24597376"],["/static/media/portrait1.85baa334.jpg","85baa334a896a13dd1d4493f80c6e540"],["/static/media/portrait2.0511099a.jpg","0511099a27384fff71c7d6c8ea28c41d"],["/static/media/portrait3.8d0222eb.jpg","8d0222eb1379d01dd56db2ea25cd5161"],["/static/media/portrait4.7dfcf885.jpg","7dfcf8851c855158a4c320b59214b057"],["/static/media/portrait5.cf8301d5.jpg","cf8301d5c48cc4b71eaf2980ccb7266c"],["/static/media/portrait6.ef140489.jpg","ef1404891811d96cadb255b31e97c546"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});