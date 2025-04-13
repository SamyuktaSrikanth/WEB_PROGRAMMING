import React,{useState} from 'react';
function Forms()
{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    function handleSubmit(event)
    {
        event.preventDefault();
        alert(`Name: ${name},Email:${email}`);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input value={name} onChange={(event)=>{setName(event.target.value)}}/>
        <br></br>
        <br></br>
        <input value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
        <br></br>
        <br></br>
        <button >Submit</button>
        <br></br>
        <br></br>
        <h1>Name: {name},Email:{email}</h1>
        </form>
        </>
    );
}
export default Forms;