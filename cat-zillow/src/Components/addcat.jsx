import {React, useState} from "react";
import { useData, setData } from '../database/firebase.js';

//given data.cats, data.users, cat name, cat description, owner id (hopefully from owner name)
const add_new_cat = (cats, photo, name, desc, owner_id, users) => {
	if (photo && name && desc){
	  //if owner_id is a valid user_id
	  for(const user in users){
		if (user.user_id == owner_id){
		  const new_cat_id = cats.length;
  
		  const new_their_cats = user.their_cats
		  new_their_cats.append(new_cat_id)
		//   setData(`/users/${owner_id}/their_cats`, new_their_cats);
  
		  setData(`/cats`, new_cat_id);
		  setData(`/cats/${new_cat_id}/name`, name);
		  setData(`/cats/${new_cat_id}/photo`, photo);
		  setData(`/cats/${new_cat_id}/desc`, desc);
		  setData(`/cats/${new_cat_id}/owner`, owner_id);
  
		  break;
		}
	  }
  
	}
}

export const AddCat = (cats, users) => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [photo, setPhoto] = useState('');
	const [updated, setUpdated] = useState('');
	const [updated1, setUpdated1] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChange1 = (event) => {
    setDesc(event.target.value);
  };

  const handleClick = () => {
    setUpdated(name);
	setUpdated1(desc);
	add_new_cat(cats, photo, updated, updated1, users)
  };

  return (
	<div class="add_cat">
		<form>
			<label>Name</label> <br />
			<input type="text" onChange={handleChange} value={name}/> <br />
			
			<label>Description</label> <br />
			<input type="text" onChange={handleChange1} value={desc}/> <br />

			{/*Label for image*/}
		</form>



			<h2>Name: {updated}</h2>
			<h2>Description: {updated1}</h2>

			<button onClick={handleClick}>Submit</button>

			{/* <button onClick={() => add_new_cat(cats, photo, updated, updated1, owner_id, users)}> Submit </button> */}
			{/* <button onClick={() => > Submit </button> */}
    </div>
    
  );
}

export default AddCat; 