// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPZMwLnFOWp6ArdY50uJQu7wbJuXeOrt0",
  authDomain: "cat-tinder-a0de9.firebaseapp.com",
  databaseURL: "https://cat-tinder-a0de9-default-rtdb.firebaseio.com",
  projectId: "cat-tinder-a0de9",
  storageBucket: "cat-tinder-a0de9.appspot.com",
  messagingSenderId: "74762937901",
  appId: "1:74762937901:web:69bba35adb389ff4dbfaa4",
  measurementId: "G-JHE8BFKXP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app);

export const useData = (path) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path]);
  
    return [data, loading, error];
};

export const setData = (path, value) => (
    set(ref(database, path), value)
);