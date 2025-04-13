import React from 'react';
function StyledComponent()
{
    const headingStyle=
    {
        color:"blue",
        fontSize:"24px",
        textAlign:"center",
    }
    return (
        <>
        <h1 style={headingStyle}>Hello React with Inline CSS!</h1>
        <p style={{color:"green",fontWeight:"bold"}}>This is a styled paragraph</p>
        <button style={{backgroundColor:'pink',padding:"10px",fonSize:"24px"}}>Stylised Button</button>
        </>
    );
}
export default  StyledComponent;