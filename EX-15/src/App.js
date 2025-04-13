import React from "react";
import {useState,useEffect} from "react";
function App() {
  const[count,setCount]=useState(0);

  useEffect(()=>{
    console.log("The count is:",count);

    return()=>
      {
        console.log("I'm being cleaned up!");
      }
  },[count]);

  return (
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
    
  );
}

export default App;
