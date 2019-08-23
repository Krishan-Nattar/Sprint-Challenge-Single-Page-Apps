import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState();

  useEffect(()=>{
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response=>{
            setCharacters(response.data.results);
        });
},[]);
if(!characters){
  return null
}
  return (
    <section className="character-list grid-view">
      {characters.map(character=>{
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}
