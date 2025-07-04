// import useFetch from "./useFetch";

// const CustomHook = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
//   console.log("data",data);

//   return (
//     <>
//       <h1>Custom Hooks</h1>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// export default CustomHook;

// --------------------------------------------------------

// import React from 'react'
// import useFetch from "./useFetch";

// const CustomHooks = () => {
//   const data = useFetch("https://jsonplaceholder.typicode.com/todos");
//   console.log("data",data);

//   return (
//     <div>CustomHooks</div>
//   )
// }

// export default CustomHooks


// -------------------


// import React, { useEffect } from "react";
// import useFetch from "./useFetch";

// const CustomHooks = () => {
//   const data = useFetch("https://jsonplaceholder.typicode.com/todos");
//   console.log(data);

//   return <div>CustomHooks</div>;
// };

// export default CustomHooks;


// ----------------

import React from 'react'
import useFetch from './useFetch';

const url = 'https://jsonplaceholder.typicode.com/todos'
const CustomHooks = () => {
  const data = useFetch(url)
  
  console.log("data",data);
  
  return (
    <div>CustomHooks</div>
  )
}

export default CustomHooks