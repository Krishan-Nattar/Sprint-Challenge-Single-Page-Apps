import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";
import { Button } from 'semantic-ui-react';
import useLocalStorage from './useLocalStorage';

export default function LocationsList() {
  const [locations, setLocations] = useState();
  // const [locations, setLocations] = useLocalStorage("locations", );
  const [page, setPage] = useState("");
  // const [page, setPage] = useLocalStorage("page", "");
  const [pagination, setPagination] = useState('');
  // const [pagination, setPagination] = useLocalStorage('pagination', '');
  const [number, setNumber] = useState(1)
  // const [number, setNumber] = useLocalStorage("number", 1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${page}&page=${number}`)
      .then(response => {
        setLocations(response.data.results);
        setPagination(response.data.info);
      });
  }, [page,number]);

  if (!locations) {
    return null;
  }
  let previous = pagination.prev;
  let next = pagination.next;

  const handleClick = (button) =>{
    if(button=='next'){
      if(next != ""){
        setNumber(number+1);
      }
    } else {
      if(previous != ""){
        setNumber(number-1);
      }
    }
  }

  const onSearch = search => {
    setPage(search);
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div className="search-bar-section">
      <Button className="ui button" onClick={()=>handleClick('previous')}>Previous</Button>
      
      <Button onClick={()=>handleClick('next')}>Next</Button>
      </div>
      <section className="location-list grid-view">
        {locations.map(location => {
          return <LocationCard location={location} key={location.id} />;
        })}
      </section>
    </div>
  );
}
