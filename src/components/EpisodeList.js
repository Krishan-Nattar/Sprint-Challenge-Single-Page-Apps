import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import SearchForm from "./SearchForm";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState();
  const [page, setPage] = useState("");

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?name=${page}`)
      .then(response => {
        setEpisodes(response.data.results);
      });
  }, [page]);

  if (!episodes) {
    return null;
  }

  const onSearch = search => {
    setPage(search);
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <section className="episode-list grid-view">
        {episodes.map(episode => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
      </section>
    </div>
  );
};

export default EpisodeList;
