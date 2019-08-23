import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EpisodeList = () => {


    useEffect(()=>{
        console.log('episodelist')
        axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response=>{
            console.log('response',response);
        });
    },[]);

    return ( <div></div> );
}
 
export default EpisodeList;