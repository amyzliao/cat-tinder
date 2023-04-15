import React from "react";
import '../Styling/signin.css';
import { signInWithGoogle, signOut } from '../database/firebase.js';


export const SignInButton = () => {
    return (
        <button
            onClick={() => signInWithGoogle()}>
            Sign In
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