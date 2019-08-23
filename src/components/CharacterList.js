import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState();
  const [page, setPage] = useState('')

  useEffect(()=>{
    axios
        .get(`https://rickandmortyapi.com/api/character/${page}`)
        .then(response=>{
            setCharacters(response.data.results);
        });
},[page]);
if(!characters){
  return null
}
const onSearch = (search) =>{
  // console.log(search);
  setPage(search);
}
  return (
    <div>
      <SearchForm  onSearch={onSearch}/>
    <section className="character-list grid-view">
      {characters.map(character=>{
        return <CharacterCard key={character.id} character={character}/>
      })}
    </section>
    </div>
  );
}
