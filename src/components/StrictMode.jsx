import React, { useEffect } from 'react'

const StrictMode = () => {
    useEffect(() => {
        console.log("Mounted");
    
        return () => {
          console.log("Cleanup");
        };
      }, []);
  return (
    <div>Hello</div>
  )
}

export default StrictMode