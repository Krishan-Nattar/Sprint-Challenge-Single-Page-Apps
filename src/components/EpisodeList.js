import React, {useEffect, useState} from 'react';
import axios from 'axios';

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

    return ( <div></div> );
}
 
export default EpisodeList;