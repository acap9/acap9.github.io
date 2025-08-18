importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Replace these with your own Firebase config keys...
const firebaseConfig = {
  apiKey: "AIzaSyDp0v-eDWjD0rZs9zy8QaMQ0NYHVfZsvX4",
  authDomain: "acap-r9.firebaseapp.com",
  projectId: "acap-r9",
  storageBucket: "acap-r9.appspot.com",
  messagingSenderId: "366177653484",
  appId: "1:366177653484:web:dd194149bb7aa8b0cbcbc9",
  measurementId: "G-YTSF5EK88M"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  // read url from payload.data.url, fallback to fcmOptions.link if needed
  const link = payload.data?.url || payload.fcmOptions?.link;

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./images/logos/amia-logo.png",
    data: { url: link },
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  const url = event.notification.data?.url || "/"; // optional fallback
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === url && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
