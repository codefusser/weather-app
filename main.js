//register the service worker

if ('serviceWorker' in navigator)
{
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(reg => {
            console.log("SW registered as: ", reg);
        }).catch(err => {
            console.log("an error was encountered!:", err);
        });
    });
}