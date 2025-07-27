// import React, { createContext, useState } from "react";
// import Component2 from "./Component2";

// export const UserContext = createContext();
// const Component1 = () => {
//   const [user, setUser] = useState("");
//   console.log("Component1");

//   return (
//     <>
//       <UserContext.Provider value={user || "Ritik Chauhan"}>
//         <input value={user} onChange={(e) => setUser(e.target.value)} />
//         <h1>Component1</h1>
//         <Component2 />
//       </UserContext.Provider>
//     </>
//   );
// };

// export default Component1;

// -------------------------------------------------------------------------------------

// import React, { createContext } from "react";
// import Component2 from "./Component2";

// export const context = createContext();

// const Component1 = () => {
//   return (
//     <>
//       <h1>Component1</h1>
//       <context.Provider value="Hello" >
//         <Component2 />
//       </context.Provider>
//     </>
//   );
// };

// export default Component1;

// -----------------------------------------------------------------------------------------------

// import React, { createContext, useState } from "react";
// import Component2 from "./Component2";

// export const InputContext = createContext()
// const Component1 = () => {
//   const [name, setName] = useState("");
//   console.log("name",name);
//   return (
//     <>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <div>Component1</div>

//       <InputContext.Provider value={name} >
//         <Component2 />
//       </InputContext.Provider>
//     </>
//   );
// };

// export default Component1;

// -------------------------------------------------

// import React, { useState } from "react";
// import Component2 from "./Component2";
// import { createContext } from "react";

// export const createTextContext = createContext();
// const Component1 = () => {
//   const [text, setText] = useState("");
//   return (
//     <>
//       <div>Component1</div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <createTextContext.Provider value={text}>
//         <Component2 />
//       </createTextContext.Provider>
//     </>
//   );
// };

// export default Component1;


import React, { createContext, useState } from 'react'
import Component2 from './Component2'

export const createCompContext = createContext()
const Component1 = () => {
  const [name,setName] = useState("")
  return (
    <>
      <input type='text' name='Name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
      <createCompContext.Provider value={name} >
        <Component2/>
      </createCompContext.Provider>
    </>
  )
}

export default Component1