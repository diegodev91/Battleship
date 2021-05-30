import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game/game";
import * as constants from "./common/constants.js";

ReactDOM.render(
  <BrowserRouter>
    <Game />
  </BrowserRouter>,
  document.getElementById("root")
);
