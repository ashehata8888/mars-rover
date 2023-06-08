/* eslint-disable */
import { useEffect, useState } from "react";

export default function Input({ setDirectionU, setX, x, y, setY }) {
  const [inputValue, setInputValue] = useState([]);
  const [direction, setDirection] = useState("East");
  const [fCurr, setFCurr] = useState(0);



  const [goStatus,setgoStatus]=useState(true)
  const [clearStatus,setClearStatus]=useState(true)

  useEffect(() => {
    let currDir = direction;
    console.log("currentDirection ", currDir);
  });



  const onclickHandler = (e) => {
    setgoStatus(false)
    setX(4)
    setY(2)
    setDirectionU("East")
  
    let cloneInput = [...inputValue];
    cloneInput = [...cloneInput, e.target.name];

    setTimeout(() => setInputValue(cloneInput), 0);
  };

  let dir = "East";
  const onClickGo = () => {
    setgoStatus(true)
  
    if (inputValue.length > 0) {

      let EI = 0;
      let NI = 0;
      let WI = 0;
      let SI = 0;

      console.log("testDirection from input", direction);
      inputValue.map(async (item, inx) => {
        switch (dir) {
          case "East":
            if (item == "F") {
              console.log("newX", inputValue);
              EI = EI + 1;
              let newX = x + EI;
              setTimeout(() => setX(x + EI), 0);
            } else if (item === "B") {
              EI--;
              setTimeout(() => setX(x + EI), 0);
            } else if (item === "L") {
              dir = "North";
            } else if (item === "R") {
              dir = "South";
            }
            break;

          case "North":
            if (item === "F") {
              console.log("switchDir Called");
              NI++;
              setY(y + NI);
            } else if (item === "B") {
              NI--;
              setY(y + NI);
            } else if (item === "L") {
              dir = "West";
            } else if (item === "R") {
              dir = "East";
            }
            break;
          case "West":
            if (item === "F") {
              WI--;
              setX(x + WI);
            } else if (item === "B") {
              WI++;
              setX(x + WI);
            } else if (item === "L") {
              dir = "South";
            } else if (item === "R") {
              dir = "North";
            }
            break;
          case "South":
            if (item === "F") {
              SI--;
              setY(y + SI);
            } else if (item === "B") {
              SI++;
              setY(y + SI);
            } else if (item === "L") {
              dir = "East";
            } else if (item === "R") {
              dir = "West";
            }
            break;
        }

        console.log("testdir inside mapping", dir);
        setDirectionU(dir);

      });
    }
    // setInputValue("");
  };

  console.log(direction);
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
      <button onClick={onClickGo} className="btn btn-primary" disabled={goStatus}>
        GO
      </button>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
            justifyContent: "center",
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
            disabled={inputValue.length > 0 ? false : true}
              style={{ margin: "3vh" }}
              name="R"
              onClick={() =>{
                setInputValue("")
                setX(4)
                setY(2)
                setDirectionU("East")
                setgoStatus(true)
              } }
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
