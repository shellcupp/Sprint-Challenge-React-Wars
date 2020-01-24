import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CardInfo() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
      axios.get('https://swapi.co/api/people/?page=1')
      .then(response => {
          console.log(response.data.results)
          setCharacter(response.data.results)
      })
      .catch(err => {
          console.log('no data', err);
      })
  }, []);

  return (
      <div>
          {character.map((person, index) => {
              return <CharacterCard
              key={index}
              name={person.name}
              birth={person.birth_year}
              height={person.height}
              hair={person.hair_color}
              eyes={person.eye_color} />
          })}
      </div>
  )
}
