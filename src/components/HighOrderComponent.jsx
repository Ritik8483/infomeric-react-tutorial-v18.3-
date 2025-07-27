//HOC is a function that takes a component as an argument and returns a new component
// const withMessage = (Component) => {      //This is a Higher-Order Component (HOC) function.  //It takes a Component as an argument
//   return function WrappedComponent(props) {   //Returns a new component called WrappedComponent
//     return (
//       <div>
//         <p>This is a message from HOC</p>
//         <Component {...props} />      {/* Nothing basically Hello component */}
//       </div>
//     );
//   };
// };
// //Now WrappedComponent is the enhanced version of the original component.

// const Hello = () => <h2>Hello, World!</h2>;
// export const HighOrderComponent = withMessage(Hello);   //Now WrappedComponent is the enhanced version of the original component.

// ---------------------------------------

// import React from 'react'

// const ChildComponent = () => {
//   return (
//     <>
//     <h6>
//       Hio I child component passed as a prop to hightFunction
//       </h6></>
//   )
// }

// const hightFunction=(ArgComponent)=>{
//   return function NewComponent(args){
//     return(
//       <>
//       <h1>Hello I am New Components</h1>
//       <ArgComponent  {...args} />
//       </>
//     )
//   }
// }

// export const HighOrderComponent = hightFunction(ChildComponent)

// -----------------------------------------------------

// const highFunction = (Child) => {
//   return function WrappedCompo(props) {
//     return (
//       <>
//         <p>Hi I am your Parent Component</p>
//         <Child {...props} />
//       </>
//     );
//   };
// };
// const ChildComponent = () => {
//   return (
//     <div>
//       <h1>Hi I am child component</h1>
//     </div>
//   );
// };

// export const HighOrderComponent = highFunction(ChildComponent);

// ---------------------------------------

import React from "react";

const highFunction = (Child) => {
  return function WrappedComponent(props) {
    return (
      <>
        <h1>Hello I am Higher func</h1>
        <Child {...props} />
      </>
    );
  };
};

const ChildComponent = () => {
  return <div>ChildComponent</div>;
};

export const HighOrderComponent = highFunction(ChildComponent);
