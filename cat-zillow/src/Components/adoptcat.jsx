import React from "react";
import { useData, setData } from '../database/firebase.js';
import '../Styling/adoptcat.css'

const addToLikedCatList = async ( cat, user ) => {
    console.log(user); 
    try {
        await setData(`/users/${user.user_id}/liked_cats`, user.liked_cats.push(cat.cat_id));
    } catch (error) {
        alert(error);
    }
}

function AdoptCat( data ) {
    // data.users // json object of all our users
    // data.cats // json object of all our cats (araY)
    // data.users[0]
    console.log(data.users.users);
    console.log(data.users.users['00000000000000000']);
    return (
    	<div className="adopt_cat">
            <img className="adopt_cat_img" src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=636&h=424"
            // {useData('/cats/0/photo')} 
            alt="adopt a cat!" />
            <hr />
            {/* Check mark */}
            <button className="button" cat={data.users.cats[0]} user={data.users.users['00000000000000000']} 
                onClick={e => addToLikedCatList(e.target.cat, e.target.user)} >
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