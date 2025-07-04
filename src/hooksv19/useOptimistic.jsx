// const [optimisticState, setOptimisticState] = useOptimistic(actualState, updateFn);
// actualState : which is the value of the optimistic state when no action is pending.
// updateFn : (optional), which is a function that takes the actual state and the value passed to the setOptimisticState method and calculates the optimisticState. If this parameter is not specified, the optimistic state is equal to the new value.
// optimisticState : which is the optimistic (temporary) value shown while the action is pending.
// setOptimisticState : which is a function that sets the optimistic state to a new value.


import { useOptimistic, useState } from "react";

const UseOptimistic = () => {
  const [title, setTitle] = useState("Title");
  const [optimisticTitle, setOptimisticTitle] = useOptimistic(title);
  const [error, setError] = useState(null);
  const pending = title !== optimisticTitle;
//   const handleSubmit = async (formData) => {
//     console.log("formData",formData);
//   };
  const handleSubmit = async (formData) => {
    setError(null);
    setOptimisticTitle(formData?.get("title"));
    try {
      const updatedTitle = await submitTitle(formData);
      setTitle(updatedTitle);
    } catch (e) {
      setError(e);
    }
  };
  return (
    <div>
      <h2>{optimisticTitle}</h2>
      <p> {pending && "Updating..."} </p>
      <form action={handleSubmit}>
        <input type="text" name="title" placeholder="Change Title" />
        <button type="submit" disabled={pending}>
          Submit
        </button>
      </form>
      {/* <div className="error">{error && error}</div> */}
    </div>
  );
};


export default UseOptimistic