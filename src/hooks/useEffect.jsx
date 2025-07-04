// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);
//   const [startClock, setStartClock] = useState(false);
//   useEffect(() => {
//     if (!startClock) return;
//     const tt = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);
//     console.log("tInterval", tt);

//     return(()=>{
//         console.log("tt", tt);
//         clearInterval(tt)
//     })
//   }, [startClock]);
//   return (
//     <>
//       <div>UseEffect : {count}</div>
//       <button onClick={() => setStartClock(true)}>Start</button>
//       <button onClick={() => setStartClock(false)}>Stop</button>
//     </>
//   );
// };

// export default UseEffect;

// ---------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);
//   const [status, setStatus] = useState(false);

//   useEffect(() => {
//     if (!status) return;
//     const tt = setInterval(() => {
//       // setCount(count + 1);
//       setCount((prev) => prev + 1);
//     }, 1000);

//     console.log("tt",tt);

//     return(()=>{
//       clearInterval(tt)
//     })
//   }, [status]);

//   console.log("count",count);

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={() => setStatus(true)}>Start</button>
//       <button onClick={() => setStatus(false)}>Stop</button>
//     </>
//   );
// };

// export default UseEffect;

// ----------------------------------------------------------------------

// import React, { useEffect, useState } from "react";

// const UseEffect = () => {
//   const [start, setStart] = useState(false);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!start) return;
//     const tt = setInterval(() => {
//       setCount((prev) => prev + 1);
//       // setCount(count + 1);
//     }, 1000);
//     return () => {
//       clearInterval(tt);
//     };
//   }, [start]);

//   console.log("count", count);
//   console.log("start", start);

//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button onClick={() => setStart(!start)}>
//         {start ? "Stop" : "Start"}
//       </button>
//     </>
//   );
// };

// export default UseEffect;



// -----------------------------------------------

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count,setCount] = useState(0);
  const [start,setStart] = useState(false);

  useEffect(()=>{
    if(!start) return   //start === false
    const dd = setInterval(() => {
      console.log("called");
      
      setCount((prev)=>prev+1)
      // setCount(count+1)
    }, 1000);

    return(()=>{
      clearInterval(dd)
    })
  },[start])
  return (
    <>
    {count}
      <button onClick={()=>setStart(!start)} >{start ? "Stop" :"Start"}</button>
    </>
  )
}

export default UseEffect