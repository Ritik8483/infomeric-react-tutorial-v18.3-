// import React, { useState } from "react";

// const ControlledComponent = () => {
//   const [name, setName] = useState("");
//   return (
//     <>
//       <div>
//         ControlledComponent
//         <input
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <h3>Name : {name}</h3>
//       </div>
//     </>
//   );
// };

// export default ControlledComponent;

// -----------------------------------------------------------------
import React, { useState } from "react";

const ControlledComponent = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(user);
  
  return (
    <>
      <input
        type="text"
        name = 'name'
        placeholder="Name"
        value={user.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        name = 'email'
        placeholder="Email"
        value={user.email}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default ControlledComponent;

// Controlled components are considered impure components in React.
//State is managed by react like useState
//uses onChange handler to update the state
//Useful for validations, real-time updates, and form libraries like Formik
