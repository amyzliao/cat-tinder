import {React, useState} from "react";
import { useData, setData } from '../database/firebase.js';
import '../Styling/addcat.css';
import Upload from './image_upload.jsx';
import onFileUpload from './image_upload.jsx';

const add_new_cat = (cats, name, desc, photo, owner) => {
	const new_cat_id = cats.length;
	const newName = name;
	const newDesc = desc;
	const newPhoto = photo;
	
	if(newName != "" & newDesc != ""){
		alert("Cat Submitted")
		setData(`/cats/${new_cat_id}/cat_id`, new_cat_id);
		setData(`/cats/${new_cat_id}/name`, newName);
		setData(`/cats/${new_cat_id}/description`, newDesc);
		setData(`/cats/${new_cat_id}/photo`, newPhoto);

		//owner_id
		// setData(`/cats/${new_cat_id}/owner`, owner);
	}else{
		alert("Fill in All Cat Info!")
	}	
}

export const AddCat = ({cats, owner}) => {
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
	add_new_cat(cats, name, desc, owner)
	onFileUpload();
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

			{/*Label for image*/}
			<Upload/>
		</form>
			<button onClick={handleClick}>Submit</button>
    </div>
    
  );
}

export default AddCat; 