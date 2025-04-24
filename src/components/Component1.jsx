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

import React, { createContext } from "react";
import Component2 from "./Component2";

export const context = createContext();

const Component1 = () => {
  return (
    <>
      <h1>Component1</h1>
      <context.Provider value="Hello" >
        <Component2 />
      </context.Provider>
    </>
  );
};

export default Component1;
