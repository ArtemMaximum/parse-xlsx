import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BaseTemplate } from "./ui/templates";
import CompareUnloadings from "./modules/unloadings/containers/CompareUnloadings";

// import { UIType } from "./modules/factory";

// const UIRadionGroup = new UIType("radio");
// const UICheckboxGroup = new UIType("checkbox");
// const MyRadio = UIRadionGroup.create();
// const MyCheckbox = UICheckboxGroup.create();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<MyRadio />
        <MyCheckbox />*/}
      </header>
      <BaseTemplate>
        <CompareUnloadings />
      </BaseTemplate>
    </div>
  );
}

export default App;
