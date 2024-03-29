import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "mobx-react";

import theme from "./theme";
import "./index.css";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

/* Stores */
import { unloadingsStore } from "./modules/unloadings/UnloadingsStore";

const stores = { unloadingsStore };

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider {...stores}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
