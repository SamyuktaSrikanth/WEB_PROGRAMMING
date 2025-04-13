import React from "react";
function App()
{
    return(
        <>
        <h2>Contact Us</h2>
        <form>
            {/*Name Input*/}
            <label>Name:</label>
            <input type="text" name="name"/>
            <br></br>
            <br></br>

            {/*Email Input*/}
            <label>Email:</label>
            <input type="email" name="name"/>
            <br></br>
            <br></br>

            {/*Message Input*/}
            <label>Message:</label>
            <textarea name="message"></textarea>
            <br></br>
            <br></br>

            {/*Submit Button*/}
            <button type="submit">Submit</button>
            <br></br>
            <br></br>
            
        </form>
        </>
    );
}
export default App;