//add event listeners for install, activate and fetch events for the service worker

//cache all resources with a list

const cacheName = 'cache-v1';
const resourcesToPrecache = [
    '/',
    'index.html',
    'stylesheet.css'
];


//basic service worker script
self.addEventListener('install', (event) => {
    console.log("installed");
    //define the installation
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(resourcesToPrecache);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log("activated");
});

self.addEventListener('fetch', (event) => {
    console.log("data fetched" + event.request.URL);
    //define cache-first approach
    event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        return cachedResponse || fetch(event.request);
    })
    )
});


if ('serviceWorker' in navigator)
{
    window.addEventListener('load', (e) =>{
        
    });
}


//code to prompt users to add app to home screen
/* let deferredPrompt;

 window.addEventListener("beforeinstallprompt", e => {
     //to prevent auto display prompt to install
     e.preventDefault();

     deferredPrompt = e;
     //add a block button element to the promt
     btnAdd.style.display = 'block';
 });
//show the prompt
btnAdd.addEventListener('click', (event) => {
    //callable once
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome  === 'accepted')
        {
            console.log("user accepted the A2HS prompt");
        }

        deferredPrompt = null;
    })
});

//confirming installation
window.addEventListener("appinstalled", (event) => {
    app.logEvent('a2hs', 'installed');
});*/