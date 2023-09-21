import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_LEfZZ-RkhnUngyeogwJpVq3cIj442io",
    authDomain: "image-gallery-44466.firebaseapp.com",
    projectId: "image-gallery-44466",
    storageBucket: "image-gallery-44466.appspot.com",
    messagingSenderId: "566287637298",
    appId: "1:566287637298:web:6c70fb36526d437eee552b",

}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }