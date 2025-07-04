// import React, { useState, memo } from "react";

// const PureChild = (({ count }) => {
//   console.log("Pure Child Rendered");       //pure component as it utilizes the count as it is
//   return <h3>Count: {count}</h3>;
// });

// const PureComponent = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <PureChild count={count} />
//     </div>
//   );
// };

// export default PureComponent;






// ------------------------------------------------------

import React, { memo, useState } from 'react'

const PureChild=memo(({count})=>{   //w/o memo it callls it again
  console.log("called");
  
  return(
    <p>{count}</p>
  )
})

const PureComponent = () => {
  const [count,setCount] = useState(0)
  const [name,setName] = useState("")
  return (
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={()=>setCount(count + 1)} >Increase</button>
      <PureChild count={count} />
    </div>
  )
}

export default PureComponent

//Pure components are those that always return the same output given the same input.
//Pure components are stateless and do not have any internal state
//A component that only re-renders when its props or state change.
//No side effects
//Uses shallow comparison to check for changes