// import React, { useEffect, useState } from "react";
// import PokimonCards from "./PokimonCards";

// const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
// const FirstComponent = () => {
//   const [data, setData] = useState({});
//   const fetchPokimons = async () => {
//     try {
//       const resp = await fetch(url);
//       const respJson = await resp.json();
//       setData(respJson);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchPokimons();
//   }, []);

//   console.log("data", data);

//   return (
//     <>
//       <p>Hello Pokimons</p>
//       <div className="pokemon-container">
//         {data?.results?.length
//           ? data.results.map((item, index) => {
//               return <PokimonCards key={index + item.name} value={item.name} />;
//             })
//           : null}
//       </div>
//     </>
//   );
// };

// export default FirstComponent;

// -----------------------------------------------------------

import React, { lazy, useEffect, useState } from "react";
import PokimonCards from "./PokimonCards";

const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
const FirstComponent = () => {
  const [data, setData] = useState([]);

  const getPokimonData = async () => {
    try {
      const resp = await fetch(url);
      const respJson = await resp.json();
      console.log("respJson", respJson);
      setData(respJson.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getPokimonData();
  }, []);
  return (
    <>
      <h4>Hello All pokimons</h4>
      <div className="pokimon-box">
        {data?.map((item, index) => {
          return <PokimonCards key={item.name + index} value={item.name} />;
        })}
      </div>
    </>
  );
};

export default FirstComponent;
