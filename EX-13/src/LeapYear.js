import React from "react";
function LeapYear(props)
{
    let year=props.year;
    return <h1>{((year%4==0 && year%100!=0)||(year%400==0))?"It is a Leap Year":"It is not Leap year"}</h1>;
}
export default LeapYear;