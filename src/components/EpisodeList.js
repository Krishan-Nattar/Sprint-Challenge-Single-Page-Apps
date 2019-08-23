import React, {useEffect, useState} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

const EpisodeList = () => {
    
    const [episodes, setEpisodes] = useState();

    useEffect(()=>{
        console.log('episodelist')
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

{episodes.map(character=>{
        return <EpisodeCard />
      })}
    </section> );
}
 
export default EpisodeList;