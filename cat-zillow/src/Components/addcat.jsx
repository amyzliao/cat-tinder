import {React, useState} from "react";
import { useData, setData } from '../database/firebase.js';
import '../Styling/addcat.css';
import { getAuth } from 'firebase/auth';

const add_new_cat = (cats, name, desc, photo) => {
	const new_cat_id = cats.length;
	const newName = name;
	const newDesc = desc;
	const newPhoto = photo;
	const currentUser = getAuth().currentUser;
	const newArr = [];
	
	if(newName != "" && newDesc != "" && newPhoto != ""){
		alert("Cat Submitted")
		setData(`/cats/${new_cat_id}/cat_id`, new_cat_id);
		setData(`/cats/${new_cat_id}/name`, newName);
		setData(`/cats/${new_cat_id}/description`, newDesc);
		setData(`/cats/${new_cat_id}/photo`, newPhoto);

		//owner_id
		setData(`/cats/${new_cat_id}/owner`, currentUser.uid);

		setData(`/users/${currentUser.uid}/their_cats/${new_cat_id}`, new_cat_id);

	}else if(newName == ""){
		alert("Fill in the Cat's Name!")
	}else if(newDesc == ""){
		alert("Fill in the Description of the Cat!")
	}else if (newPhoto == ""){
		alert("Paste the Photo URL of the Cat!")
	}
	else{
		alert("Fill in All Cat Info!")
	}	
}

export const AddCat = ({cats}) => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [photo, setPhoto] = useState('');
	const [updated, setUpdated] = useState('');
	const [updated1, setUpdated1] = useState('');
	const [updated2, setUpdated2] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChange1 = (event) => {
    setDesc(event.target.value);
  };

  const handleChange2 = (event) => {
    setPhoto(event.target.value);
  };

  const handleClick = () => {
    setUpdated(name);
	setUpdated1(desc);
	setUpdated2(photo);
	add_new_cat(cats, name, desc, photo)
  };

  return (
	<div class="add_cat">
		<h1>Add Cat Form</h1>
		<form>
			<label>Name of Cat</label> <br />
			<input type="text" onChange={handleChange} value={name}/> <br /><br />
			
			<label>Description</label> <br />
			<div>State age, gender, breed, medical history, and any other relevant information.</div>
			<input type="text" onChange={handleChange1} value={desc}/> <br /><br />

			<label>Image of Cat URL</label> <br />
			<div>Please input the Sharing URL of the Google Drive image of the cat. </div><br/>
			<div>1. Upload your picture on your Google Drive.</div>
			<div>2. Copy the Sharing Link of the Image. Make sure anyone with the link can view it.</div>
			<div>3. Paste the sharing URL of the image below.</div><br/>
			<input type="text" onChange={handleChange2} value={photo}/> <br /><br />
			
		</form>
			<button onClick={handleClick}>Submit</button>
    </div>
    
  );
}

export default AddCat; 