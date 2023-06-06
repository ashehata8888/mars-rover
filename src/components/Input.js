import * as React from "react";
 

export default function input(){
const [InputValue , setInputValue] = React.useState('')
    return(
        
        <input
        type="text"
        value={InputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        >
        
        </input>
    )
}