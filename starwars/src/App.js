import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from './CharacterCard';

const App = () => {
  const [person, setPerson] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
axios.get(`https://swapi.co/api/people/`)
.then(response => {
  const Characters = response.data.person;
  console.log(response.data);
  setPerson(response.data)
})
.catch(error => {
  console.log("data was not returned", error);
});
}, []);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
