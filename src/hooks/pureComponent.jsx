import React, { useState, memo } from "react";

const PureChild = (({ count }) => {
  console.log("Pure Child Rendered");       //pure component as it utilizes the count as it is
  return <h3>Count: {count}</h3>;
});

const PureComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <PureChild count={count} />
    </div>
  );
};

export default PureComponent;

//Pure components are those that always return the same output given the same input.
// Pure components are stateless and do not have any internal state
//A component that only re-renders when its props or state change.
//No side effects