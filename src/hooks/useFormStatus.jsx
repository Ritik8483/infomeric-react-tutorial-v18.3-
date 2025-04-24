// import React, { useState } from "react";

// const UseFormStatus = () => {
//   const [data, setData] = useState({ email: "", password: "" });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setData((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   console.log("data", data);

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h3>Form</h3>
//         <input
//           type="text"
//           placeholder="Enter email"
//           name="email"
//           value={data.email}
//           onChange={(e) => handleChange(e)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Enter password"
//           name="password"
//           value={data.password}
//           onChange={(e) => handleChange(e)}
//         />
//         <br/>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default UseFormStatus;

import React, { useState } from "react";
import { useFormStatus } from "react-dom";

const InputForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { pending } = useFormStatus();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log("pending", pending);

  return (
    <>
      <h3>Form</h3>
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        value={data.email}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        value={data.password}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
    </>
  );
};

const UseFormStatus = () => {
  const handleSubmit = () => {
    console.log("SUBMIT");
  };

  return (
    <>
     {/* useFormStatus() works only inside form */}
      <form action={handleSubmit}>
        <InputForm />
      </form>
    </>
  );
};

export default UseFormStatus;
