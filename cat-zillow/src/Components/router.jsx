import React from "react";
import '../Styling/home.css';
import Profile from './profile.jsx';
import AdoptCat from './adoptcat.jsx';
import AddCat from './addcat.jsx';

import {BrowserRouter, Routes, Route} from "react-router-dom";

const Router = () => {
    <div className="router">
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/adoptcat" element={<AdoptCat />}/>
                <Route path="/addcat" element={<AddCat />}/>
            </Routes>
        </BrowserRouter>
    </div>
}

export default Router; 
