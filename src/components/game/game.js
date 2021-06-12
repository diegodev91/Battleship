import React, { useState } from "react";
import "./game.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SettingsIcon from "@material-ui/icons/Settings";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { Switch, Route } from "react-router-dom";
import Settings from "../settings/settings";
import ScoreBoard from "../score-board/score-board";
import Field from "../field/field";
import { useHistory } from "react-router-dom";

export default function Game() {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const getRouteFromIndex = (index) => {
    return index === 0 ? "/" : index === 1 ? "game" : "score-board";
  };

  return (
    <React.Fragment>
      <h1>BattleShip App!</h1>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          history.push(getRouteFromIndex(newValue));
        }}
        showLabels
      >
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        <BottomNavigationAction label="Game" icon={<VideogameAssetIcon />} />
        <BottomNavigationAction label="ScoreBoard" icon={<AssessmentIcon />} />
      </BottomNavigation>
      <Switch>
        <Route exact path="/" component={Settings} />
        <Route path="/game" component={Field} />
        <Route path="/score-board" component={ScoreBoard} />
      </Switch>
    </React.Fragment>
  );
}
