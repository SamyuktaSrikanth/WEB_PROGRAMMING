import React from "react";
function genRandom()
{
    alert(Math.floor(Math.random()*100));
}
function GenRandomNumber()
{
    return <button onClick={genRandom}>Generate Number</button>;
}
export default GenRandomNumber;