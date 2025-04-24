// import React, { useState,useCallback } from 'react'
// import UseCallbackChild from './useCallbackChild';

// const UseCallbackParent = () => {
//     const [count, setCount] = useState(0);

//     // Function recreated on every render
//     //Every time setCount updates, handleClick is re-created, causing ChildComponent to re-render unnecessarily.
//     const handleClick = () => {
//       console.log("Button clicked");
//     };

//     // const handleClick = useCallback(() => {     //ChildComponent does not re-render when count changes.
//     //     console.log("Button clicked");      //Improves performance in cases where functions are passed as props.
//     //   }, []);

//     return (
//       <div>
//         <h3>Count: {count}</h3>
//         <button onClick={() => setCount(count + 1)}>Increment Count</button>
//         <UseCallbackChild handleClick={handleClick} />
//       </div>
//     );
// }

// export default UseCallbackParent

// //useCallback memoizes a function and ensures it is not recreated on every render.
// // used when passing functions as props to child components.
// //reduce unnecessary re-renders, improving performance.

// ---------------------------------------------------------------------------------------------

import React, { useCallback, useState } from "react";
import UseCallbackChild from "./useCallbackChild";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // const addToDos = () => {
  //   console.log("called addToDos");
  //   setTodos((prev) => [...prev, "Add Todo"]);
  // };

  const addToDos = useCallback(() => {
    console.log("called addToDos");
    setTodos((prev) => [...prev, "Add Todo"]);
  }, []);

  return (
    <>
      <h3>Count : {count}</h3>
      {todos.map((item,index) => (
        <p key={item+index} >{item}</p>
      ))}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <UseCallbackChild addToDos={addToDos} />
    </>
  );
};

export default UseCallback;
