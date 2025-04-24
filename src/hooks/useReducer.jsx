// import { Button } from "@mui/material";
// import React, { useReducer } from "react";

// const UseReducer = () => {
//   const reducer = (state, action) => {
//     console.log("state", state);
//     console.log("action", action);

//     switch (action) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//       case "RESET":
//         return 0;
//       default:
//         return state;
//     }
//   };
//   let initialState = 0;
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       <h3>Count: {state}</h3>
//       <Button onClick={() => dispatch("INCREMENT")}>Increment</Button>
//       <Button onClick={() => dispatch("DECREMENT")}>Decrement</Button>
//       <Button onClick={() => dispatch("RESET")}>Reset</Button>
//     </div>
//   );
// };

// export default UseReducer;

// -------------------------------------------------

import React from "react";
import { useReducer } from "react";

const initialState = 0;

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "INCREMENT":
        return state + 1;
        break;
      case "DECREMENT":
        return state - 1;
        break;
      case "Initial":
        return initialState;
        break;
      default:
        return 0;
        break;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatch("Initial")}>Initail State</button>
    </>
  );
};

export default UseReducer;
