/* eslint-disable */
import { useEffect, useState } from "react";

export default function Input({
  setDirectionU,
  setX,
  x,
  y,
  setY,
  // direction
  // setCurrE,
  // setCurrN,
  // setCurrW,
  // setCurrS,
}) {
  const [inputValue, setInputValue] = useState([]);
  const [direction, setDirection] = useState("East");
  const [fCurr, setFCurr] = useState(0);

  const [currE , setCurrE] = useState(0)
  const [currN , setCurrN] = useState(0)
  const [currW , setCurrW] = useState(0)
  const [currS , setCurrS] = useState(0)


  let currDir = direction;

console.log("currentDirection ",direction)

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


  const onclickHandler = (e) => {
    let cloneInput = [...inputValue];
    cloneInput = [...cloneInput, e.target.name];
    // const newString = cloneInput.join("")
    setTimeout(() => setInputValue(cloneInput), 0);



    

    // if (e.target.name == "L" && direction == "East") {
    //   setCurrN((curr) => curr + 1);
    // } else if (e.target.name == "L" && direction == "North") {
    //   setCurrW((curr) => curr + 1);
    // } else if (e.target.name == "L" && direction == "West") {
    //   setCurrS((curr) => curr + 1);
    // } else if (e.target.name == "L" && direction == "South") {
    //   setCurrE((curr) => curr + 1);
    // } else if (e.target.name == "R" && direction == "East") {
    //   setCurrS((curr) => curr + 1);
    // } else if (e.target.name == "R" && direction == "North") {
    //   setCurrE((curr) => curr + 1);
    // } else if (e.target.name == "R" && direction == "West") {
    //   setCurrN((curr) => curr + 1);
    // } else if (e.target.name == "R" && direction == "South") {
    //   setCurrW((curr) => curr + 1);
    // }

    // setTimeout(()=>setInputValue(newString),10);
    // setTimeout(()=>console.log(newString),10)
  };



  const onClickGo = () => {
    // let i = 0;
    // console.log(inputValue)
    if (inputValue.length > 0 ) {
      let EI = 0;
      let NI = 0;
      let WI = 0;
      let SI = 0;




      console.log("testDirection from input",direction)
      inputValue.map((item, inx) => {
        switch (direction) {
          case "East":
           
            if (item == "F") {
             
              console.log("newX",inputValue)
              EI = EI + 1 
              let newX = x + EI
              setX(x + EI);
              console.log("test newX " + newX + " x : " + x + "| EI " + EI )

            }

            if (item === "B") {
              EI--;
              setX(x + EI);
            }
            if (item === "L") {
              console.log("LTest")
            //  setDirection("North")
            // setCurrN(curr => curr + 1)
             setCurrN( curr => curr + 1)

            }
            if (item === "R"){
              // setDirection("South")
              // setCurrS(curr => curr + 1)
              setCurrS( curr => curr + 1)
            }
            break;
          case "North":
           
            if (item === "F") {
              NI++;
              setY(y + NI);
            }
            if (item === "B") {
              NI--;
              setY(y + NI);
            }
            if (item === "L") {
              // setDirection("West")
              // setCurrW(curr => curr + 1)
              setCurrW( curr => curr + 1)
            }
            if (item === "R"){
              // setDirection("East")
              // setCurrE(curr => curr + 1)
              setCurrE( curr => curr + 1)

            }
            break;
          case "West":
          
            if (item === "F") {
              WI--;
              setX(x + WI);
            }
            if (item === "B") {
              WI++;
              setX(x + WI);
            }
            if (item === "L") {
              // setDirection("South")
              // setCurrS(curr => curr + 1)
              setCurrS( curr => curr + 1)
            }
            if (item === "R"){
              // setDirection("North")
              // setCurrN(curr => curr + 1)
              setCurrN( curr => curr + 1)
            }
            break;
          case "South":
           
            if (item === "F") {
              SI--;
              setY(y + SI);
            }
            if (item === "B") {
              SI++;
              setY(y + SI);
            }
            if (item === "L") {
              setDirection("East")
              // setCurrE(curr => curr + 1)
              setCurrE( curr => curr + 1)
            }
            if (item === "R"){
              setDirection("West")
              // setCurrW(curr => curr + 1)
              setCurrW( curr => curr + 1)
            }
            break;
        }
      });


  };
  setInputValue("")
}
  setTimeout(() => console.log("testX from Input", x), 1000);

  return (
    <>
      <h4>Current Rover Coordinates : ( 4, 2, EAST )</h4>
      <input
        readOnly
        className="form-control"
        style={{
          maxWidth: "50vh",
          display: "inline-block",
          marginTop: "3vh",
          marginRight: "5vh",
        }}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={onClickGo} className="btn btn-primary">
        GO
      </button>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
            justifyContent: "center",
            // marginLeft: "30%",
          }}
        >
          <li style={{ margin: "3vh" }}>
            <button
              name="F"
              onClick={(e) => onclickHandler(e)}
              className="btn btn-primary"
            >
              F
            </button>
          </li>
          <li style={{ margin: "3vh" }}>
            <button
              name="B"
              onClick={(e) => onclickHandler(e)}
              className="btn btn-primary"
            >
              B
            </button>
          </li>
          <li style={{ margin: "3vh" }}>
            <button
              name="L"
              onClick={(e) => onclickHandler(e)}
              className="btn btn-primary"
            >
              L
            </button>
          </li>
          <li style={{ margin: "3vh" }}>
            <button
              name="R"
              onClick={(e) => onclickHandler(e)}
              className="btn btn-primary"
            >
              R
            </button>
          </li>

          <li>
            <button
              style={{ margin: "3vh" }}
              name="R"
              onClick={() => setInputValue("")}
              className="btn btn-primary"
            >
              Clear
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
