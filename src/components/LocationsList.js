import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";

export default function LocationsList() {
  const [locations, setLocations] = useState();
  const [page, setPage] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${page}`)
      .then(response => {
        setLocations(response.data.results);
      });
  }, [page]);

  if (!locations) {
    return null;
  }

  const onSearch = search => {
    setPage(search);
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <section className="location-list grid-view">
        {locations.map(location => {
          return <LocationCard location={location} key={location.id} />;
        })}
      </section>
    </div>
  );
}
