import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "normalize.css";
import "../../shared-components/src/components/core/core.scss";
import "../../shared-components/src/components/core/strm.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
