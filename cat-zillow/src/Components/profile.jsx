import React from "react";
import '../Styling/profile.css';
import { setData, useData} from '../database/firebase.js';
import { getAuth } from 'firebase/auth';

// DISPLAY Grid OF CATS
  const ListCats = (cats) => {
    return(
    <div>
        {/* {cats.map(cat => console.log(cat.liked_by.name))} */}
        { cats.map(cat => <Cat name ={cat.name} photo = {cat.photo} desc = { cat.desc} liked = {cat.liked_by}/>)}
    </div>
    );
};

  const Cat = ({name, photo, desc, liked}) => {
    // console.log(liked)
    return (
      <div class = "cat">
        <h3>Cat Name: { name }</h3>
        <div><img src={photo} height="200" width="200"></img> </div>
        <h5>Description: { desc }</h5>
        <h5>List of Interested Humans: {liked ? liked.map(human => human.name) : <></>}</h5>
      </div>
    );
  };


const set_description = async () => {
    const currentUser = getAuth().currentUser;
    const description = document.getElementById("description").value;
    try {
        alert("Description Submitted")
        await setData(`/users/${currentUser.uid}/profile/description`, description);
    } catch (error) {
        alert(error);
    }
}

const Profile = (cats) => {
    const currentUser = getAuth().currentUser;
    const [current_their_cats, loading, error] = useData(`/users/${currentUser.uid}/their_cats`);
      // if we fail to get data, error. 
    if (error) return <h1>{error}</h1>;
      // while data is loading, display this text
    if (loading) return <h1 class = "loading">Loading Cat Zillow</h1>;

    const cat_array = []
    // console.log(cats);
    console.log(current_their_cats)
    //take the cat_ids of their_cats and return an array of associated cats

    for (let cat_id in current_their_cats){
        const og_cat = cats.cats;
        cat_array.push(og_cat[cat_id]);
    }
    return (
        <div>
            <div className="tophalf">
                <h3>Please insert a blurb to introduce yourself. </h3>
                <div>This can be anything, ranging from your gender, pronouns, 
                    how frequently you're home, and what kinds of cats you're looking for. 
                </div> <br></br>
                <div className="blurb">
                    <textarea id="description" rows="10" cols="100">
                    </textarea>
                </div>
                <button className="save" onClick={() => set_description()}>
                    <div id="submit-text">Save</div>
                </button>
            </div>
            <div className="cats">
            <   h3>Your Cats</h3>
            {ListCats(cat_array)}
            </div>
        </div>
    )
}

export default Profile; 