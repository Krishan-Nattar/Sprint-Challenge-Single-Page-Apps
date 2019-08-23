import React, {useEffect, useState} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

const EpisodeList = () => {
    
    const [episodes, setEpisodes] = useState();

    useEffect(()=>{
        axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response=>{
            console.log('response',response);
            setEpisodes(response.data.results);
        });
    },[]);


    if(!episodes){
        return null
      }

    return ( 
    
        <section className="episode-list grid-view">

{episodes.map(episode=>{
        return <EpisodeCard key={episode.id} />
      })}
    </section> );
}
 
export default EpisodeList;