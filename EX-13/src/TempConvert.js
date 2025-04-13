import React from "react";
function Convert()
{
    const temp1=30;
    const temp2=80;
    return (
    <>
    <h1>The temperature coverted from celius to fahrenheit is {((9/5)*temp1)+32} F</h1>
    <h1>The temperature coverted from fahrenheit to celius is {(5/9)*(temp2-32)} C</h1>
    </>
    );
}
export default Convert;