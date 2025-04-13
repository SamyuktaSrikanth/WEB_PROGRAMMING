import React from "react";
function Palindrome(props)
{
    let text1=props.text;
    let text2=text1.split('').reverse().join('');
    return(
        <h1>{(text1==text2)?"Is Palindrome":"Is Not A Palindrome"}</h1>
    );
}
export default Palindrome;