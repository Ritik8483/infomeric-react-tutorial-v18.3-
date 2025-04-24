import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import UseRef from "./hooks/UseRef";
import UseReducer from "./hooks/UseReducer";
import Component1 from "./components/Component1";
import UseMemo from "./hooks/useMemo";
import UseCallbackParent from "./hooks/useCallback";
import CustomHook from "./hooks/customHooks";
import ControlledComponent from "./hooks/controlledComponent";
import UncontrolledComponent from "./hooks/unControlledComponent";
import PureComponent from "./hooks/PureComponent";
import UseFormStatus from "./hooks/useFormStatus";

function App() {

  return (
    <>
      {/* <UseState/> */}
      {/* <UseEffect /> */}
      {/* <UseRef/> */}
      {/* <UseReducer/>    (STDIRES)  */}
      {/* <Component1 />    Create -> Provider ->value */}
      {/* <UseMemo/> */}
      {/* <UseCallbackParent/> */}
      <CustomHook/>
      {/* <ControlledComponent/> */}
      {/* <UncontrolledComponent/> */}
      {/* <PureComponent/> */}
      {/* <UseFormStatus/> */}
    </>
  );
}

export default App;
