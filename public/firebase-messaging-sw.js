importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js");

firebase.initializeApp({
    messagingSenderId: "669997856664",
    projectId: "fir-messaging-app-6cf27",
    apiKey: "AIzaSyCn99k9ziGlLnhctOGR81mha2siu5oIRVs",
    appId: "1:669997856664:web:d0f1fe70790c0ef0da9ded"
})

const messaging = firebase.messaging()

messaging
    .requestPermission()
    .then(function () {
        MsgElem.innerHTML = "Notification permission granted."
        console.log("Notification permission granted.");

        // get the token in the form of promise
        return messaging.getToken()
    })
    .then(function (token) {
        // print the token on the HTML page
        TokenElem.innerHTML = "Device token is : <br>" + token
    })
    .catch(function (err) {
        ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
        console.log("Unable to get permission to notify.", err);
    });

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});