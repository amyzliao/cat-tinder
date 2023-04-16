import React from "react";
import { useData, setData } from '../database/firebase.js';
import '../Styling/adoptcat.css'

const add_to_liked_list = async ( cat, user, user_id ) => {
    console.log(user.liked_cats);
    const new_id = cat.cat_id;
    const len = user.liked_cats.length; 
    try {
        console.log("hey");
        setData(`/users/${user_id}/liked_cats/${len}`, new_id);
    } catch(error) {
        alert(error);
    }
}

const AdoptCat = ({data}) => {
    console.log(data);
    // console.log(data);
    const user_id = '00000000000000000';
    const user = data.users[user_id];
    const cat = data.cats[0];
    
    const liked_list = (event) => {
        add_to_liked_list(cat, user, user_id);
    }

    return (
    	<div className="adopt_cat">
            <img className="adopt_cat_img" src={useData('/cats/0/photo')} alt="adopt a cat!" />
            <hr />
            {/* Check mark */}
            <button className="button" onClick={liked_list}>
                <img className="button_img" src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Eo_circle_light-green_checkmark.svg" alt="Check mark" />
            </button>
            {/* Question mark */}
            <button className="button">
                <img className="button_img" src="https://as1.ftcdn.net/jpg/01/09/84/42/220_F_109844212_NnLGUrn3RgMHQIuqSiLGlc9d419eK2dX.jpg" alt="Question mark" />
            </button>
            {/* X */}
            <button className="button">
            <img className="button_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/150px-Red_X.svg.png?20070510203255" alt="Big Red X" />
            </button>
        </div>
    )
}

export default AdoptCat; 