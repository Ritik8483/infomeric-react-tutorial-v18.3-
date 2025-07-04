//ToggleButton
// The parent manages the logic/state, while the children
// (compound components) communicate through context or props.

import { createContext, useContext, useState } from "react";

// Think of <Select> as the parent and <Option> as the children.

// import React, { useState, createContext, useContext } from "react";

// // Context for sharing toggle state
// const ToggleContext = createContext();

// export const Toggle = ({ children }) => {
//   const [on, setOn] = useState(false);
//   const toggle = () => setOn((prev) => !prev);

//   return (
//     <ToggleContext.Provider value={{ on, toggle }}>
//       {children}
//     </ToggleContext.Provider>
//   );
// };

// export const ToggleOn = ({ children }) => {
//   const { on } = useContext(ToggleContext);    // means the text written inside <ToggleOn>The toggle is ON</ToggleOn>
//   return on ? children : null;
// };

// export const ToggleOff = ({ children }) => {    // means the text written inside <ToggleOff>The toggle is ON</ToggleOff>
//   const { on } = useContext(ToggleContext);
//   return !on ? children : null;
// };

// export const ToggleButton = () => {             //it's called with self closing tag <ToggleButton />
//   const { toggle } = useContext(ToggleContext);
//   return <button onClick={toggle}>Toggle</button>;
// };

const toggleContext = createContext()
export const Toggle = ({children}) => {
  const [toggleState,setToggleState] = useState(false);

  const handleToggle = ()=>{
    setToggleState((prev)=>!prev)
  }

  return (
    <>
      <h1>Hi I am toggle btn</h1>
      <toggleContext.Provider value={{toggleState,handleToggle}} >
        {children}
      </toggleContext.Provider>
    </>
  );
};


export const ToggleOn=({children})=>{
  const {toggleState} = useContext(toggleContext)
  return toggleState ? children : null
}

export const ToggleOff=({children})=>{
  const {toggleState} = useContext(toggleContext)
  return !toggleState ? children : null
}

export const ToggleButton=()=>{
  const {handleToggle} = useContext(toggleContext)
  return (
    <button onClick={handleToggle} >Handle Toggle btn</button>
  )
}