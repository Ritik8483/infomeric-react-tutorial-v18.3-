// import React, { useContext } from "react";
// import { UserContext } from "./Component1";

// const Component5 = () => {
//     console.log("Component5");
//   const context = useContext(UserContext);
//   console.log('context',context);
  
//   return (
//     <>
//       <h5>Component5 {context}</h5>
//     </>
//   );
// };

// export default Component5;





// -------------------------------------------------------------------------------


import React, { useContext } from 'react'
import { context } from './Component1'

const Component5 = () => {
  const userContext = useContext(context);
  console.log("userContext",userContext);
  
  return (
    <>
    Component5
    <h2>{userContext}</h2>
    </>
  )
}

export default Component5