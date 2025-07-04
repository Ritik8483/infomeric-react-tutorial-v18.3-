// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url).then((res) => res.json()).then((data) => setData(data)).catch((err) => console.log("err", err));
//   }, [url]);

//   return [data];
// };

// export default useFetch;

// -----------------------------------------------------------------------------

// import React, { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const dd = fetch(url)
//       .then((resp) => resp.json())
//       .then((dd)=>setData(dd))
//       .catch((err) => console.log("err", err));

//       console.log("dd",dd);

//   }, []);

//   return data;
// };

// export default useFetch;

// ------------------------------------------------------------------------------
// import React, { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const dd = fetch(url)
//       .then((re) => re.json())
//       .then((resp) => setData(resp))
//       .catch((err) => setData(err));
//   }, []);
//   return data;
// };

// export default useFetch;

// ---------------------------------------------------

// import React, { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // (async()=>{
//     //   try {
//     //     const res = await fetch(url);
//     //     const finalJson = await res.json();
//     //     setData(finalJson)
//     //   } catch (error) {
//     //     console.log("error",error);
//     //     setData(error)
//     //   }
//     // })()

//     (async()=>{
//       const res = await fetch(url)
//       .then((res) => res.json())
//       .then((resp) => setData(resp))
//       .catch((err) => setData(err));
//     })()
//   }, [url]);

//   return data;
// };

// export default useFetch;

// ---------------------------------------------

import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(url);
        const json = await resp.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  return data;
};

export default useFetch;
