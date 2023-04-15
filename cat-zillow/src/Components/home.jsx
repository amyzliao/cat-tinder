import React from "react";
import '../Styling/home.css';

const Home = () => {
    return (
        <div class="home">
            <button className = 'profile'>
                <a className="P" href = "/">
                        <div id="submit-text">Profile</div>
                </a>
            </button>
            <div className="adopt-btn">
                <button>
                    <a className="adopt" href = "/">
                        <div id="submit-text">Adopt a Cat</div>
                    </a>               
                </button>
            </div>
            
            <button className = 'add-btn'>
                <a className="add" href = "/">
                        <div id="submit-text">Add a Cat</div>
                </a>
            </button>
        </div>
    )
}

export default Home; 