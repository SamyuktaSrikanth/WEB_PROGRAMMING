import React,{useRef} from 'react';
function Forms()
{
    const nameRef=useRef();
    const emailRef=useRef();
    function handleSubmit(event)
    {
        event.preventDefault();
        alert(`Name: ${nameRef.current.value},Email:${emailRef.current.value}`);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input ref={nameRef} />
        <br></br>
        <br></br>
        <input ref={emailRef} />
        <br></br>
        <br></br>
        <button >Submit</button>
        <br></br>
        <br></br>

        </form>
        </>
    );
}
export default Forms;