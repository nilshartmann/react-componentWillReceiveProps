import * as React from "react";
import * as ReactDOM from "react-dom";

import Counter from "./Counter";

const mountNode = document.getElementById("mount");
ReactDOM.render(<Counter />, mountNode);
