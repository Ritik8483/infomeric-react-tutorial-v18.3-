// import React, { useEffect, useRef, useState } from "react";

// const UseRef = () => {
//   const [inputValue, setInputValue] = useState("");
//   const componentRef = useRef();
//   const inputElement = useRef();
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   useEffect(() => {
//     const html = componentRef.current;
//     console.log("html", html);
//   }, []);
//   return (
//     <div
//       ref={componentRef}
//       style={{ display: "flex", flexDirection: "column" }}
//     >
//       {" "}
//       {/* //to get whole html */}
//       <input type="text" ref={inputElement} />
//       {/* //to make focus on input field */}
//       <button onClick={focusInput}>Focus Input</button>
//       <input
//         type="text"
//         value={inputValue}
//         placeholder="Enter value"
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </div>
//   );
// };

// export default UseRef;

// ----------------------------------------------------

// import React, { useEffect, useRef, useState } from "react";

// const UseRef = () => {
//   const ref = useRef();
//   const [inputValue, setInputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(() => {
//     previousInputValue.current = inputValue;
//   }, [inputValue]);

//   const handleGetValue = () => {
//     console.log("ref.current",ref.current);

//     const val = ref.current.value;
//     setInputValue(val)
//     console.log(val);
//   };

//   On the next change:
// React re-renders the component with the new inputValue.
// But previousInputValue.current still holds the value from the last render, because the useEffect hasn't run yet in this new cycle
//   Each time, the useEffect updates the previousInputValue.current only after the new render with the updated value.
//   return (
//     <div>
//       UseRef
//       {/* <input type="text" name="name" ref={ref} />
//       <button onClick={handleGetValue}>Get Value</button> */}
        //GET PREVIOUS VALUE USING REF AND USESTATE
//       <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
//       <h2>Current Value: {inputValue}</h2>
//       <h2>Previous Value: {previousInputValue.current}</h2>
//     </div>
//   );
// };

// export default UseRef;

// ------------------------------------------------------------

// import React, { useEffect, useRef, useState } from "react";

// const UseRef = () => {
//   const prevRef = useRef();
//   const [showValue,setShowValue] = useState("")

//   useEffect(() => {
//     prevRef.current = showValue;
//     // prevRef.current = showValue; // ← sets it to a string, like "hello"
//     // prevRef?.current?.value = showValue;
//     // prevRef?.current?.value "hello".value // ← undefined, because strings don’t have a `.value` property

//   }, [showValue]);

//   return (
//     <>
//       <p>Current Value : {showValue}</p>
//       <p>Previous Value : {prevRef.current}</p>
//       {/* <p>Previous Value : {prevRef?.current?.value}</p> */}
//       <input type="text" value={showValue} onChange={(e)=>setShowValue(e.target.value)} placeholder="Auto Focus" />
//     </>
//   );
// };

// export default UseRef;



// ----------------------------

import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  const inputRef = useRef();
  const [text,setText] = useState("")
  useEffect(()=>{
    inputRef.current = text;
  },[text])

  return (
    <>
      <p>Previous Value  : {inputRef.current}</p>
      <input type='text' ref={inputRef} value={text} onChange={(e)=>setText(e.target.value)} />
    </>
  )
}

export default UseRef