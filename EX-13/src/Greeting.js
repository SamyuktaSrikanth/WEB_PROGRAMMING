import React from "react";
function Greetings(props)
{
    const first=props.first;
    const last=props.last;
    return <h1>Hello,{first} {last}!</h1>;
}
export default Greetings;