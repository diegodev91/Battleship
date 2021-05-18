import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const Navigator = (props) => {
  const { resetGame, screenMode } = props;
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>{<a href="/">{"Battleships React App"}</a>}</Navbar.Brand>
      </Navbar.Header>
      {screenMode === "desktop" && (
        <Nav pullRight>
          <NavItem onClick={() => resetGame()}>Restart</NavItem>
        </Nav>
      )}
    </Navbar>
  );
};

export default Navigator;
