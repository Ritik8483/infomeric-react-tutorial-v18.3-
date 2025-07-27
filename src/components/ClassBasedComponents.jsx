// import React, { Component } from "react";

// export default class ClassBasedComponents extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: "", // state to hold input value
//       isToggled: false,
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ inputValue: event.target.value }, () => {
//       console.log("Input value:", this.state.inputValue);       //method of adding console
//     });
//   };

//   handleToggle = () => {
//     this.setState((prevState) => ({ isToggled: !prevState.isToggled }));
//   };

//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           value={this.state.inputValue}
//           onChange={this.handleChange}
//         />

//         <button onClick={this.handleToggle}>
//           {this.state.isToggled ? "ON" : "OFF"}
//         </button>
//       </>
//     );
//   }
// }

// --------------------------------------
import React, { Component } from "react";

export default class ClassBasedComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      toggle: false,
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value }, () => {
      console.log(this.state.name);
    });
  };

  handleClickChange = () => {
    this.setState((prev) => ({ toggle: !prev.toggle }));
  };

  render() {
    return (
      <div>
        <p>ClassBasedComponents</p>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        {this.state.toggle ? "Clicked" : "Not Clicked"}
        <button onClick={this.handleClickChange}>Click Me!</button>
      </div>
    );
  }
}
