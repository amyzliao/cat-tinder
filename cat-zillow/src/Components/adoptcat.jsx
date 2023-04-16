import React, { useState }from "react";
import { useData, setData } from '../database/firebase.js';
import '../Styling/adoptcat.css';
import { getAuth } from 'firebase/auth';

/*
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
*/


const AdoptCat = ({ data }) => {
    const [I, SetI] = useState(0);

    // initialize values
    const num_cats = data.cats.length;
    const catArr = data.cats;
    const currentUser = getAuth().currentUser;

    // refresh
    const refresh = () => {
        console.log("refreshed");
        if (I >= num_cats - 1) {
            SetI(0);
            console.log("i is now");
            console.log(I);
        } else {
            SetI(I + 1);
            console.log("i is now");
            console.log(I);
        };
        // TODO: check that the cat isn't in liked or disliked
        console.log("refresh returns");
    };

    // display a cat's profile
    const CatProfile = ({ cat }) => {
        const users = data.users;
        const owner_uid = cat.owner; // uid of its owner
        const ownerName = users[`${owner_uid}`].profile.name;
        const ownerEmail = users[`${owner_uid}`].profile.email;
        const cat_id = cat.cat_id;

        return (
            <div className="adopt_cat">
                <h1>Adopt this cat?</h1>
                <img src={ cat.photo }/>
                <h5>ID: { cat.cat_id }</h5>
                <h5>Name: { cat.name }</h5>
                <h5>Description: { cat.description }</h5>
                <h5>Contact: { ownerName } at { ownerEmail }</h5>
                <LikeButton cat_id={ cat_id } />
                <UnsureButton />
                <DislikeButton cat_id={ cat_id } />
            </div>
        );
    };
// BOOTSTRAP CAROUSEL TEMPLATE!!!!: 
{/* <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
    // like button
    const LikeButton = ({ cat_id }) => {
        return (
            <button className="button" onClick={() => addToList( cat_id, "liked_cats" )}>
                <img className="button_img" 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Eo_circle_light-green_checkmark.svg" 
                        alt="Like this cat" />
            </button>
        );
    };

    // dislike button
    const DislikeButton = ({ cat_id }) => {
        return (
            <button className="button" onClick={() => addToList( cat_id, "disliked_cats" )}>
                <img className="button_img" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/150px-Red_X.svg.png?20070510203255" 
                    alt="Dislike this cat" />
            </button>
        );
    };

    // unsure button
    const UnsureButton = () => {
        return (
            <button className="button" onClick={() => refresh()}>
                <img className="button_img" 
                    src="https://as1.ftcdn.net/jpg/01/09/84/42/220_F_109844212_NnLGUrn3RgMHQIuqSiLGlc9d419eK2dX.jpg" 
                    alt="I don't know!" />
            </button>
        );
    };

    const addToList = async ( cat_id, listName ) => {
        refresh();
        let newArr = [];
        if (currentUser.hasOwnProperty(listName)) {
            // we append to the array
            newArr = currentUser[`${listName}`].push(cat_id);
        } else {
            // we make brand new array
            newArr = [cat_id];
        }
        try {
            await setData(`/users/${currentUser.uid}/${listName}`, newArr);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <CatProfile cat={ catArr[I] }/>
    );
    
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