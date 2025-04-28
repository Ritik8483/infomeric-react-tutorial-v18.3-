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

import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dd = fetch(url)
      .then((resp) => resp.json())
      .then((dd)=>setData(dd))
      .catch((err) => console.log("err", err));

      console.log("dd",dd);
      
  }, []);

  return data;
};

export default useFetch;
