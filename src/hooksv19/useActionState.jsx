import { useActionState } from "react";

const UseActionState = () => {
  // const [state, formAction] = useActionState(submitData, initialState);

  const submitData = async (prevState, formData) => {
    console.log("prevState", prevState);
    console.log("formData", formData);
    const username = formData?.get("username");
    const age = formData?.get("age");

    const newUser = { username, age };
    const userExists = prevState.users?.some(
      (user) => user.username === username
    );
    if (userExists) {
      return {
        ...prevState,
        error: "Username already exists!",
      };
    }
    return {
      users: [...prevState.users, newUser],
      error: null,
    };
  };

  const [state, formAction] = useActionState(submitData, {
    users: [],
    error: null,
  });

  console.log("state", state);

  // const [state, formAction] = useActionState(submitData, initialState);
  //submitData : which is the function that is called when form is submitted.
  //This function should take two parameters: the current state and a FormData object.
  //initialState : which is the initial value of the state when the form is not submitted.
  // state : which is the current state that is being rendered in the component. This state is equal to the initial state.
  //formAction : This executes the action that you passed with the current state and returns a new, updated state.

  return (
    <>
      {/* UseActionState() works only inside form */}
      <form action={formAction}>
        <div>
          <input type="text" name="username" placeholder="Enter your name" />
          <input type="number" name="age" placeholder="Enter age" />
          <button type="submit">Submit</button>
        </div>
      </form>

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}

      <ul>
        {state.users.map((user, index) => (
          <li key={index}>
            {user.username} - {user.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UseActionState;




// --------------------------------------------------------

// import React from 'react'

// const FormComp = () =>{
//   const {} = useForm
// }

// const UseActionState = () => {
//   return (
//     <>


//     </>
//   )
// }

// export default UseActionState