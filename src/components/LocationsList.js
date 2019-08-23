import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function LocationsList() {

    useEffect(()=>{
        console.log('locationslist')
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response=>{
            console.log('response',response);
        });
    },[]);

    return ( <div></div> );


}
