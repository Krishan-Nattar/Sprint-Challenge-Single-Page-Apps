import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {

  const [characters, setCharacters] = useState();
  const [page, setPage] = useState("");
  const [pagination, setPagination] = useState('');

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${page}&page=2`)
      .then(response => {
        setCharacters(response.data.results);
        setPagination(response.data.info);
        console.log(response.data.info)
      });
  }, [page]);
  if (!characters || !pagination) {
    return null;
  }
  const onSearch = search => {
    setPage(search);
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <section className="character-list grid-view">
        {characters.map(character => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </section>
    </div>
  );
}
