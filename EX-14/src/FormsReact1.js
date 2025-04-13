import React from "react";
function App()
{
    return(
        <>
        <h2>Contact Us</h2>
        <form>
            {/*Name Input*/}
            <label>Username:</label>
            <input type="text" name="username"/>
            <br></br>
            <br></br>

            {/*Email Input*/}
            <label>City of Employment</label>
            <input type="text" name="city"/>
            <br></br>
            <br></br>
        
            {/*Name Input*/}
            <label>Web Server:</label>
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
            </select>
            <br></br>
            <br></br>

            {/*Name Input*/}
            <label>Please Specify your role:</label><br></br>
            <input type="radio"/>Admin<br></br>
            <input type="radio"/>Manager<br></br>
            <input type="radio"/>Enginner<br></br>
            <input type="radio"/>Guest<br></br>
            <br></br>
            <br></br>

            {/*Name Input*/}
            <label>Please Specify your role:</label><br></br>
            <input type="checkbox"/>Admin<br></br>
            <input type="checkbox"/>Manager<br></br>
            <input type="checkbox"/>Enginner<br></br>
            <br></br>
            <br></br>

             {/*Submit Button*/}
             <button type="submit">Login</button> &nbsp;
             <button type="submit">Reset</button>
            
        </form>
        </>
    );
}
export default App;