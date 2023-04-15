import { useData, setData } from './database/firebase.js';
import React from "react";

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
      <h5>Description: { cat.description }</h5>
    </div>
  );
};


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
      <ListUsers users={ data.users }></ListUsers>
      <ListCats cats={ data.cats }></ListCats>
    </div>
  );
}

export default App;
