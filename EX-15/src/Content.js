import React,{useState} from 'react';


function Content()
{
    const [joke,setJoke]=useState("");
    const fetchJoke=async ()=>{

        const response= await fetch("https://api.chucknorris.io/jokes/random");
        const data= await response.json();
        setJoke(data.value);
    }
    
    return (
        <>
         <button onClick={fetchJoke}>Get Joke</button>
         <h1>Joke:{joke}</h1>
        </>
   );
}
export default Content;