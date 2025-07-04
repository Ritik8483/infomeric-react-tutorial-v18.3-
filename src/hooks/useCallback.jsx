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

//useCallback memoizes a function and ensures it is not recreated on every render.
// used when passing functions as props to child components.
//reduce unnecessary re-renders, improving performance.

// ---------------------------------------------------------------------------------------------

// import React, { useCallback, useState } from "react";
// import UseCallbackChild from "./useCallbackChild";

// const UseCallback = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   // const addToDos = () => {
//   //   console.log("called addToDos");
//   //   setTodos((prev) => [...prev, "Add Todo"]);
//   // };

//   const addToDos = useCallback(() => {
//     console.log("called addToDos");
//     setTodos((prev) => [...prev, "Add Todo"]);
//   }, []);

//   return (
//     <>
//       <h3>Count : {count}</h3>
//       {todos.map((item,index) => (
//         <p key={item+index} >{item}</p>
//       ))}
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <UseCallbackChild addToDos={addToDos} />
//     </>
//   );
// };

// export default UseCallback;

// --------------------------------------------------------------------------------------

// import React, { useCallback, useState } from "react";
// import UseCallbackChild from "./useCallbackChild";

// const UseCallback = () => {
//   const [count, setCount] = useState(0);
//   const [todo, setTodo] = useState([]);

//   const handleCount = () => {
//     setCount(count + 1);
//   };

//   // const addToDos = () => {
//   //   setTodo((prev) => [...prev, "Add Todo"]);
//   // };

//   const addToDos = useCallback(() => {
//     console.log("CALLED");
//     setTodo((prev) => [...prev, "Add Todo"]);
//   }, [todo]);

//   return (
//     <>
//       <p>Count : {count}</p>
//       <button onClick={handleCount}>Increment</button>
//       {todo?.map((item, index) => (
//         <p key={item + index}>{item}</p>
//       ))}
//       <UseCallbackChild addToDos={addToDos} />
//     </>
//   );
// };

// export default UseCallback;

// ----------------------------------------

import React, { useCallback, useState } from "react";
import UseCallbackChild from "./useCallbackChild";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setToDos] = useState([]);

  // const handleAddTodo = () => {
  //   console.log("callled");
  //   setToDos((prev) => {
  //     return [...prev, "Add Todo"];
  //   });
  // };

  const handleAddTodo = useCallback(() => {
    console.log("callled");
    setToDos((prev) => {
      return [...prev, "Add Todo"];
    });
  }, [todos]);

  return (
    <>
      <h4>Count : {count}</h4>
      <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
      {/* <button onClick={handleAddTodo}>Add Todos</button> */}
      {todos.map((item, index) => (
        <p key={item + index}>{item}</p>
      ))}

      <UseCallbackChild handleAddTodo={handleAddTodo} />
    </>
  );
};

export default UseCallback;
