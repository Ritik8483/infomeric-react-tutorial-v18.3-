import React from "react";

function Throttling() {
  function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func(...args);
      }
    };
  }

  const handleClick = () => {
    console.log("Button clicked at", new Date().toLocaleTimeString());
  };

  const throttledClick = throttle(handleClick, 3000); // Once every 3 seconds

  return (
    <div>
      <h2>Click the button!</h2>
      <button onClick={throttledClick}>Click Me Fast 🔥</button>
    </div>
  );
}

export default Throttling;


// Throttling in React is a technique used to limit the rate at which a 
// function is executed. It ensures that a function is called at most once within a specified time interval.