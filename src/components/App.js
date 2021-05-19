import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import React, { useState, useEffect } from "react";
import { Grid, Row } from "react-bootstrap";
import "../assets/css/App.css";
import Field from "./Field.js";
import Navigator from "./Navigator";
import Stats from "./Stats";
import { shipTypes } from "../common/constants";
import { getField, makeClone } from "../common/generateBaseData";
import { getMaxHits } from "../common/getMaxHits";

export default function App(props) {
  const [field, setField] = useState(null);
  const [flota, setFlota] = useState(null);
  const [shots, setShots] = useState(0);
  const [hits, setHits] = useState(0);
  const [maxHits, setMaxHits] = useState(0);
  const [screenMode, setScreenMode] = useState(null);

  useEffect(() => {
    const maxHits = getMaxHits();
    let newflota = _.cloneDeep(shipTypes);
    setFlota(newflota);
    setMaxHits(maxHits);
  }, []);

  const onClick = () => {
    let newflota = _.cloneDeep(shipTypes);
    setField(getField());
    setHits(0);
    setShots(0);
    setFlota(newflota);
  };

  const resetGame = () => {
    let newflota = _.cloneDeep(shipTypes);
    setField(null);
    setHits(0);
    setShots(0);
    setFlota(newflota);
  };

  const onCellClick = (x, y) => {
    let newField = makeClone(field);
    let shot = shots + 1;
    let hit = hits;
    let newflota = [...flota];
    let cellValue = field[x][y];
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
      hit += 1;
      setField(newField);
      setHits(hit);
      setShots(shots);
      setFlota(newflota);
    } else {
      newField[x][y] = "miss";
      setField(newField);
      setShots(shot);
    }
  };

  return (
    <div className="main-content">
      <Navigator resetGame={() => resetGame()} screenMode={screenMode} />
      <Grid>
        {screenMode === "desktop" ? (
          <Row className="show-grid">
            <Stats flota={flota} hits={hits} shots={shots} />
            <Field
              hits={hits}
              field={field}
              onClick={() => onClick()}
              onCellClick={(x, y) => onCellClick(x, y)}
              screenMode={screenMode}
            />
          </Row>
        ) : (
          <Row className="show-grid">
            <Field
              hits={hits}
              field={field}
              onClick={() => onClick()}
              onCellClick={(x, y) => onCellClick(x, y)}
              screenMode={screenMode}
            />
            <Stats flota={flota} hits={hits} shots={shots} />
          </Row>
        )}
      </Grid>
    </div>
  );
}
