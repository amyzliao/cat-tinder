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
			<label> Cat Name</label>
			<div class="input-group w-25 mx-auto">
  				<input onChange={handleChange} value={name} type="text" class="form-control" placeholder="" aria-label="Cat Name" aria-describedby="basic-addon1" />
			</div>

			<label> Description</label>
			<div class="input-group w-25 mx-auto">
  				<input onChange={handleChange1} value={desc} type="text" class="form-control" placeholder="State age, gender, breed, medical history, and any other info." aria-label="Cat Name" aria-describedby="basic-addon1" />
			</div>
			
			<label> Cat URL </label>
			<div class="input-group w-25 mx-auto">
  				<input onChange={handleChange2} value={photo} type="text" class="form-control" placeholder="URL for an image of your cat!" aria-label="Cat URL" aria-describedby="basic-addon1" />
			</div>

			{/* <input type="text" onChange={handleChange2} value={photo}/> <br /><br /> */}
			
			<button class="btn btn-primary" onClick={handleClick}>Submit</button>
    </div>
    
  );
}

export default AddCat; 