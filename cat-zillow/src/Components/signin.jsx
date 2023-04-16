import React from "react";
import '../Styling/signin.css';
import { setData, useUserState, signInWithGoogle, signOut } from '../database/firebase.js';
import { getCurrentUser } from '../database/firebase.js';

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

async function signInBehavior ( users ) {
    signInWithGoogle();
    const currentUser = getCurrentUser();
    // if this person has not signed in before, add to users database
    if (!users.hasOwnProperty(currentUser.uid)) {
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
        } catch (error) {
            alert(error);
        }
    }
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

export const SignInButton = () => {
    return (
        <button
            onClick={() => signInBehavior()}>
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