// import React, { memo } from 'react'

// const UseCallbackChild = ({handleClick}) => {
//     console.log("Child component re-rendered");
//   return <button onClick={handleClick}>Click Me Child</button>;
// }

// export default memo(UseCallbackChild)        //so that componenent doesn't render untill
// // export default UseCallbackChild

// ---------------------------------------------------------------------------------------

import React, { memo } from "react";

const UseCallbackChild = ({ addToDos }) => {
  console.log("called Child Component");
  
  return (
    <>
      <button onClick={addToDos} >AddToDos</button>
    </>
  );
};

export default memo(UseCallbackChild);
// export default UseCallbackChild;
