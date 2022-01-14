import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "../../shared-components/src/components/core/core.scss";
import "../../shared-components/src/components/core/strm.scss";
import "../../shared-components/src/components/core/rtv.scss";
import { DeprecationApp } from "./Deprecation";

ReactDOM.render(
  <React.StrictMode>
    <DeprecationApp />
  </React.StrictMode>,
  document.getElementById("root")
);
