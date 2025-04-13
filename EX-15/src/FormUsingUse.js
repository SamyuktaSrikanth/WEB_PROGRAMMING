import React,{useState} from 'react';
function FormUsingUse()
{
    const [name,setName]=useState("");
    const [age,setAge]=useState("");

    function handleSubmit(event)
    {
        event.preventDefault();
        alert(`Name:${name},Age:${age}`);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name}  onChange={(event)=>{setName(event.target.value)}}/>
        <br></br>
        <label>Age:</label>
        <input type="text"  value={age} onChange={(event)=>{setAge(event.target.value)}}/>
        <br></br>
        <br></br>
        <button type="submit" >Sumbit</button>
        </form>
        </>
    );
}
export default FormUsingUse;