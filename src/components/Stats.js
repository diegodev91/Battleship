import React from "react";
import { Col, Row } from "react-bootstrap";
import Flota from "./Flota";
import LeaderBoard from "./LeaderBoard";

export default function Stats(props) {
  const { flota, hits, shots } = props;
  return (
    <Col lg={2} lgOffset={2} md={3} mdOffset={2} sm={12} xs={12}>
      <Row>
        <div className="scoresPanel">
          <Col md={12} sm={4} xs={12}>
            <LeaderBoard hits={hits} shots={shots} />
          </Col>
          <Col md={12} sm={8} xs={12}>
            <Flota flota={flota} />
          </Col>
        </div>
      </Row>
    </Col>
  );
}
