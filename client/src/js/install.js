const buttonInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // TODO: Implement a click event handler on the `buttonInstall` element
    buttonInstall.classList.remove("hidden"); // Use 'remove' instead of 'toggle' to always show the button
});

// TODO: Add a handler for the `appinstalled` event
buttonInstall.addEventListener("click", async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    buttonInstall.classList.add("hidden"); // Use 'add' to hide the button
});

window.addEventListener("appinstalled", (e) => {
    window.deferredPrompt = null;
});
