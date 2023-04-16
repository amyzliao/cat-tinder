import React from "react";
import '../Styling/signin.css';
import { setData, useUserState, signInWithGoogle, signOut } from '../database/firebase.js';
import { getCurrentUser } from '../database/firebase.js';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup } from 'firebase/auth';
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



// apiKey: 'AIzaSyB2FKP0oaAeLPa96h_SI7fFi4KEEaWrvxI',
// authDomain: "wordsmith-auth.firebaseapp.com",
// projectId: "wordsmith-auth",
// storageBucket: "wordsmith-auth.appspot.com",
// messagingSenderId: "315192723360",
// appId: "1:315192723360:web:733126e071a610640546c5",
// measurementId: "G-WHP68FVH93"
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Initialize Firebase


/*
"00000000000000000": {
                "uid": "00000000000000000",
                "profile": {
                    "name": "bob",
                    "email": "bob@gmail.com",
                    "phone": "123456789",
                    "description": "32 year old man who lives in a high-rise in new york."
                },
                "their_cats": [0, 1, 2],
                "liked_cats": [5, 6],
                "disliked_cats": [3]
            },


if(thisSession.hasOwnProperty('merchant_id')){

}
            */

const signInBehavior = async ( users ) => {
    // console.log('hit hit hit')
    // console.log(users);
    const response = await signInWithPopup(auth, provider);
    const currentUser = response.user;
    // console.log("fish");
    // console.log(response.user.uid);
    
    // if this person has not signed in before, add to users database
    // console.log("pip");
    // console.log(users.users.users.users);
    const usersFR = users.users.users.users;
    // console.log("squieak");
    // has this person signed in before?
    if (usersFR.hasOwnProperty(currentUser.uid)) {
        console.log("user not added, they already exist");
    } else {
        // make new user object
        const newUser = {
            "uid": currentUser.uid,
            "profile": {
                "name": currentUser.displayName,
                "email": currentUser.email,
                "phone": currentUser.phoneNumber,
                "description": ""
            },
            "their_cats": [],
            "liked_cats": [],
            "disliked_cats": []
        }
        // add it to database
        try {
            await setData(`/users/${currentUser.uid}`, newUser);
            console.log("user is new, added to database");
        } catch (error) {
            alert(error);
        }
    };
};

/*
const addNewUser = async ( users ) => {
    const [user] = useUserState();
    // check if user is not in our database
    if (!users.hasOwnProperty(user.uid)) {
        // make new user object
        const newUser = {
            "uid": user.uid,
            "profile": {
                "name": user.displayName,
                "email": user.email,
                "phone": user.phoneNumber,
                "description": ""
            },
            "their_cats": [],
            "liked_cats": [],
            "disliked_cats": []
        }
        // add new user to database
        try {
            await setData(`/users/${user.uid}`, newUser);
        } catch (error) {
            alert(error);
        }
    }
};*/

export const SignInButton = ( users ) => {
    return (
        <button
            onClick={() => signInBehavior( users={ users })}>
            Log in with Google
        </button>
    );
};

export const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut()}>
            Sign Out
        </button>
    );
};