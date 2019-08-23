import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(()=>{
    console.log('characterlist')
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response=>{
            console.log('response',response);
        });
},[]);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
