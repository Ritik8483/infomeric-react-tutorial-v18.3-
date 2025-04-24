import React, { useState } from 'react';

const ImpureComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default ImpureComponent

//Impure components can have internal state and manage their own data.
// can perform side effects, such as making API calls or modifying global state.
//Statefull component