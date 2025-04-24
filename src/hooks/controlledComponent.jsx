import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  return (
    <>
      <div>
        ControlledComponent
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>Name : {name}</h3>
      </div>
    </>
  );
};

export default ControlledComponent;

//State is managed by react like useState
//uses onChange handler to update the state
//Useful for validations, real-time updates, and form libraries like Formik