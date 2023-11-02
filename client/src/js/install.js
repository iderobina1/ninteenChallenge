const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.defferedPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener('click', async () => {
    buttonInstall.classList.toggle("hidden", false)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    buttonInstall.addEventListener("click", async() => {
        const promptEvent = window.defferedPrompt;
        if(!promptEvent){
            return;
        }

        promptEvent.prompt();

        window.defferedPrompt = null;
        
        buttonInstall.classList.toggle("hidden", true);
    });

    window.addEventListener("appinstalled", (e) => {
        winddow.defferedPrompt = null;
});
