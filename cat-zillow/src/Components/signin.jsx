import React from "react";
import '../Styling/signin.css';
import { signInWithGoogle, signOut } from '../database/firebase.js';


export const SignInButton = () => {
    return (
<<<<<<< HEAD
        <div className="signin_page">
            <h1>Log in with Gmail!</h1>
        </div>
    )
}
=======
        <button
            onClick={() => signInWithGoogle()}>
            Sign In
        </button>
    );
};
>>>>>>> a9a440affb5188929e657448e5d880d98b8823be

export const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut()}>
            Sign Out
        </button>
    );
};