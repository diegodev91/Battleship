import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game/game";

ReactDOM.render(
  <BrowserRouter>
    <Game />
  </BrowserRouter>,
  document.getElementById("root")
);
