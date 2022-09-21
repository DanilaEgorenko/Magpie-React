import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBY7x4GhWxB9-d2dDVejFnCaJWIXoQOCko",
    authDomain: "chat-2454e.firebaseapp.com",
    databaseURL: "https://chat-2454e.firebaseio.com",
    projectId: "chat-2454e",
    storageBucket: "chat-2454e.appspot.com",
    messagingSenderId: "96916330062",
    appId: "1:96916330062:web:7274907c620e0ba9e1d51f",
}
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth(app)
const accountInfo = signInWithPopup(auth, provider)
    .then(res => res.user)

export default accountInfo
