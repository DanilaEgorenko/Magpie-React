import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth(app)
const accountInfo = signInWithPopup(auth, provider)
    .then(res => res.user)

export default accountInfo
