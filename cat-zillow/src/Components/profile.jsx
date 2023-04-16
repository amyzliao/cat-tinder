import React from "react";

import { setData, useUserState, signInWithGoogle, signOut } from '../database/firebase.js';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup } from 'firebase/auth';
import { getCurrentUser } from '../database/firebase.js';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import '../Styling/profile.css';


const set_description = async ( users ) => {
    const currentUser = getAuth().currentUser;
    const description = document.getElementById("description").value;
    try {
        await setData(`/users/${currentUser.uid}/profile/description`, description);
    } catch (error) {
        alert(error);
    }
    alert("Thank you! We received your submission. Feel free to edit at any time by coming back to this page.")
}

const Profile = (users) => {
    return (
        <div className="profile">
            <div className="tophalf">
                {/* maybe profile picture */}
                <h1>Please insert a blurb to introduce yourself.
                </h1>
                <h2>
                    This can be anything, ranging from
                    your gender, pronouns, how frequently you're home, and 
                    what kinds of cats you're looking for. 
                </h2>
                <div className="blurb">
                    <textarea id="description" rows="20" cols="100">
                    </textarea>
                </div>
                <button className="save" onClick={() => set_description( users={ users })}
                type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                    <div id="submit-text">Save</div>
                </button>
            </div>
            <div className="cats">
                {/* something */}
            </div>
        </div>
    )
}

export default Profile; 