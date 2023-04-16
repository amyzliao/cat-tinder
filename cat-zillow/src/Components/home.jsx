import React from "react";
import '../Styling/home.css';

const Home = () => {
    return (
        <div className="home">
            <button className = 'profile'>
                <a className='wtf' href="/profile">
                    <img src="https://img.favpng.com/12/2/15/user-profile-computer-icons-button-png-favpng-93N16Mhz23EU2tKQrjLDMktYh.jpg" height="20%" width="20%" />
                </a>   
            </button>

            <div className="adopt-btn">
                <a className="btn1" href="/adoptcat">
                    <div id="submit-text">Adopt a Cat</div>              
                </a>
            </div>
            <div className="add-btn">
                <a className='btn2' href="/addcat">
                    <div id="submit-text">Add a Cat</div>
                </a>
            </div>   
        </div>
    )
}

export default Home; 