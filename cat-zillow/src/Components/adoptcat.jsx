import React from "react";
import { useData, setData } from '../database/firebase.js';
import '../Styling/adoptcat.css';
import { getAuth } from 'firebase/auth';


const add_to_liked_list = async ( cat, data ) => {
    const new_id = cat.cat_id;
    const currentUser = getAuth().currentUser;
    const uid = currentUser.uid; 
    try {
        //if (Object.hasOwn(currentUser.uid, "liked_cats")) {
        // if (currentUser.uid.hasOwnProperty("liked_cats")) {
            // console.log(currentUser.uid.liked_cats)
            // console.log("do we get inside this if statement");
            console.log(currentUser.uid.liked_cats);
            const len = currentUser.uid.liked_cats.length; 
            setData(`/users/${currentUser.uid}/liked_cats/${len}`, new_id);
            console.log("Does this also work?");
        // } else {
        // }
    } catch(error) {
        alert(error);
        await setData(`/users/${currentUser.uid}/liked_cats`, [new_id]);
    }
}

const add_to_disliked_list = async ( cat, data ) => {
    const new_id = cat.cat_id;
    const currentUser = getAuth().currentUser;
    //const len = data.users.uid.disliked_cats.length;
    try {
        await setData(`/users/${currentUser.uid}/disliked_cats`, [new_id]);
        //setData(`/users/${uid}/disliked_cats/${len}`, data.users.uid.disliked_cats.push(new_id));
    } catch(error) {
        alert(error);
    }
}

// like button
const LikeButton = () => {
    return (
        <img className="button_img" 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Eo_circle_light-green_checkmark.svg" 
                alt="Like this cat" />
    );
};

// dislike button
const DislikeButton = () => {
    return (
        <img className="button_img" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/150px-Red_X.svg.png?20070510203255" 
            alt="Dislike this cat" />
    );
};

// unsure button
const UnsureButton = () => {
    return (
        <img className="button_img" 
            src="https://as1.ftcdn.net/jpg/01/09/84/42/220_F_109844212_NnLGUrn3RgMHQIuqSiLGlc9d419eK2dX.jpg" 
            alt="I don't know!" />
    );
};


// display a cat's profile
const CatProfile = ({ cat, users }) => {
    // console.log("users: ");
    // console.log(users);
    const owner_uid = cat.owner; // uid of its owner
    // console.log("cat's owner");
    // console.log(owner_uid);
    const ownerName = users[`${owner_uid}`].profile.name;
    // console.log("ownername");
    // console.log(ownerName);
    const ownerEmail = users[`${owner_uid}`].profile.email;
    // console.log("owneremaail");
    // console.log(ownerEmail);

    return (
        <div className="adopt_cat">
            <h1>Adopt this cat?</h1>
            <img src={ cat.photo }/>
            <h5>Name: { cat.name }</h5>
            <h5>Description: { cat.description }</h5>
            <h5>Contact: { ownerName } at { ownerEmail }</h5>
            <LikeButton/>
            <UnsureButton/>
            <DislikeButton/>
        </div>
    );
};


const AdoptCat = ({data}) => {
    // console.log("HERE");
    // console.log(data);
    // pick a random cat from this array
    const catArr = data.cats;
    // console.log("t");
    // console.log(catArr);
    // console.log("0 elem");
    // console.log(catArr[0])
    return (
        <CatProfile cat={ catArr[0] } users={ data.users }/>
    )
    // CatProfile
    // console.log(data);
    // // console.log(data);
    // // const currentUser = getAuth().currentUser;
    // // currentUser.uid;
    // const cat = data.cats[0];
    
    // const liked_list = (event) => {
    //     add_to_liked_list(cat, data);
    // }

    // const disliked_list = (event) => {
    //     add_to_disliked_list(cat, data);
    // }

    // return (
    // 	<div className="adopt_cat">
    //         <img className="adopt_cat_img" src={useData('/cats/0/photo')} alt="adopt a cat!" />
    //         <hr />
    //         {/* Check mark */}
    //         <button className="button" onClick={liked_list}>
    //             <img className="button_img" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Eo_circle_light-green_checkmark.svg" alt="Check mark" />
    //         </button>
    //         {/* Question mark */}
    //         <button className="button">
    //             <img className="button_img" src="https://as1.ftcdn.net/jpg/01/09/84/42/220_F_109844212_NnLGUrn3RgMHQIuqSiLGlc9d419eK2dX.jpg" alt="Question mark" />
    //         </button>
    //         {/* X */}
    //         <button className="button" onClick={disliked_list}>
    //         <img className="button_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/150px-Red_X.svg.png?20070510203255" alt="Big Red X" />
    //         </button>
    //     </div>
    // )
};

export default AdoptCat; 