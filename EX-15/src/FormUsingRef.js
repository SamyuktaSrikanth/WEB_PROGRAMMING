import React,{useRef} from 'react';
function FormsUsingRef()
{
    const nameRef=useRef();
    const ageRef=useRef();
    function handleSubmit(event)
    {
        event.preventDefault();
        alert(`Name: ${nameRef.current.value},Age ${ageRef.current.value}`);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input typr="text" ref={nameRef}/>
        <br></br>
        <label>Age:</label>
        <input type="text" ref={ageRef}/>
        <br></br>
        <br></br>
        <button type="submit" >Sumbit</button>
        </form>
        </>
    );
}
export default FormsUsingRef;