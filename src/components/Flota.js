import React, { Component } from "react";
import Hitpoints from "./Hitpoints";

class Flota extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { flota } = this.props;
    return (
      <ul className="flotaContainer">
        {flota &&
          flota.map((ship, index) => {
            return (
              <li key={index} className="shipItem">
                <Hitpoints
                  hitPoints={ship.hitPoints - ship.hits}
                  hits={ship.hits}
                />
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Flota;
