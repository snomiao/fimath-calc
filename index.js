import React from "react";
import { render } from "react-dom";
import FimathCalc from "./fimathCalc";

const App = () => <FimathCalc />;
render(<App />, document.querySelector("#root"));
