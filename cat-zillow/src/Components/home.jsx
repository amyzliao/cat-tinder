import React from "react";
import '../Styling/home.css';
import Profile from './profile.jsx';

import {BrowserRouter, Routes, Route} from "react-router-dom";

const Home = () => {
    return (
        <div class="home">
            <BrowserRouter>
                <Routes>
                    <Route path="/profile" element={<Profile />}/>
                </Routes>
            </BrowserRouter>
            <button className = 'profile'>
                    <div id="submit-text">Profile</div>
            </button>
            <div className="adopt-btn">
                <button className="btn1">
                    <div id="submit-text">Adopt a Cat</div>              
                </button>
            </div>
            <div className="add-btn">
                <button className = 'btn2'>
                    <div id="submit-text">Add a Cat</div>
                </button>
            </div>   
        </div>
    )
}

export default Home; 