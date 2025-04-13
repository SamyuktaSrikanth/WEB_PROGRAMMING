import React from "react";
import cat from "./Images/cat.jpg";

// function App() {
//   return (
//     <>
//     <img src="/Images/dog.jpg" alt="dog" width="200"/>
//     <img src={require("./Images/cat.jpg")} alt="cat" width="200"/>
//     </>
//   );
// }
function App() {
  return (
    <>
    <img src="/Images/dog.jpg" alt="dog" width="200"/>
    <img src={cat} alt="cat" width="200"/>
    </>
  );
}

export default App;
