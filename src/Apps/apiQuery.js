import io from 'socket.io-client';
const host = window.location.hostname;
export const header = { url: `http://${host}:9200` };
export const socket = io(`http://${host}:3002`);
export function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("Votre navigateur ne supporte pas l'API notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Sfile serveur", {
            icon: `http://${host}:9200/logo.jpg`,
            body: `Nouveau(x) fichier(s) reçu(s)`,
            lang: 'fr-FR',
        })
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Sfile serveur", {
                    icon: `http://${host}:9200/logo.jpg`,
                    body: `Nouveau(x) fichier(s) reçu(s)`,
                    lang: 'fr-FR',
                })
            }
        });
    }

    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
}