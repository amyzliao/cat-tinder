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
	
	if(newName != "" && newDesc != "" && newPhoto != ""){
		alert("Cat Submitted")
		setData(`/cats/${new_cat_id}/cat_id`, new_cat_id);
		setData(`/cats/${new_cat_id}/name`, newName);
		setData(`/cats/${new_cat_id}/description`, newDesc);
		setData(`/cats/${new_cat_id}/photo`, newPhoto);

		//owner_id
		setData(`/cats/${new_cat_id}/owner`, currentUser.uid);
	}else{
		alert("Fill in All Cat Info!")
	}	
}

export const AddCat = ({cats}) => {
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [photo, setPhoto] = useState('');
	const [setUpdated] = useState('');
	const [setUpdated1] = useState('');
	const [setUpdated2] = useState('');

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
			<div>Please input the URL of the image of the cat.</div>
			<input type="text" onChange={handleChange2} value={photo}/> <br /><br />
			
		</form>
			<button onClick={handleClick}>Submit</button>
    </div>
    
  );
}

export default AddCat; 