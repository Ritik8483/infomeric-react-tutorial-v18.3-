// import React from 'react'

// export const MainComponent = () => {
//   return (
//     <div>MainComponent</div>
//   )
// }

import React, { useState } from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import "../public-sapient/MainComponent.css";
import styles from "./MainComponent.module.css";

const arr = [
  {
    name: "Ritik Chauhan",
    email: "rrajput6863@gmail.com",
  },
  {
    name: "Sachin Vats",
    email: "sachin@gmail.com",
  },
  {
    name: "Neha Khan",
    email: "nehakhan@gmail.com",
  },
];
const MainComponent = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
//   const condition = true;

console.log("inputFields",inputFields);

const handleSubmit=(e)=>{
    e.preventDefault();
    if(!inputFields.name || !inputFields.email){
        alert("Please fill all fields")
        return
    }
    console.log("inputFields",inputFields);
}

  return (
    // <>
    //   <h1 className={styles.borderBox}>MainComponent</h1>
    //   {/* <h1 className='box' >MainComponent</h1> */}
    //   {/* {
    //         condition ? <FirstComponent/> : <SecondComponent/>
    //     } */}
    //   {arr.map((item, index) => {
    //     return (
    //       <div key={item + index}>
    //         <p>Name : {item.name} </p>
    //         <h2>Email : {item.email}</h2>
    //       </div>
    //     );
    //   })}
    // </>

    // <>
    // <form onSubmit={handleSubmit} >
    // <div style={{display:"flex",flexDirection:"column",gap:"20px"}} >
    //   <input
    //     type="text"
    //     placeholder="Enter Name"
    //     name="name"
    //     value={inputFields.name}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Enter Name"
    //     name="email"
    //     value={inputFields.email}
    //     onChange={handleChange}
    //   />
    //   <button type="submit" >Submit</button>
    // </div>
    // </form>
    // </>

    <>
        <h1>Ritik</h1>
    </>
  );
};

export default MainComponent;

// ->Atomic Design Principles : Used for creating scalable, consistent, and reusable component
// Atoms : The smallest, indivisible UI elements (Buttons, Input fields,)
// Molecules : Combinations of atoms that form simple components. Ex: Seacrhbar (input + button)
