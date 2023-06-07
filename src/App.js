/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input"
import RoverReport from "./components/RoverReport";
import {useState , useEffect} from 'react';

function App() {
  const [x,setX] = useState(4)
  const [y, setY] = useState(2);
  const [direction, setDirection] = useState("East");
  const [currE , setCurrE] = useState(0)
  const [currN , setCurrN] = useState(0)
  const [currW , setCurrW] = useState(0)
  const [currS , setCurrS] = useState(0)

  const [currX, setCurrX]= useState(0)
  const [currY, setCurrY]= useState(0)

  useEffect(()=>{
   if(currE > 0) {
    setDirection("East")
    console.log("test CurrE ",currE)
   } 
  },[currE])

  

  useEffect(()=>{
    if(currN > 0){
      setDirection("North")
      console.log("test CurrN ",currN)
    } 
     
   },[currN])
  //  console.log("test CurrN ",currN)
   

   useEffect(()=>{
    if(currW > 0){
      setDirection("West")
      console.log("test CurrW ",currW)
    } 
   },[currW])

   useEffect(()=>{
    if(currS > 0){
      setDirection("South") 
    console.log("test CurrS ",currS)
    }
   },[currS])
  
  return (
    <div className="App">
     <h1 className="App-header">
     Mars Rover
      </h1>        

      <Input 
      setX={setX}
      setCurrX={setCurrX}
      setCurrY={setCurrX}
      x={x}
      y={y}
      setY={setY}
      direction={direction}
      setCurrE={setCurrE}
      setCurrN={setCurrN}
      setCurrW={setCurrW}
      setCurrS={setCurrS}
      // setDirection={setDirection}
      />
      {console.log("direction "+direction)}
      <RoverReport
      x={x}
      y={y}
      direction={direction}
      />
    </div>
  );
}

export default App;
