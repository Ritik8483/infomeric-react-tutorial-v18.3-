// import React, { useState } from 'react';

// const ImpureComponent = () => {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// };

// export default ImpureComponent

// -----------------------------------

let count = 0;

const ImpureComponent = () => {
  count += 1; // ❌ Uses external state
  return <p>Render count: {count}</p>;
};

 export default ImpureComponent


//Impure components can have internal state and manage their own data.
// can perform side effects, such as making API calls or modifying global state.
//Statefull component

// Update their state using setState or useState on user input.
// Their behavior depends on internal state changes, not just props.
// This makes them impure, since their output (UI) depends on user-driven changes, not only on props.

