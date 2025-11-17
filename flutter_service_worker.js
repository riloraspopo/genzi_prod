'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "476f3bf84a5b45993db349cae74edb9f",
"/": "476f3bf84a5b45993db349cae74edb9f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/icongenzi.png": "2d70397ea8e1379d76f0f9040d75d840",
"assets/fonts/MaterialIcons-Regular.otf": "325b1f0612e4aba6c1e5b42a87fec975",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "77edfbdcfff2207bb857ebcab01914cf",
"assets/packages/pdfrx/assets/pdfium_worker.js": "820efc6eda8fe1f3a137accfbcf186a7",
"assets/packages/pdfrx/assets/pdfium.wasm": "70a0620e6434254fcb5b1f770db50bc6",
"assets/packages/pdfrx/assets/pdfium_client.js": "da23ca7d7b133408de27a227784d13ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.bin.json": "5e58dfe2fead46a03a3b07553fe43565",
"assets/NOTICES": "9b11a5a194110bc5e82bd87cb98db480",
"assets/AssetManifest.json": "19697fd764443f9040ad4790ab14fa44",
"manifest.json": "afe2cdf4e695937c0d7e7c49c57d3cbf",
"favicon.png": "2d70397ea8e1379d76f0f9040d75d840",
"version.json": "c2b09065b641bb61aa44e0b4d94b3fdf",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "be8dc4942e473f68bab81277035dafa4",
".git/refs/heads/main": "be8dc4942e473f68bab81277035dafa4",
".git/FETCH_HEAD": "ffad4846a56fb603b32a09999a954717",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/objects/61/a7a13f54fd7a332604a3f00f3a17a7c33f786a": "be458a4297f039d077e7569f4055f996",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "9be869e0f2a532b8d9478d6e87c5651f",
".git/objects/cd/380526a265289f480a8864e26f40378d8e09c0": "94857253024879cf45ff6dee2b20367d",
".git/objects/cd/a2efd7d927ef3749ea1d41860eb36c3cc51688": "7c0e345eb12a20ddf48fc67f5cad783f",
".git/objects/4a/4d0009b48a108380cedfe0327446b48057a4a4": "8b6478996940968278229400c1f57640",
".git/objects/10/390e98563a4367a54d7bd09d74befb10cf07a4": "f0a2d50fa948706e16a20e28a80bd6ee",
".git/objects/68/ea2d8cc1deba814610ee27d01d2eba501b43ac": "1884e792d274c34675f96a814c808f01",
".git/objects/68/38dc22f3798af4a89f9e78a18b5c69ac458fa2": "d4da94edfd925d678e7dd76a6f1fd870",
".git/objects/68/28893a4b0444c10f1e6196d2fb753fcfffefa9": "37701d60a771cf9dfe987122c6f006f6",
".git/objects/1e/1da4c4bcc9017eea4e6983376128515ea00e3e": "9c4d60ec7635eb5275d70ef76c03c990",
".git/objects/9d/e9dc8b009f3a4552876bad0ded1fe87b34bd35": "3ee609c85bdb1de18c59352e01d6c983",
".git/objects/2a/6676ee1cc958d5497254e287e03edd8d8dab8c": "466a20fa15e2124e7a8b23bbf2025ee2",
".git/objects/2a/7b445616241729e36096ae983c15954fc689f9": "6d1f8d8338836756bef9d90aa650e62b",
".git/objects/86/41f2419e645fbd48ee140688e9da27afe3e034": "e3a7bb7d5678337de0c69286077181eb",
".git/objects/e9/e5b9a086eadef5119952200cc51b92003d620b": "b06e97bb78e0bd1335b27ed26be9e333",
".git/objects/bc/7d993f94baf32ca11e5f5dc5412aac12a668a9": "0df0048bbcb72caa6e54b5fb66c273a0",
".git/objects/ca/28c42816e1ba98b5202e9a751a7a71c42d96e6": "4e235b192a6ddd8f127abc9d78e6fe21",
".git/objects/ca/f10caf848c372d7fe259349c2909bc16e0cce6": "124c8401a11f70f0abb230184742adcd",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "45334b0198ddc18d9c58f1dd9acbd2d7",
".git/objects/bb/2ada189c898e7d82af6e52c42c0d8d76da2a7a": "3ef4e1c5cf4c801d07077a3cbcd3eb32",
".git/objects/c0/1a161135f809720f003bf6ad8aa9a49f9591f8": "0bd3eb6678ddd3496c0c9cd2a4c72518",
".git/objects/f6/cc06a0d471df5df1f35082b09b45fced798d05": "b3ed116bd3c82d600d635270058f4345",
".git/objects/56/563884ab68cf9fed05dc7c894380d1182834a7": "9007e9d78b4d3ba044fb7d9de433165c",
".git/objects/3c/60e262bc05fd5152cac6729090576f4daa5cb1": "83df972109a029af76a6f8fbfb660950",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/9e/12c1e0f980c4254d92107f2cdf32a84db483d7": "2c6994443eb2a154078dd68e6ec08a31",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "d51750c088c514598acbb1e6dec6ee4e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "3a89fbf457bc2e25769ea12fc25cbda0",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "65d18a9837aeb392a90de68393cdffdf",
".git/objects/79/ef9fb139e1806963dbb5b97707e3f1ba350eca": "17bf428d47eb2a71e94d0d17545e1a1c",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "0fc0a5b3bd7ab6741d66a114a90cf074",
".git/objects/53/ee92221e87e3c4de86d60b3e2456737da134b9": "3f63afe2dbfb4098e1e30d7838e46666",
".git/objects/13/12b26c4de40e2e068119655f081020e304e34d": "541540d7e9716f528c686f1376bc32c1",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "c51611bb14cd84d8f9410068ad6728af",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ba8846fecd8ee22025a4aef7e2fcd45c",
".git/objects/64/274d46d0988ab3751f32682e00a9558152f792": "0520254bd7da6de617bcc3a28147b678",
".git/objects/8b/cf2a642980a37a5070fc671b2d7e2153001f28": "d6604b79d425f1eea55f14ef2f7c5ab8",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "33121d4fda2c7d3071b038d9f116e342",
".git/objects/ed/1992a3dfd310b10f43bb6905419ca63d2ad070": "851052c24c86ca1c47e4b823109d7324",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "6d7d63ee29850883161729da29f76056",
".git/objects/1a/1df83b4323229667d7851a03fcfc711669855e": "401e31b913f6a7b321272be092348640",
".git/objects/1a/0bac5facf515fd31c5952abd2caa0f6a3f2bfc": "37b54f5dbda86265606046aad2d4e3c8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/6a/901db9f453967601d8795fc2cb738674f8b4b5": "3379ea4064dd89cca6d14ffa24f8a041",
".git/objects/c9/e5613bebde1eecaded48a8e720dbcbb3ae7393": "a618f119b55be4168615a9b03fb8264f",
".git/objects/81/fd2ce861c74ba1548ed41f557e18b4b344631d": "4b4e9da3692765031a574306459984ae",
".git/objects/e3/d787f027d87405cbc4b0ee14cb11f1298192ef": "a1d5872a629421ec4ef8f7b4c0ad8119",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "0257c94928374c6b8a920bcb473d8764",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "0e814c95743da9ea171bf1decf280426",
".git/objects/21/1666ea68b9ca08da3e8c7bcc4dd5542c0d6c78": "4bf22b132197f2e868dbaa29d03d1c38",
".git/objects/90/54eab0bafc14d89088dcda335dc83227ee2f5c": "35ef5a030de16cb5d880369cfa404712",
".git/objects/c2/30ab7c2e3fba8098a7bc40c1837dcee8fb4753": "c4b83e4664c0a9925db2e463e8fa256d",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "0e99633a6098bc621e976bd2117f2be1",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "fb4469623771e09349b55fdfac63c384",
".git/objects/40/ea886f30e28850797b8e2bf3dde96696cb38ae": "3ca448ce5a123f0faebd6464e4214a15",
".git/objects/f7/9da4df2a51d53ba978e6b590389b6e3719ec94": "8d6efbf2a839e116be3103917e4116cc",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "3278c0abd1b752fe3fa5b8db850d7d2e",
".git/objects/0e/00fcf7c306686d3344604c86e9dcf422b8f808": "1ead0a918cab079d3914b572cb2810ec",
".git/objects/28/24dd1b8285aacab4ef95325010bb98825115d9": "c19751f6e774ee651752497736256a4b",
".git/objects/3d/8dea3596cf35f6070a868d35c38d84738ffdb8": "9af5ae42e6452c25ccc3bc1247f789d0",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "17f03e66ae7084386b483f2a6fea5e57",
".git/objects/7d/39f824263e091823cb87d374c793e1003d9f9b": "16efd1704ea16175540c8eb95016a9e1",
".git/objects/3e/649baf984d7cd76aa864235456608a8fe86bdc": "8c07fc3c25ab65dbebd92190bdee13af",
".git/objects/dc/90609e96f08147b02058c2d9c97698d1e395c6": "a81ef129bfdf3c4dcf1734958a4b5fb1",
".git/objects/54/01fbab5c8dbda068ee32c3651184b2eed8493c": "81ece195d3a58401ba8fb0235e799aad",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/fb/d8e8216b4022649735328ab97dd5b8607764ec": "ba94db95cc09f34885b5e9bbdb2d7ffd",
".git/objects/9a/8eeff4ad0e924072c167283b5e3b5c356702db": "6256e0f469c17de661c8395b2d25aef8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/e2/6eb0f9d47cf654c1ee01449681c9f508c3e07e": "16d0eae94ad46396b836144b43a837f2",
".git/objects/e2/d4476b767e6a7bcdb97f1e1023b4f55856d187": "8f9c26dad760caf72f6534ecc4fc5e75",
".git/index": "d02d8523ca7a6b9c04ccb748c352741f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "3aefe4963fbe76d3e49bab296fca383e",
".git/config": "eaea82400747a6f1a9c32080ffcaddb6",
".git/ORIG_HEAD": "be8dc4942e473f68bab81277035dafa4",
".git/logs/refs/remotes/origin/HEAD": "3b05638b34bde37a2acc8bf09fa0484b",
".git/logs/refs/remotes/origin/main": "32ee957136c7b6c6e8420b67124d4029",
".git/logs/refs/heads/main": "b483da58336b1a3dfc16a04d2cf02c72",
".git/logs/HEAD": "5949a7ffcbaf33bc8c6692f88ead380a",
"icons/Icon-192.png": "2d70397ea8e1379d76f0f9040d75d840",
"icons/Icon-maskable-192.png": "2d70397ea8e1379d76f0f9040d75d840",
"icons/Icon-512.png": "2d70397ea8e1379d76f0f9040d75d840",
"icons/Icon-maskable-512.png": "2d70397ea8e1379d76f0f9040d75d840",
"main.dart.js": "59f735eda399c0340f9923d27e913f5e",
"flutter_bootstrap.js": "3aa60377e4a67f5afe41cf80e07be996",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"flutter.js": "888483df48293866f9f41d3d9274a779"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
