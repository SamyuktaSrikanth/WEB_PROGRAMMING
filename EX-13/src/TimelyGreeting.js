import React from "react";
function Greeting()
{
    const isMorning=false;
    const daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today=new Date().getDay();
    const day=daysOfWeek[today];
    return (
        <>
        <h1>{(isMorning)?"Good Morning":"Good Evening"}</h1>;
        <h1>Today is {day}.</h1>
        </>
    );
    
}
export default Greeting;