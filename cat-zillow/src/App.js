import { useData, setData, useUserState, getCurrentUser } from './database/firebase.js';
import React from "react";
import Profile from './Components/profile';
import { SignInButton, SignOutButton } from './Components/signin';
import './App.css';
import AdoptCat from './Components/adoptcat.jsx';


// DISPLAY LIST OF USERS
const ListUsers = ({ users }) => (
  <div>
  { Object.values(users).map(user => <User user={ user } />) }
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
      <h5>Photo: { cat.photo }</h5>
      <button onClick={() => setName(cat, getNewName(cat))}>Change Photo</button>
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
      await setData(`/cats/${cat.cat_id}/photo`, newName);
    } catch (error) {
      alert(error);
    }
  }
};

// ONLY DISPLAY THE STUFF IF THE USER IS LOGGED IN
const LoggedIn = ({ user, data }) => {
  return (
    <div>
      <h4>You are signed in. Your name is { user.displayName } and your email is { user.email }. </h4>
      <SignOutButton/>
      <ListUsers users={ data.users }></ListUsers>
      <ListCats cats={ data.cats }></ListCats>
      <Profile />
    </div>
  )
};
const LoggedOut = () => {
  return (
    <div>
      <h4>You are not logged in. Log in to start using cat zillow!</h4>
      <SignInButton/>
    </div>
  )
};

function App() {
  // the logged in user
  const [user] = useUserState();
  console.log("user:");
  console.log(user);

  const auth = getCurrentUser();
  console.log("auth");
  console.log(auth);

  // this gets the data
  const [data, loading, error] = useData('/');
  console.log(data);
  // if we fail to get data, error. 
  if (error) return <h1>{error}</h1>;
  // while data is loading, display this text
  if (loading) return <h1>Loading Cat Zillow</h1>;
  
  return (
    <div className="App">
      { user ? <LoggedIn user={ user } data={ data }/> : <LoggedOut/> }
    </div>
  );
}

export default App;