import "./App.css";
import { AddHouse } from "./Components/AddHouse/AddHouse";


function App() {
  return (
    <div className="App">
      <AddHouse />
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
