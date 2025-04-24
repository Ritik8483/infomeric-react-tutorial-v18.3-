// import React, { useMemo, useState } from "react";

// const UseMemo = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(5);

//   // Expensive Calculation (runs on every render) on Increment Count also
// //   const expensiveCalculation = () => {
// //     console.log("Calculating...");
// //     return number ** 2; // Squaring the number
// //   };

//   const squaredNumber = useMemo(() => {     //Prevents unnecessary calculations that happen on every render.
//     console.log("Calculating...");      //useMemo returns a memoized value
//     return number ** 2;
//   }, [number]);

//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       {/* <h3>Square of {number}: {expensiveCalculation()}</h3> */}
//       <h3>Square of {number}: {squaredNumber}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <button onClick={() => setNumber(number + 1)}>Increase Number (Square)</button>
//     </div>
//   );
// };

// export default UseMemo;

//useMemo Hook returns a memoized value.
// useMemo Hook only runs when one of its dependencies update
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.



// -------------------------------------------------------------------------

import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [fact, setFact] = useState(5);

  const calculation = () => {
    console.log("called");

    return fact * fact;
  };

  const calc = calculation();

  // const memoizedCalc = useMemo(() => {
  //   console.log("called");
  //   return fact * fact;
  // }, [fact]);

  return (
    <>
      <h1>Count : {count}</h1>
      <h3>Square of {fact} : {calc}</h3>
      {/* <h3>MemoValue of {fact} = {memoizedCalc}</h3> */}
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
      <button onClick={() => setFact((pre) => pre + 1)}>Increment</button>
    </>
  );
};

export default UseMemo;
