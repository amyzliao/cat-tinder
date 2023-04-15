import React from "react";

const AddCat = () => {
    return (
    	<div class="add_cat">
            <form>
	            {/*Label for name*/}
	            <label>Name</label> <br />
	        	{/*Input for name*/}
	        	<input name="Name" /> <br />
	            
	            {/*Label for description*/}
	            <label>Description</label> <br />
	        	{/*Input for description*/}
	        	<input name="Description" /> <br />

	        	{/*Label for image*/}
	        	<label>Description</label> <br />
	        	{/*Input for image*/}
	        	<input name="Description" /> <br />

	        	{/*Label for contact info*/}
	        	<label>Contact Info</label> <br />
	        	{/*Input for contact info*/}
	        	<input name="Contact Info" /> <br />
            </form>
        </div>
    )
}

export default AddCat; 