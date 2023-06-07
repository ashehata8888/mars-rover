/* eslint-disable */
import { useEffect, useState } from "react";

export default function Input({ setCurrX, setCurrY,setX, x ,y , setY , direction , setCurrE ,setCurrN ,setCurrW , setCurrS}) {
  const [inputValue, setInputValue] = useState([]);


  const [fCurr, setFCurr] = useState(0);
  let currDir = direction
  const onclickHandler = (e) => {
    let cloneInput = [...inputValue];
    cloneInput = [...cloneInput, e.target.name];
    // const newString = cloneInput.join("")
    setTimeout(() => setInputValue(cloneInput), 0);

    if(e.target.name == "L" && direction == "East"){
      setCurrN(curr => curr + 1)
    } else if (e.target.name == "L" && direction == "North" ){
      setCurrW(curr => curr + 1)
    } else if (e.target.name == "L" && direction == "West" ){
      setCurrS(curr => curr + 1)
    } else if (e.target.name == "L" && direction == "South" ){
      setCurrE(curr => curr + 1)
    } else if (e.target.name == "R" && direction == "East" ){
      setCurrS(curr => curr + 1)
    } else if (e.target.name == "R" && direction == "North" ){
      setCurrE(curr => curr + 1)
    } else if (e.target.name == "R" && direction == "West" ){
      setCurrN(curr => curr + 1)
    } else if (e.target.name == "R" && direction == "South" ){
      setCurrW(curr => curr + 1)
    }

     
    // setTimeout(()=>setInputValue(newString),10);
    // setTimeout(()=>console.log(newString),10)
  };

  const onClickGo = () => {
    // let i = 0;
    // console.log(inputValue)
    inputValue.length > 0 &&
      inputValue.map((item, inx) => {
        switch (direction) {
          case "East":
            let EI = 0;
            if (item === "F") {
              EI++;
              setX(x + EI);
            }
            if (item === "B") {
              EI--;
              setX(x + EI);
            }
            // if (item === "L") {
            //  // setDirection("North")
            //   setCurrN(curr => curr + 1) 
          
            
            // }
            // if (item === "R"){
            //   // setDirection("South")
            //   setCurrS(curr => curr + 1)
            // }
            break;
            case "North":
              let NI = 0;
              if (item === "F") {
                NI++;
                setY(y + NI);
              }
              if (item === "B") {
                NI--;
                setY(y + NI);
              }
              // if (item === "L") {
              //   // setDirection("West")
              //   setCurrW(curr => curr + 1)
              // }
              // if (item === "R"){
              //   // setDirection("East")
              //   setCurrE(curr => curr + 1)
                
              // }
              break;
              case "West":
                let WI = 0;
                if (item === "F") {
                  WI++;
                  setX(x + WI);
                }
                if (item === "B") {
                  WI--;
                  setX(x + WI);
                }
                // if (item === "L") {
                //   // setDirection("South")
                //   setCurrS(curr => curr + 1)
                // }
                // if (item === "R"){
                //   // setDirection("North")
                //   setCurrN(curr => curr + 1)
                // }
                break;
                case "South":
                  let SI = 0;
                  if (item === "F") {
                    SI++;
                    setY(y + SI);
                  }
                  if (item === "B") {
                    SI--;
                    setY(y + SI);
                  }
                  // if (item === "L") {
                  //   // setDirection("East")
                  //   setCurrE(curr => curr + 1)
                  // }
                  // if (item === "R"){
                  //   // setDirection("West")
                  //   setCurrW(curr => curr + 1)
                  // }
                  break;
        }
      });
  };

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
