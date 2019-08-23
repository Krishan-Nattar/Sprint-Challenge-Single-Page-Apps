import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState();

  useEffect(()=>{
    console.log('characterlist')
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response=>{
            console.log('response',response.data.results);
            setCharacters(response.data.results);
        });
},[]);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
