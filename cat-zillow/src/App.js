import { useData, setData } from './database/firebase.js';
import React from "react";
import logo from './logo.svg';
import Signin from './Components/signin';
import Home from './Components/home';
import './App.css';
import AdoptCat from './Components/adoptcat.jsx';

// DISPLAY LIST OF USERS
const ListUsers = ({ users }) => (
  <div>
  { users.map(user => <User user={ user } />) }
  </div>
);
const User = ({user}) => {
  return (
    <div>
      <h3>User ID: { user.user_id }</h3>
      <h5>Name: { user.profile.name }</h5>
      <h5>Description: { user.profile.description }</h5>
    </div>
  );
};

// DISPLAY LIST OF CATS
const ListCats = ({ cats }) => (
  <div>
  { cats.map(cat => <Cat cat={ cat } />) }
  </div>
);
const Cat = ({cat}) => {
  return (
    <div>
      <h3>Cat ID: { cat.cat_id }</h3>
      <h5>Name: { cat.name }</h5>
      <button onClick={() => setName(cat, getNewName(cat))}>Change Name</button>
      <h5>Description: { cat.description }</h5>
    </div>
  );
};

// CHANGE A CAT'S NAME
// prompts user for a new name
const getNewName = cat => {
  const newName = prompt('Enter new cat name', cat.name);
  return newName;
};
// update the database with new name
const setName = async (cat, newName) => {
  if (newName && window.confirm(`Change ${cat.name} to ${newName}?`)) {
    try {
      await setData(`/cats/${cat.cat_id}/name`, newName);
    } catch (error) {
      alert(error);
    }
  }
};

/*
const Pixel = ({ pixel }) => {
  return (
    <div>
      <div>
        location: { pixel.id } ; color: { pixel.color }
      </div>
      <button onClick={() => setColor(pixel, getNewColor(pixel))}>Change color</button>
      <button onClick={() => setId(pixel, getNewId(pixel))}>Change id</button>
    </div>
  );
};*/

function App() {
  // this gets the data
  const [data, loading, error] = useData('/');
  console.log(data);
  // if we fail to get data, error. 
  if (error) return <h1>{error}</h1>;
  // while data is loading, display this text
  if (loading) return <h1>Loading Cat Zillow</h1>;

  
  return (
    <div className="App">
      <AdoptCat />
      <ListUsers users={ data.users }></ListUsers>
      <ListCats cats={ data.cats }></ListCats>

    </div>
  );
}

export default App;