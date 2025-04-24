// import { Box, Button, TextField } from "@mui/material";
// import React, { useState } from "react";

// const UseState = () => {
//   const [name, setName] = useState("");
//   const [count, setCount] = useState(0);
//   const [staleCount, setStaleCount] = useState(0);

//   const handleDirectIncrement = () => {
//     setCount(count + 1);    //here all 3 updates the same count
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   const handleFunctionalIncrement = () => {
//     setCount((prev) => prev + 1);   //each update receives the most recent state
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//   };

//here we are calling count state
// const handleStaleIncrement = () => {
//   setTimeout(() => {        //React captured count = 0 at the time of clicking, not after the delay.
//     setStaleCount(count + 1); // ❌ This may not reflect the latest state
//   }, 2000);
//   // setTimeout(() => {
//   //   setStaleCount((prev) => prev + 1); // ✅ Always gets the latest state
//   // }, 2000);
// };

//   return (
//     <Box display="flex" flexDirection="column">
//       <h3>{count}</h3>
//       <TextField
//         name="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       {/* <Button onClick={() => setCount(count + 1)}>Increment</Button> */}
//       {/* <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>   //correct way of incrementing */}
//       {/* <Button onClick={() => setCount(count - 1)}>Decrement</Button> */}

//       <Button onClick={handleDirectIncrement}>Direct Increment</Button>
//       <Button onClick={handleFunctionalIncrement}>Functional Increment</Button>

//       <h3>Stale Count: {staleCount}</h3>
//       <Button onClick={handleStaleIncrement}>Increment After 2s</Button>
//     </Box>
//   );
// };

// export default UseState;

// ---------------------------------------------------------------------------------------

// import React, { useState } from "react";

// const UseState = () => {
//   const [name, setName] = useState("");
//   const [count, setCount] = useState(0);

//   const handleClickOne=()=>{
//     setCount(count+1)
//     setCount(count+1)
//     setCount(count+1)
//   }

//   const handleClickSecond=()=>{
//     setCount((prev)=>prev+1)
//     setCount((prev)=>prev+1)
//     setCount((prev)=>prev+1)
//   }
//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>

//       <div>
//         {count}
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         {/* <button onClick={() => setCount((prev)=>prev+1)}>Increment</button> */}
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//         <button onClick={() => setCount(0)}>Initial</button>
//       </div>

//       <div>
//         <button onClick={handleClickOne} >Repeats setCount using count state</button>
//         <button onClick={handleClickSecond}>Proper way</button>
//       </div>
//     </>
//   );
// };

// export default UseState;

// -----------------------------------------------------------------------------------------------

import React, { useState } from "react";

const UseState = () => {
  // const [count, setCount] = useState(0);
  const [staleCount, setStaleCount] = useState(0);

  // const handleStaleCount = () => {
  //   setStaleCount((prev) => prev + 1);
  //   setStaleCount((prev) => prev + 1);
  //   setStaleCount((prev) => prev + 1);
  // };

  // const handleCount = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  const handleStaleIncrement = () => {
    setTimeout(() => {
      setStaleCount(staleCount + 1);
    }, 1000);

    // setTimeout(() => {
    //   setStaleCount((prev) => prev + 1);
    // }, 2000);
  };

  // const handleStaleIncrement = () => {
  //   setTimeout(() => {        //React captured count = 0 at the time of clicking, not after the delay.
  //     setStaleCount(count + 1); // ❌ This may not reflect the latest state
  //   }, 2000);
    // setTimeout(() => {
    //   setStaleCount((prev) => prev + 1); // ✅ Always gets the latest state
    // }, 2000);
  // };

  return (
    <>
      <h4>Count : {staleCount}</h4>
      {/* <p>Stale Count : {staleCount}</p> */}
      <button onClick={handleStaleIncrement}>Increment After 2s</button>

      {/* <button onClick={handleCount}>Increment Count</button>
      <button onClick={handleStaleCount}>Increment Stale Count</button> */}

      {/* <button onClick={() => setCount((prev)=>prev+1)}>Increment</button> */}

      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
    </>
  );
};

export default UseState;

// ------------------------------------------------------------------------------------------

// React batches state updates, and if multiple updates happen
//  in quick succession, count might not be the latest value which leads to stale state issues.
//Stale State : Stale state happens when a state update does not reflect the latest changes.occurs bcoz React state updates are asynchronous.
// count + 1 = Uses the value of count when the function was created
// Because React might have updated the state after this function was defined, but the function is still referring to the old value of count
// ((prev) => prev + 1) = Uses the latest state at the time of execution
// React passes the most up-to-date state to the function (prev) — even if this call happens later.

// If you update multiple states in a single function, React waits and applies them together in one render cycle.
