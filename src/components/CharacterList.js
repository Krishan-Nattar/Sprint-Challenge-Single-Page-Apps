import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Button } from 'semantic-ui-react'

export default function CharacterList() {

  const [characters, setCharacters] = useState();
  const [page, setPage] = useState("");
  const [pagination, setPagination] = useState('');
  const [number, setNumber] = useState(1)

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${page}&page=${number}`)
      .then(response => {
        setCharacters(response.data.results);
        setPagination(response.data.info);
        // console.log(response.data.info)
      });
  }, [page, number]);
  if (!characters || !pagination) {
    return null;
  }

  let previous = pagination.prev;
  let next = pagination.next;
  console.log(previous);
  console.log(next);
  const onSearch = search => {
    setPage(search);
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div className="search-bar-section">
      <Button className="ui button">Previous</Button>
      
      <Button>Next</Button>
      </div>
      <section className="character-list grid-view">
        {characters.map(character => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </section>
    </div>
  );
}
