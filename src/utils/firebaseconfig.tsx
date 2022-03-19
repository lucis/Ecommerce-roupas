import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBstSwfkzW4IV05ldc-TmO2a7OFTDPdTLA",
    authDomain: "ecommerce-roupas.firebaseapp.com",
    projectId: "ecommerce-roupas",
    storageBucket: "ecommerce-roupas.appspot.com",
    messagingSenderId: "707965924587",
    appId: "1:707965924587:web:4f23acd3832e4244a9baae"
};

export const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)

export const providerGoogle = new GoogleAuthProvider()

export const signinWithGoogle = () => {
    signInWithPopup(auth, providerGoogle).
        then((res) => { console.log(res) }).
        catch((error) => { console.log(error) })
}