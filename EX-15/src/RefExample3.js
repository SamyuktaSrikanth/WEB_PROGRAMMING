import React,{useState,useRef} from 'react';
function App()
{
    const [count,setCount]=useState(0);
    const prevCount=useRef(0);

    function incrementCount()
    {
        prevCount.current=count;
        setCount(count+1);
    }

    return (
    <>
    <h1>Count:{count}</h1>
    <h1>Previous Count:{prevCount.current}</h1>
    <button onClick={incrementCount}>Increment</button>
    </>
    );
}
export default App ;
