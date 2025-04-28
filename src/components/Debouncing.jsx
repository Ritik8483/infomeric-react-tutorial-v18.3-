import React, { useEffect, useState } from "react";

const Debouncing = () => {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  console.log("searchInput", searchInput);

  useEffect(() => {
    const tt = setTimeout(() => {
      setDebouncedValue(searchInput);
    }, 1000);

    return () => {
      clearTimeout(tt);
    };
  }, [searchInput]);

  console.log("debouncedValue", debouncedValue);

  return (
    <>
      <h3>Debouncing after 1sec</h3>
      <p>Value - {debouncedValue}</p>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </>
  );
};

export default Debouncing;



// Debouncing is a technique to delay a function call until after a certain time has passed since the last time it was invoked.
// ➔ If you keep typing or clicking, it waits.
// ➔ When you stop for a moment (like 300ms), then it triggers the function
// Search inputs (avoid API calls on every keystroke)
// Resizing events
// Scroll events