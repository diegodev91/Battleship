import React from "react";
import hitSmall from "../assets/img/Hit.png";
import missSmall from "../assets/img/Miss.png";

const Hitpoints = (props) => {
  const { hitPoints, hits } = props;
  let hitPointsCounter = [];
  let hitCounter = [];
  for (let i = 0; i < hitPoints; i++) {
    hitPointsCounter.push(
      <span key={i}>
        <img src={missSmall} className="hitPointMark" alt={""} />
      </span>
    );
  }
  for (let j = 0; j < hits; j++) {
    hitCounter.push(
      <span key={j}>
        <img src={hitSmall} className="hitPointMark" alt={""} />
      </span>
    );
  }
  return (
    <span>
      {hitPointsCounter}
      {hitCounter}
    </span>
  );
};

export default Hitpoints;
