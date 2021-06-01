import React from "react";
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
  const history = useHistory();

  return (
    <React.Fragment>
      <BottomNavigation
        value={"/"}
        onChange={(event, newValue) => {
          history.push(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Settings"
          icon={<SettingsIcon />}
          value="/"
        />
        <BottomNavigationAction
          label="Game"
          icon={<VideogameAssetIcon />}
          value="/game"
        />
        <BottomNavigationAction
          label="ScoreBoard"
          icon={<AssessmentIcon />}
          value="score-board"
        />
      </BottomNavigation>
      <Switch>
        <Route exact path="/" component={Settings} />
        <Route path="/game" component={Field} />
        <Route path="/score-board" component={ScoreBoard} />
      </Switch>
    </React.Fragment>
  );
}
