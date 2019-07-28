import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { FilesDropzone } from "./ui/atoms";
import { BaseTemplate } from "./ui/templates";

// import { UIType } from "./modules/factory";

// const UIRadionGroup = new UIType("radio");
// const UICheckboxGroup = new UIType("checkbox");
// const MyRadio = UIRadionGroup.create();
// const MyCheckbox = UICheckboxGroup.create();

function App({ hello }) {
  return (
    <div className="App">
      <header className="App-header">
        {console.table(hello)}
        <img src={logo} className="App-logo" alt="logo" />
        {/*<MyRadio />
        <MyCheckbox />*/}
      </header>
      <BaseTemplate>
        <FilesDropzone
          multiple
          onDrop={files => {
            console.log("files :", files);
          }}
        />
      </BaseTemplate>
    </div>
  );
}

export default App;
