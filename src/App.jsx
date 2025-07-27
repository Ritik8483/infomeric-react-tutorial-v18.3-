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
import ImpureComponent from "./hooks/impureComponent";
import Debouncing from "./components/Debouncing";
import StrictMode from "./components/StrictMode";
import UseActionState from "./hooksv19/useActionState";
import UseFormStatus from "./hooksv19/useFormStatus";
import UseOptimistic from "./hooksv19/useOptimistic.JSX";
import Throttling from "./components/Throttling";
import Output from "./components/Output";
import { HighOrderComponent } from "./components/HighOrderComponent.jsx";
import ClassBasedComponents from "./components/ClassBasedComponents.jsx";

import MainComponent from "./public-sapient/MainComponent.jsx";
import { Toggle, ToggleOff, ToggleOn,ToggleButton } from "./components/CompoundComponent.jsx";
import FirstComponent from "./public-sapient/FirstComponent.jsx";
import SecondComponent from "./public-sapient/SecondComponent.jsx";
// import {MainComponent} from "./public-sapient/MainComponent.jsx"

function App() {
  return (
    <>
      {/* <ClassBasedComponents/> */}
      {/* <HighOrderComponent />     */}
      {/* <Output /> */}
      {/* <UseState/> */}
      {/* <UseEffect /> */}
      {/* <UseRef/> */}
      {/* <UseReducer/>     {/*  (STDIRES)  Reducer is FN with parameters as SA */}
      {/* <Component1 />           Create -> Provider ->value */}
      {/* <UseMemo/> */}
      {/* <UseCallbackParent/> */}
      {/* <CustomHook/> */}
      <ControlledComponent/>
      {/* <UncontrolledComponent/> */}
      {/* <PureComponent/> */}
      {/* <ImpureComponent/> */}
      {/* <Debouncing /> */}
      {/* <StrictMode/> */}
      {/* <Throttling/> */}
      {/* -------v19-------- */}
      {/* <UseFormStatus/> */}
      {/* <UseActionState/> */}
      {/* <UseOptimistic/> */}

      {/* ------------------------------------------------- */}
      {/* <MainComponent/> */}
      {/* <Toggle>
        <ToggleOn>The toggle is ON</ToggleOn>
        <ToggleOff>The toggle is OFF</ToggleOff>
        <ToggleButton />
      </Toggle> */}
      {/* <FirstComponent/> */}
      {/* <SecondComponent/> */}
    </>
  );
}

export default App;

// rm -rf node_modules package-lock.json
// npm cache clean --force
// npm install
