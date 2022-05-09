importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyDkP8LeGANbsy3z0OiQXln_THepQAtYMZ0",
  authDomain: "iic3585-g4-e4.firebaseapp.com",
  projectId: "iic3585-g4-e4",
  storageBucket: "iic3585-g4-e4.appspot.com",
  messagingSenderId: "216241501064",
  appId: "1:216241501064:web:b8540bbf99960d3e52403d"
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const notificationTitle = payload.title;
    const notificationOptions = {
        body: payload.body,
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});