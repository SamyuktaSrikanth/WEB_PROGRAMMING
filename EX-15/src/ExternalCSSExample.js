import React from 'react';
import "./MyCss.css";
function ExternalComponent()
{
    return (
        <>
        <h1 className="heading">Hello React</h1>
        <p className="para">This is stylized paragraph</p>
        <button className="myButton">Stylised Button</button>
        </>
    );
}
export default ExternalComponent;