import {useEffect,useRef} from 'react';
function App()
{
    const inputRef=useRef(null);
    // const focusInput=()=>{
    //     inputRef.current.focus();
    // };
    useEffect(()=>{
        inputRef.current?.focus();
    },[]);
    return (
    <>
    <input ref={inputRef} type="text" placeholder="Hold Something"/>
    {/* <button onClick={focusInput}>Focus Input</button>; */}
    </>);
}
export default App;