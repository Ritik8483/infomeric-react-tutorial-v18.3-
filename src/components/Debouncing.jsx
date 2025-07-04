// import React, { useEffect, useState } from "react";

// const Debouncing = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [debouncedValue, setDebouncedValue] = useState("");

//   console.log("searchInput", searchInput);

//   useEffect(() => {
//     const tt = setTimeout(() => {
//       setDebouncedValue(searchInput);
//     }, 1000);

//     return () => {
//       clearTimeout(tt);
//     };
//   }, [searchInput]);

//   console.log("debouncedValue", debouncedValue);

//   return (
//     <>
//       <h3>Debouncing after 1sec</h3>
//       <p>Value - {debouncedValue}</p>
//       <input
//         type="text"
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />
//     </>
//   );
// };

// export default Debouncing;


// ---------------------------------------------------------------------
// import React, { useEffect, useState } from 'react'

// const Debouncing = () => {
//   const [name,setName] = useState("");
//   const [debouncedValue,setDebouncedValue] = useState("");
//   console.log("Name",name);
//   useEffect(() => {
//     const dd = setTimeout(() => {
//       setDebouncedValue(name)
//     }, 1000);
  
//     return () => {
//       clearInterval(dd)
//     }
//   }, [name])
  
//   return (
//     <div>
//       <p>Name : {name}</p>
//       <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)} />
//       <h2>Debounced value : {debouncedValue}</h2>
//     </div>
//   )
// }

// export default Debouncing


// Debouncing is a technique to delay a function call until after a certain time has passed since the last time it was invoked.
// ➔ If you keep typing or clicking, it waits.
// ➔ When you stop for a moment (like 300ms), then it triggers the function
// Search inputs (avoid API calls on every keystroke)
// Resizing events
// Scroll events


// ------------------

import React, { useEffect, useState } from 'react'

const Debouncing = () => {
  const [text,setText] = useState("")
  const [searchInput,setSearchInput] = useState("")

  useEffect(() => {
    const time = setTimeout(() => {
      setSearchInput(text)
    }, 1000);
  
    return () => {
      clearInterval(time)
    }
  }, [text])
  
  return (
    <>
    <p>Normal text : {text}</p>
    <p>Debounced text : {searchInput}</p>
    <input type="text" placeholder='Name' value={text} onChange={(e)=>setText(e.target.value)} />
    </>
  )
}

export default Debouncing