import { getStorage } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-storage.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js"

const firebaseConfig = {
    apiKey: "AIzaSyD5fDHxKE7bHXi_9Fb4oiNZvRmLTh4C8-Q",
    authDomain: "projeto-web-83b0a.firebaseapp.com",
    projectId: "projeto-web-83b0a",
    storageBucket: "projeto-web-83b0a.appspot.com",
    messagingSenderId: "480106233385",
    appId: "1:480106233385:web:0366c36e4042f879152638"
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app }