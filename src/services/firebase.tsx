import { FirebaseOptions, getApps, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCZoE6Feq1nNa89t3OFi40zLhb8M_N51_M",
  authDomain: "login-fire-734d3.firebaseapp.com",
  projectId: "login-fire-734d3",
  storageBucket: "login-fire-734d3.appspot.com",
  messagingSenderId: "470431417157",
  appId: "1:470431417157:web:a6e964401e795d798cf42c",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

interface ILogin {
  user: string;
  password: string;
}

async function Login({ user, password }: ILogin) {
  return await signInWithEmailAndPassword(auth, user, password);
}

export { Login };
