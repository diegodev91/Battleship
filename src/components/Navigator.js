import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default function Navigator({ resetGame }) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>{<a href="/">{"Battleships React App"}</a>}</Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem onClick={() => resetGame()}>Restart</NavItem>
      </Nav>
    </Navbar>
  );
}
