import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {

    const [locations, setLocations] = useState();


    useEffect(()=>{
        console.log('locationslist')
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response=>{
            console.log('response',response);
            setLocations(response.data.results);
        });
    },[]);



    if(!locations){
        return null
      }

    return ( 
    
        <section className="location-list grid-view">

{locations.map(location=>{
        return <LocationCard />
      })}
    </section> );


}
