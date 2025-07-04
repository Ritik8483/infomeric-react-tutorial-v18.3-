// // import React from 'react'

// // const SecondComponent = () => {
// //   return (
// //     <div>SecondComponent</div>
// //   )
// // }

// // export default SecondComponent

// import React, { useEffect, useState } from "react";

// const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=50";

// const SecondComponent = () => {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [selectedUrl, setSelectedUrl] = useState("");
//   const [pokemonDetails, setPokemonDetails] = useState({});
//   const [cache, setCache] = useState({});

//   // Fetch initial list of Pokémon
//   useEffect(() => {
//     const fetchPokemonList = async () => {
//       try {
//         const response = await fetch(POKEMON_API);
//         const data = await response.json();
//         setPokemonList(data.results); // array of { name, url }
//       } catch (error) {
//         console.error("Error fetching Pokémon list:", error);
//       }
//     };

//     fetchPokemonList();
//   }, []);

//   console.log("cache",cache);

//   // Fetch Pokémon details on dropdown selection
//   useEffect(() => {
//     if (!selectedUrl) return;

//     // Check cache first
//     if (cache[selectedUrl]) {       //if it's already selected then it
//       setPokemonDetails(cache[selectedUrl]);        //set pokimon abilities details with already presented api url
//       return;
//     }

//     const fetchPokemonDetails = async () => {
//       try {
//         const response = await fetch(selectedUrl);
//         const data = await response.json();

//         const details = {
//           name: data.name,
//           abilities: data.abilities.map((ab) => ab.ability.name),
//         };

//         setPokemonDetails(details);
//         setCache((prevCache) => ({ ...prevCache, [selectedUrl]: details }));
//       } catch (error) {
//         console.error("Error fetching Pokémon details:", error);
//       }
//     };

//     fetchPokemonDetails();
//   }, [selectedUrl]);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//       <h1>Pokémon Ability Viewer</h1>

//       <label htmlFor="pokemon-select">Choose a Pokémon: </label>
//       <select
//         id="pokemon-select"
//         onChange={(e) => setSelectedUrl(e.target.value)}
//         defaultValue=""
//       >
//         <option value="" disabled>
//           -- Select a Pokémon --
//         </option>
//         {pokemonList.map((pokemon) => (
//           <option key={pokemon.name} value={pokemon.url}>
//             {pokemon.name}
//           </option>
//         ))}
//       </select>

//       {pokemonDetails.name && (
//         <div style={{ marginTop: "2rem" }}>
//           <h2>{pokemonDetails.name.toUpperCase()}</h2>
//           <h3>Abilities:</h3>
//           <ul>
//             {pokemonDetails.abilities.map((ability, index) => (
//               <li key={index}>{ability}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SecondComponent;

// -------------------------------------------------------

// import React, { useEffect, useState } from "react";

// const url = "https://pokeapi.co/api/v2/pokemon?limit=50";

// const SecondComponent = () => {
//   const [data, setData] = useState([]);
//   const [selectedPokimonUrl, setSelectedPokimonUrl] = useState("");
//   const [pokimonAbilities, setPokimonAbilities] = useState([]);
//   const [cache, setCache] = useState({});

//   const getAllPokimons = async () => {
//     try {
//       const resp = await fetch(url);
//       const json = await resp.json();
//       setData(json?.results);
//     } catch (error) {
//       console.log("error", error);
//       setError(true);
//     }
//   };

//   useEffect(() => {
//     getAllPokimons();
//   }, []);

//   const getSelectedPokimonDetails = async () => {
//     try {
//       const resp = await fetch(selectedPokimonUrl);
//       const json = await resp.json();
//       const abilities = json?.abilities?.map((it) => it?.ability?.name);
//       setPokimonAbilities(abilities);
//       setCache((prev) => ({
//         ...prev,
//         [selectedPokimonUrl]: abilities,
//       }));
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     if (!selectedPokimonUrl?.length) return;
//     if (cache[selectedPokimonUrl]) {
//         setPokimonAbilities(cache[selectedPokimonUrl])
//         return
//     }
//     getSelectedPokimonDetails();
//   }, [selectedPokimonUrl]);

//   console.log("selectedPokimonUrl", selectedPokimonUrl);

//   return (
//     <>
//       <h1>Hello Pokimons</h1>
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <label htmlFor="pokimons">Select Pokimon from here</label>
//         <select
//           id="pokimons"
//           onChange={(e) => setSelectedPokimonUrl(e.target.value)}
//         >
//           <option>Select Pokimons</option>
//           {data?.map((item, index) => {
//             return (
//               <option value={item.url} key={item.url}>
//                 {item.name}
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       {pokimonAbilities?.length
//         ? pokimonAbilities.map((item) => <p key={item}>{item}</p>)
//         : null}
//     </>
//   );
// };

// export default SecondComponent;

// ------------------------------------------------------------------
import React, { useEffect, useState } from "react";

const url = "https://pokeapi.co/api/v2/pokemon?limit=50";

const SecondComponent = () => {
  const [data, setData] = useState([]);
  const [selectedPokimonUrl, setSelectedPokimonUrl] = useState("");
  const [abilities, setAbilities] = useState("");
  const [cache, setCache] = useState({});

  const getAllPokimons = async () => {
    try {
      const resp = await fetch(url);
      const respJson = await resp.json();
      setData(respJson?.results);
      //   console.log(respJson);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getAllPokimons();
  }, []);

  const getAllAbilities = async () => {
    try {
      const resp = await fetch(selectedPokimonUrl);
      const respJson = await resp.json();
      const abilities = respJson?.abilities?.map((item) => item.ability.name);
      setAbilities(abilities);
      setCache((prev) => ({
        ...prev,
        [selectedPokimonUrl]: abilities,
      }));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (!selectedPokimonUrl) return;

    if(cache[selectedPokimonUrl]){
        setAbilities(cache[selectedPokimonUrl]);
        return
    }
    getAllAbilities();
  }, [selectedPokimonUrl]);

  console.log("selectedPokimonUrl", selectedPokimonUrl);

  return (
    <>
      <h3>Hello Pokimons</h3>
      <label htmlFor="Pokimons">Select Pokimon from here</label>
      <select
        onChange={(e) => setSelectedPokimonUrl(e.target.value)}
        id="Pokimons"
      >
        <option value="">Select pokimons</option>
        {data?.map((item, index) => {
          return (
            <option key={item.url} value={item.url}>
              {item.name}
            </option>
          );
        })}
      </select>

      {abilities?.length
        ? abilities?.map((item) => {
            return (
              <>
                <p key={item}>{item}</p>
              </>
            );
          })
        : null}
    </>
  );
};

export default SecondComponent;
