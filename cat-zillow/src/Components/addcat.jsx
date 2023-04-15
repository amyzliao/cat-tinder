import React from "react";

const AddCat = () => {
    return (
    	<div class="add_cat">
            <form>
	            {/*Label for name*/}
	            <label>Name</label>
	        	{/*Input for name*/}
	        	<input name="Name" />
	            
	            {/*Label for description*/}
	            <label>Description</label>
	        	{/*Input for description*/}
	        	<input name="Description" />

	        	{/*Label for image*/}
	        	<label>Description</label>
	        	{/*Input for image*/}
	        	<input name="Description" />

	        	{/*Label for contact info*/}
	        	<label>Contact Info</label>
	        	{/*Input for contact info*/}
	        	<input name="Contact Info" />
            </form>
        </div>
    )
}

export default AddCat; 