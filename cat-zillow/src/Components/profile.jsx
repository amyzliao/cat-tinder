import React from "react";
import '../Styling/profile.css';

const Profile = () => {
    return (
        <div className="profile">
            <div className="tophalf">
                {/* maybe profile picture */}
                <h1>Please insert a blurb to introduce yourself. This can be anything, ranging from
                    your gender, pronouns, how frequently you're home, and what kinds of cats you're
                    looking for. 
                </h1>
                <div className="blurb">
                    <textarea rows="20" cols="100">
                    </textarea>
                </div>
                <button className="save">
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