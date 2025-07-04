// import React, { useState } from "react";

//Existing Form Handling Implementation
// const UseFormStatus = () => {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [pending, setPending] = useState(false);    //we use pending state
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPending(true)
//     setTimeout(() => {
//       console.log("Payload",data);
//       setPending(false)
//       setData({ email: "", password: "" })
//     }, 1000);
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
//         <button type="submit">{pending ? "Submitting..." : "Submit"}</button>
//       </form>
//     </>
//   );
// };

// export default UseFormStatus;

// -------------------------------------------------------------------------------

// It only returns status information of the
// parent form element and not the <form> element rendered in the same component

import { useFormStatus } from "react-dom";

const InputForm = () => {
  const { pending, data } = useFormStatus();

  console.log("pending", pending);
  console.log("email", data?.get("email"));   //use optional chaining
  console.log("password", data?.get("password"));

  return (
    <>
      <h3>Form</h3>
      <input type="text" placeholder="Enter email" name="email" />
      <br />
      <input type="password" placeholder="Enter password" name="password" />
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

// -------This will not work
// const {pending, formdata} = useFormStatus()
// return (
//     <form action={submit}></form>
//   );




// ------------------------------------------------------------------------------------------
// import { useFormStatus } from "react-dom";

// function UploadProgress() {
//   const { pending, progress } = useFormStatus();

//   return (
//     <div>
//       {pending && progress && (
//         <div className="upload-progress">
//           <div 
//             className="progress-bar" 
//             style={{width: `${progress}%`}}
//           />
//           <span>{progress}% uploaded</span>
//         </div>
//       )}
//     </div>
//   );
// }

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button disabled={pending}>
//       {pending ? 'Submitting...' : 'Submit'}
//     </button>
//   );
// }

// const UseFormStatus = () => {
//   return (
//     <form action={async (formData) => {
//       console.log("iuploadingh");
      
//     }}>
//       <input type="file" name="document" />
//       <UploadProgress />
//       <SubmitButton />
//     </form>
//   );
// }

// export default UseFormStatus;