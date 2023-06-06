import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input"
import RoverReport from "./components/RoverReport";

function App() {
  return (
    <div className="App">
     <h1 className="App-header">
     Mars Rover
      </h1>        

      <Input/>
      <RoverReport/>
    </div>
  );
}

export default App;
