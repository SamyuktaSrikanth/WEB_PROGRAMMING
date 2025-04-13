import React from "react";
function InlineComponent() {
    return (
        <>
        <style>
            {`
            h1{
                font-size : 24px;
                color: blue;
                text-align: center;
                
            }
            p{
            color:green;
            font-weight:bold;
            }
            button
            {
              background-color:pink;
              padding:10px;
              font-size:24px;
            }
            `}
        </style>
        <h1>Hello,React</h1>
        <p>This is a stylized paragraph</p>
        <button>Stylised Button</button>
        </>
    );
}
export default InlineComponent;