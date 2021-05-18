import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import "../assets/css/App.css";
import Field from "./Field.js";
import Navigator from "./Navigator";
import Stats from "./Stats";
import { shipTypes } from "../common/constants";
import { getField, makeClone } from "../common/generateBaseData";
import { getMaxHits } from "../common/getMaxHits";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: null,
      flota: null,
      shots: 0,
      hits: 0,
      maxHits: 0,
      screenMode: null,
    };
  }

  UNSAFE_componentWillMount() {
    const maxHits = getMaxHits();
    let newflota = _.cloneDeep(shipTypes);
    this.setState({
      flota: newflota,
      maxHits: maxHits,
    });
  }

  onClick() {
    let newflota = _.cloneDeep(shipTypes);
    this.setState({
      field: getField(),
      hits: 0,
      shots: 0,
      flota: newflota,
    });
  }

  resetGame() {
    let newflota = _.cloneDeep(shipTypes);
    this.setState({
      field: null,
      hits: 0,
      shots: 0,
      flota: newflota,
    });
  }

  onCellClick(x, y) {
    let newField = makeClone(this.state.field);
    let shot = this.state.shots + 1;
    let hits = this.state.hits;
    let newflota = [...this.state.flota];
    let cellValue = this.state.field[x][y];
    if (cellValue >= 100) {
      switch (cellValue) {
        case 100:
          newflota[0].hits = newflota[0].hits + 1;
          break;
        case 200:
          newflota[1].hits = newflota[1].hits + 1;
          break;
        case 300:
          newflota[2].hits = newflota[2].hits + 1;
          break;
        case 400:
          newflota[3].hits = newflota[3].hits + 1;
          break;
        case 500:
          newflota[4].hits = newflota[4].hits + 1;
          break;
        default:
          break;
      }
      newField[x][y] = "hitted";
      hits += 1;
      this.setState({
        field: newField,
        hits: hits,
        shots: shot,
        flota: newflota,
      });
    } else {
      newField[x][y] = "miss";
      this.setState({
        field: newField,
        shots: shot,
      });
    }
  }

  render() {
    let { field, flota, hits, screenMode, shots } = this.state;
    let statsPanel = <Stats flota={flota} hits={hits} shots={shots} />;
    let battleFieldPanel = (
      <Field
        hits={hits}
        field={field}
        onClick={() => this.onClick()}
        onCellClick={(x, y) => this.onCellClick(x, y)}
        screenMode={screenMode}
      />
    );

    return (
      <div className="main-content">
        <Navigator resetGame={() => this.resetGame()} screenMode={screenMode} />
        <Grid>
          {screenMode === "desktop" ? (
            <Row className="show-grid">
              {statsPanel}
              {battleFieldPanel}
            </Row>
          ) : (
            <Row className="show-grid">
              {battleFieldPanel}
              {statsPanel}
            </Row>
          )}
        </Grid>
      </div>
    );
  }
}

export default App;
