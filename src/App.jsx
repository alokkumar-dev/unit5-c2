import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";
//  import useRef from "react"

function App() {
  const [type,setType] =useState(false)
  // var type = true;
  // const type = useRef(null)

  const change = () => {

    if(type==false){
      setType(true)
    }else{
      setType(false)
    }
    // type = true;
     console.log(type);
  };

  return (
    <div className="App">
      <button className="toggleForm" onClick={change}>
        {/* Show text Add House or Show Rentals based on state */}
        {type? "add house" :"rental"}
      </button>
      {/* Show component based on state */}
      {/* <Rentals />
      <AddHouse /> */}
      {type? <Rentals />:<AddHouse /> }
      <br />
    </div>
     )
  
}

export default App;