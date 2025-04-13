import React from "react";
function PrimeNo()
{
    const n=17;
    let factor=false;
    for(let i=2;i<n;i++)
        {
            if(n%i==0)
                {
                    factor=true;
                }
        }
    return <p>{(factor)?"Is not Prime":"Is a Prime"}</p>;
}
export default PrimeNo;