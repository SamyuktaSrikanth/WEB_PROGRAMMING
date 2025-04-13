import React from 'react';
import {useState,useRef} from 'react';

function App() {
  const[count,setCount]=useState(0);
  const countRef=useRef(0);

  const handleIncrement=()=>{
    setCount(count+1);
    countRef.current++;

    console.log('State:',count);
    console.log('Ref:',countRef.current);
  };

  return (
    <>
    <h1>Count:{countRef.current}</h1>
    <button onClick={handleIncrement}>Increment</button>
    
    </>
    
  );
}

export default App;
