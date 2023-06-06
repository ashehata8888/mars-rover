/* eslint-disable */
import { useState } from "react";

export default function Input() {
  const [inputValue, setInputValue] = useState([]);
  const onclickHandler = (e) => {
    let cloneInput = [...inputValue];
    cloneInput = [...cloneInput, e.target.name];
    setInputValue(cloneInput);
    e.target.name;
  };
  return (
    <>
    <h4 >Current Rover Coordinates : ( 4, 2, EAST )</h4>
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
      <button className="btn btn-primary">GO</button>
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
