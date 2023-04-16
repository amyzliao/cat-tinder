import React from "react";
import '../Styling/profile.css';
import { setData, useUserState, signInWithGoogle, signOut } from '../database/firebase.js';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup } from 'firebase/auth';
import { getCurrentUser } from '../database/firebase.js';

const set_description = async ( users ) => {
    const currentUser = getAuth().currentUser;
    const description = document.getElementById("description").value;
    try {
        await setData(`/users/${currentUser.uid}/profile/description`, description);
    } catch (error) {
        alert(error);
    }
}

const Profile = (users) => {
    return (
        <div className="profile">
            <div className="tophalf">
                {/* maybe profile picture */}
                <h1>Please insert a blurb to introduce yourself. This can be anything, ranging from
                    your gender, pronouns, how frequently you're home, and what kinds of cats you're
                    looking for. 
                </h1>
                <div className="blurb">
                    <textarea id="description" rows="20" cols="100">
                    </textarea>
                </div>
                <button className="save" onClick={() => set_description( users={ users })}>
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