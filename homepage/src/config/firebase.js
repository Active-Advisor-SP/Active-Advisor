import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth, 
        createUserWithEmailAndPassword, 
        updateCurrentUser,
        signInWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUjZAEqZd-IrDBtpTfcWa3x8SzYiQiqDY",
    authDomain: "active-advisor-ac4d4.firebaseapp.com",
    projectId: "active-advisor-ac4d4",
    storageBucket: "active-advisor-ac4d4.appspot.com",
    messagingSenderId: "428692147169",
    appId: "1:428692147169:web:cbb503aa70f127f66960a0"
  };

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  export const auth = getAuth(app);

  export const signUp = async ( name, email, password) => {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateCurrentUser(auth, {displayName: name});
  }

  export const signIn = async ( email, password) => {
    await signInWithEmailAndPassword(auth, email, password)

  }
  