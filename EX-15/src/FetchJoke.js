import React from 'react';
import {useState,useEffect} from "react";

function RandomJoke()
{
    const [joke,setJoke]=useState("");
    const fetchJoke=async ()=>
        {
            try
            {
                const response=await fetch("https://api.chucknorris.io/jokes/random");
                const data=await response.json();
                setJoke(data.value);
            }
            catch(error)
            {
                console.error("Error fetching joke:",error);
                setJoke("Failed to load joke.");
            }
        };
        useEffect(()=>{
            fetchJoke();
        },[]);
        return(
            <>
            <h2>Random Joke</h2>
            <p>{joke}</p>
            <button onClick={fetchJoke}>GGet New Joke</button>
            </>
        );
}
export default RandomJoke;